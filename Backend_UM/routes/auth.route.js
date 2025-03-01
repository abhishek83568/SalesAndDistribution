const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const { forgotPasswordLimiter } = require("../middlewares/rateLimit");
const { validateResetPassword } = require("../middlewares/validation");
const authenticate = require("../middlewares/auth.middleware");

router.get("/get-user", authenticate, authController.getUser);

// Registration endpoint
router.post("/register", authController.register);

// Login endpoint
router.post("/login", authController.login);

router.patch("/edit-profile", authenticate, authController.editProfile);

// Refresh token endpoint
router.post("/refresh-token", authController.refreshToken);

// Logout endpoint
router.post("/logout", authController.logout);

// Forgot and Reset Password Routes
router.post(
  "/forgot-password",
  forgotPasswordLimiter,
  authController.forgotPassword
);
router.post(
  "/reset-password",
  validateResetPassword,
  authController.resetPassword
);

module.exports = router;
