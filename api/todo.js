// jshint esversion:6

const express = require("express");
const router = express.Router();

let ToDos = [];

router.get("/", (req, res) => {
  res.status(200).json(ToDos);
});

router.get("/:ToDoId", (req, res) => {
  const { ToDoId } = req.params;

  if (ToDos[+ToDoId]) {
    res.status(200).json(ToDos[+ToDoId]);
  } else {
    res.status(404).json("ToDo Item Not Found!");
  }
});

router.post("/", express.json(), (req, res) => {
  if (typeof req.body.text !== "undefined") {
    if (ToDos.indexOf(req.body.text) > -1) {
      res.status(409).json("Already exists.");
    } else {
      ToDos.push(req.body.text);
      res.status(201).json(ToDos.length - 1);
    }
  } else {
    res.status(400).json("You have to enter text.");
  }
});

router.put("/:ToDoId", express.json(), (req, res) => {
  const { ToDoId } = req.params;

  if (ToDos[+ToDoId]) {
    if (typeof req.body.text !== "undefined") {
      ToDos[+ToDoId] = req.body.text;
      res.status(202).json(ToDos[+ToDoId]);
    } else {
      res.status(404).json("You have to enter text.");
    }
  } else {
    res.status(404).json("ToDo Item Not Found!");
  }
});

router.delete("/:ToDoId", (req, res) => {
  const { ToDoId } = req.params;

  if (ToDos[+ToDoId]) {
    ToDos[+ToDoId] = null;
    res.status(204).json("");
  } else {
    res.status(404).json("ToDo Item Not Found!");
  }
});

module.exports = router;
