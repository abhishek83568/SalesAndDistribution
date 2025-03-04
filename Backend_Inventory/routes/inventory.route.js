const express = require("express");
const { createInventory } = require("../controllers/inventory.controller");

const router = express.Router();

router.post("/create-inventory", createInventory);

module.exports = router;
