require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
var cookieParser = require("cookie-parser");

// db connection
const sequelize = require("./db/connect");

//routers
const authRouter = require("./routes/authRouter");
const userRouter = require("./routes/userRouter");
const restaurantRouter = require("./routes/restaurantRouter");

//middleware
const errorHandlerMiddleware = require("./middleware/errorHandlerMiddleware");
const authMiddleware = require("./middleware/authMiddleware");

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// TEST
app.get("/api/v1/test/:id", (req, res) => {
  res.status(200).json({ msg: "hello from server" });
});

// login and register USERS
app.use("/api/v1/users", authMiddleware, userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/restaurants", restaurantRouter);

app.use("*", (req, res) => {
  res.status(200).json({ msg: "Not Found" });
});

app.use(errorHandlerMiddleware);

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
