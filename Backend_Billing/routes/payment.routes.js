const express = require("express");
const {
  createPayment,
  editPayment,
  getPayment,
} = require("../controllers/payment.controller");

const router = express.Router();

router.post("/create-payment", createPayment);
router.patch("/edit-payment", editPayment);
router.get("/get-payment", getPayment);

module.exports = router;
