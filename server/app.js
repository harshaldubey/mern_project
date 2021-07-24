const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());

dotenv.config({ path: "./config.env" });

require("./db/conn");
// const User = require("./model/userSchema");

app.use(express.json());

// we link the router files to make route easy
app.use(require("./router/auth"));

//2:step heroku
// const PORT = process.env.PORT || 5000;
const PORT = process.env.PORT;

// Middelware
// const Middelware = (req, res, next) => {
//   console.log("Hello my middleware");
//   next();
// };

// app.get("/about", Middelware, (req, res) => {
//   res.send(`Hello About world from the server`);
// });
// app.get("/contact", (req, res) => {
//   res.send(`Hello Contact world from the server`);
// });
// app.get("/signin", (req, res) => {
//   res.send(`Hello Login world from the server`);
// });
app.get("/signup", (req, res) => {
  res.send(`Hello Registration world from the server`);
});

// 3:step heroku
// if (process.env.NODE_ENV == "production") {
//   app.use(express.static("client/build"));
// }

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
