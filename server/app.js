import "dotenv/config";
import express from "express";
const app = express();

// TEST
app.get("/", (req, res) => {
  res.status(200).send("hello from server");
});

const port = process.env.PORT || 5300;
app.listen(port, () => {
  console.log(`running on port:${port}...`);
});
