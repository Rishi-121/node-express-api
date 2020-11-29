// jshint esversion:6

const express = require("express");
const morgan = require("morgan");
const CORS = require("./cors");
const api = require("./api/root");

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("combined"));

app.use(CORS);
app.use("/api", api);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Got the GET Resquest",
  });
});

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
