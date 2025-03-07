const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
