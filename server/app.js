const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" });

require("./db/conn");
// const User = require("./model/userSchema");

app.use(express.json());

// we link the router files to make route easy
app.use(require("./router/auth"));

const PORT = process.env.PORT;

// Middelware
// const Middelware = (req, res, next) => {
//   console.log("Hello my middleware");
//   next();
// };

app.get("/signin", (req, res) => {
  res.send(`Hello Login world from the server`);
});
app.get("/signup", (req, res) => {
  res.send(`Hello Registration world from the server`);
});
app.get("/contact", (req, res) => {
  res.send(`Hello Contact world from the server`);
});

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
