const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const shipmentRouter = require("./routes/shipment.route");
const carrierRouter = require("./routes/carrier.route");

app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use("/api/shipment", shipmentRouter);
app.use("/api/carrier", carrierRouter);
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
