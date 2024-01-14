require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

// db connection
const sequelize = require("./db/connect");

app.use(express.json());
app.use(cors());

// TEST
app.get("/test", (req, res) => {
  res.status(200).json({ msg: "hello from server" });
});

const port = process.env.PORT || 5300;

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    app.listen(port, () => {
      console.log(`running on port:${port}...`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

start();
