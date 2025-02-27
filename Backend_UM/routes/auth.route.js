const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

// Registration endpoint
router.post("/register", authController.register);

// Login endpoint
router.post("/login", authController.login);

// Refresh token endpoint
router.post("/refresh-token", authController.refreshToken);

// Logout endpoint
router.post("/logout", authController.logout);

module.exports = router;
