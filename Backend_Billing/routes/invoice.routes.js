const express = require("express");
const {
  createInvoice,
  editInvoice,
  getInvoice,
} = require("../controllers/invoice.controller");

const router = express.Router();

router.post("/create-invoice", createInvoice);
router.patch("/edit-invoice", editInvoice);
router.get("/get-invoice", getInvoice);

module.exports = router;
