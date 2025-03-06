const express = require("express");
const router = express.Router();
const productMovementController = require("../controllers/productMovement.controller");

router.post(
  "/create-productMovement",
  productMovementController.createProductMovement
);

module.exports = router;
