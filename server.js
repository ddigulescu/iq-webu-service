"use strict";

const _ = require("lodash");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { ObjectId } = require("mongodb");

const { mongoose } = require("./app/db");
const { Student } = require("./app/models");

const app = express();
const port = process.env.PORT || 8080;

const errHandler = res => err => res.json({ error: "Something went wrong" });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});
app.get("/students", (req, res) => {
  Student.find()
    .then(students => (students.length > 0 ? res.json(students) : res.json([])))
    .catch(errHandler(res));
});
app.post("/students/add", (req, res) => {
  const { name, email } = req.body;
  const student = new Student({
    name,
    email,
    postAdded: true
  });
  return student
    .save()
    .then(doc => res.json(doc))
    .catch(errHandler(res));
});
app.get("/byemail", (req, res) => {
  Student.findOne({ email: req.query.email })
    .then(student => res.json(student))
    .catch(errHandler(res));
});
app.post("/greet", (req, res) => {
  const { name, email } = req.body;
  Student.findOne({ email })
    .then(student => {
      student.set({ meetgreet: true, name });
      return student.save();
    })
    .then(student => {
      return res.json({ name: student.name });
    })
    .catch(errHandler(res));
});
app.use((req, res) => res.json({ error: "Not found" }));

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});
