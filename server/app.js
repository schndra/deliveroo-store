require("dotenv").config();
const express = require("express");
const app = express();

// db connection
const sequelize = require("./db/connect");

// TEST
app.get("/", (req, res) => {
  res.status(200).send("hello from server");
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
