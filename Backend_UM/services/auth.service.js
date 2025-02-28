const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { sendPasswordResetEmail } = require("./emailService");

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
      "Password must be at least 8 characters, one uppercase letter,lowercase letter,number, and a special character."
    );
  }

  const emailRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|net|org|gov|edu|co)$/;
  if (!emailRegex.test(email)) {
    throw new Error(
      "Invalid email format. Email must end with .com, .in, .org, etc."
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

exports.forgotPassword = async ({ email }) => {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    throw new Error("User not found");
  }

  // Generate a reset token
  const resetToken = crypto.randomBytes(32).toString("hex");
  const hashedToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // Save reset token in database with expiration time (15 minutes)
  await prisma.user.update({
    where: { email },
    data: {
      resetPasswordToken: hashedToken,
      resetPasswordExpires: new Date(Date.now() + 15 * 60 * 1000),
    },
  });

  // Send email with reset link
  const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}&email=${email}`;
  await sendPasswordResetEmail(email, resetLink, resetToken, hashedToken);
};

// exports.resetPassword = async ({ token, email, newPassword }) => {
//   const user = await prisma.user.findUnique({ where: { email } });
//   if (!user) {
//     throw new Error("Invalid token or email");
//   }

//   // Hash the received token and compare with stored one
//   const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

//   if (
//     hashedToken !== user.resetPasswordToken ||
//     user.resetPasswordExpires < new Date()
//   ) {
//     throw new Error("Token expired or invalid");
//   }

//   // Hash the new password
//   const hashedPassword = await bcrypt.hash(newPassword, 10);

//   // Update user password and clear reset token fields
//   await prisma.user.update({
//     where: { email },
//     data: {
//       password: hashedPassword,
//       resetPasswordToken: null,
//       resetPasswordExpires: null,
//     },
//   });
// };

exports.resetPassword = async ({ token, newPassword }) => {
  // Hash the received token (since it's stored hashed in the DB)
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

  // Find the user by the hashed token
  const user = await prisma.user.findFirst({
    where: {
      resetPasswordToken: hashedToken,
      resetPasswordExpires: { gt: new Date() }, // Ensure token is not expired
    },
  });

  if (!user) {
    throw new Error("Token expired or invalid");
  }

  // Hash the new password
  const hashedPassword = await bcrypt.hash(newPassword, 10);

  // Update user password and clear reset token fields
  await prisma.user.update({
    where: { userId: user.userId },
    data: {
      password: hashedPassword,
      resetPasswordToken: null,
      resetPasswordExpires: null,
    },
  });

  return { message: "Password reset successfully" };
};
