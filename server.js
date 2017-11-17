"use strict";

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const appRouter = require("./app/router");

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

app.use(appRouter);

app.use((req, res) => res.json({ error: "Not found" }));

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});
