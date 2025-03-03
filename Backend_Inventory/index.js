const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const inventoryRouter = require("./routes/inventory.route");

app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use("/api/inventory", inventoryRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
