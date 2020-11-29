// jshint esversion:6

const express = require("express");
const router = express.Router();
const users = require("./users");
const todo = require("./todo");

router.get("/", (req, res) => {
  res.status(200).json("This is in /api/users");
});

router.use("/users", users);
router.use("/todo", todo);

module.exports = router;
