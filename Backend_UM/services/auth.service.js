const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Retrieve secrets from environment variables
const ACCESS_TOKEN_SECRET =
  process.env.ACCESS_TOKEN_SECRET || "youraccesstokensecret";
const REFRESH_TOKEN_SECRET =
  process.env.REFRESH_TOKEN_SECRET || "yourrefreshtokensecret";

// In-memory storage for refresh tokens (for demonstration only)
let refreshTokens = [];

// exports.register = async ({ name, email, password, phoneNumber }) => {
//   // Check if the user already exists
//   const existingUser = await prisma.user.findUnique({ where: { email } });
//   if (existingUser) {
//     throw new Error("User already exists");
//   }
//   // Hash the password
//   const hashedPassword = await bcrypt.hash(password, 10);
//   // Create and return the new user
//   const user = await prisma.user.create({
//     data: {
//       name,
//       email,
//       password: hashedPassword,
//       phoneNumber,
//     },
//   });
//   return user;
// };
exports.register = async ({ name, email, password, phoneNumber }) => {
  // Validate password strength
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(password)) {
    throw new Error(
      "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."
    );
  }

  // Check if the user already exists
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    throw new Error("User already exists");
  }
  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);
  // Create and return the new user
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      phoneNumber,
    },
  });
  return user;
};

exports.login = async ({ email, password }) => {
  // Find the user by email
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new Error("Invalid email or password");
  }
  // Compare passwords
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    throw new Error("Invalid email or password");
  }
  // Generate tokens
  const accessToken = jwt.sign(
    { userId: user.userId, email: user.email },
    ACCESS_TOKEN_SECRET,
    { expiresIn: "15m" } // Short-lived access token
  );
  const refreshToken = jwt.sign(
    { userId: user.userId, email: user.email },
    REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" } // Longer-lived refresh token
  );
  // Store the refresh token
  refreshTokens.push(refreshToken);
  return { accessToken, refreshToken };
};

exports.refreshToken = async ({ token }) => {
  if (!token) {
    throw new Error("Refresh token is required");
  }
  if (!refreshTokens.includes(token)) {
    throw new Error("Invalid refresh token");
  }
  try {
    const payload = jwt.verify(token, REFRESH_TOKEN_SECRET);
    const accessToken = jwt.sign(
      { userId: payload.userId, email: payload.email },
      ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );
    return { accessToken };
  } catch (error) {
    throw new Error("Invalid refresh token");
  }
};

exports.logout = async ({ token }) => {
  // Remove the refresh token from the in-memory store
  refreshTokens = refreshTokens.filter((t) => t !== token);
  return;
};
