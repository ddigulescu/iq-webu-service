"use strict";

const mongoose = require("mongoose");

const options = {
  useMongoClient: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  poolSize: 10,
  bufferMaxEntries: 0
};

mongoose.Promise = require("bluebird");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/iqu",
  options
);

module.exports = { mongoose };
