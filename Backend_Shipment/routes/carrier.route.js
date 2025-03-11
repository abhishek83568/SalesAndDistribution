const express = require("express");
const {
  createCarrier,
  editCarrier,
  getCarrier,
} = require("../controllers/carrier.controller");

const router = express.Router();

router.post("/create-carrier", createCarrier);
router.patch("/edit-carrier/:carrierId", editCarrier);
router.get("/get-carrier", getCarrier);

module.exports = router;
