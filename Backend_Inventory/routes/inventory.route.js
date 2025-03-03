const express = require("express");
const {
  createOrUpdateInventory,
} = require("../controllers/inventory.controller");
const router = express.Router();

router.post("/create-inventory", createOrUpdateInventory);

module.exports = router;
