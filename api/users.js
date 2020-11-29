// jshint esversion:6

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json("This is in /api/users");
});

module.exports = router;
