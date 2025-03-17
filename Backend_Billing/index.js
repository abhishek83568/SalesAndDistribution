const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const invoiceRouter = require("./routes/invoice.routes");
const paymentRouter = require("./routes/payment.routes");

app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use("/api/invoice", invoiceRouter);
app.use("/api/payment", paymentRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
