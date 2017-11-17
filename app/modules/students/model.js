"use strict";

const mongoose = require("mongoose");

const Student = mongoose.model("Student", {
  name: {
    type: String,
    minlength: 1,
    trim: true
  },
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  meetgreet: {
    type: Boolean,
    default: false
  }
});

module.exports = Student;
