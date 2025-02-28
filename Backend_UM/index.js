const express = require("express");
const app = express();
const authRoutes = require("./routes/auth.route");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

// Mount auth routes under /api/auth
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
