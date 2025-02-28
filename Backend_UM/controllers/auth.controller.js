const authService = require("../services/auth.service");

exports.register = async (req, res) => {
  try {
    const user = await authService.register(req.body);
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const tokens = await authService.login(req.body);
    res.status(200).json(tokens);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.refreshToken = async (req, res) => {
  try {
    const tokens = await authService.refreshToken(req.body);
    res.status(200).json(tokens);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.logout = async (req, res) => {
  try {
    await authService.logout(req.body);
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.forgotPassword = async (req, res) => {
  try {
    const data = await authService.forgotPassword(req.body);
    res.status(200).json({ message: "Reset link sent to email" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    await authService.resetPassword(req.body);
    res.status(200).json({ message: "Password reset successfully!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
