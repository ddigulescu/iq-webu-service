"use strict";

const Student = require("./model");
const errHandler = require("../../helpers/errHandler");

const getStudents = (req, res) => {
  return Student.find()
    .then(students => (students.length > 0 ? res.json(students) : res.json([])))
    .catch(errHandler(res));
};

const addStudent = (req, res) => {
  const { name, email } = req.body;
  if (name && email) {
    const student = new Student({
      name,
      email
    });
    return student
      .save()
      .then(doc => res.json(doc))
      .catch(errHandler(res));
  }
  return res.json({ error: "Both email and name fields are required" });
};

const getByEmail = (req, res) => {
  const { email } = req.query;
  if (!email) {
    return res.json({ error: "Email field missing from request" });
  }
  return Student.findOne({ email })
    .then(student => (student ? res.json(student) : res.json({})))
    .catch(errHandler(res));
};

const greet = (req, res) => {
  const { name, email } = req.body;
  if (name && email) {
    return Student.findOne({ email })
      .then(student => {
        student.set({ meetgreet: true, name });
        return student.save();
      })
      .then(student => {
        return res.json({ name: student.name });
      })
      .catch(errHandler(res));
  }
  return res.json({ error: "Both email and name filelds are required" });
};

module.exports = {
  getStudents,
  addStudent,
  getByEmail,
  greet
};
