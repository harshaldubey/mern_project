const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send(`Hello world from the server router js`);
});

// using promises
// router.post("/register", (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;

//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     res.status(422).json({ error: "Plz filled the field properly" });
//   }

//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ error: "Email already exist" });
//       }

//       const user = new User({ name, email, phone, work, password, cpassword });

//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ message: "user registered successfully" });
//         })
//         .catch((err) => res.status(500).json({ error: "Failed to register" }));
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// Async-Await
// app.use(express.static(path.join(__dirname, "pics")));
// app.use(express.static(__dirname + "../client"));
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Plz fill the field properly" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already exist" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: " password are not matching" });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });

      await user.save();

      res.status(201).json({ message: "user registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

// login route

router.post("/signin", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Plz Filled the data" });
    }

    const userLogin = await User.findOne({ email: email });

    // console.log(userLogin);

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      token = await userLogin.generateAuthToken();
      console.log(token);

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 2589200000),
        htttpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credentials Pass" });
      } else {
        res.json({ message: "user Signin successfully" });
      }
    } else {
      res.status(400).json({ error: "Inavlid Credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

// about us page
router.get("/about", authenticate, (req, res) => {
  console.log(`Hello my About`);
  res.send(req.rootUser);
});

// get user data for contact us and home page
router.get("/getdata", authenticate, (req, res) => {
  console.log(`Hello my getdata`);
  res.send(req.rootUser);
});

// contact us page
router.post("/contact", authenticate, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      console.log("error in contact form");
      return res.json({ error: "Please filled the contact form properly" });
    }

    const userContact = await User.findOne({ _id: req.userID });
    if (userContact) {
      const userMessage = await userContact.addMessage(
        name,
        email,
        phone,
        message
      );
      await userContact.save();
      res.status(201).json({ message: "user Contact successfully" });
    }
  } catch (error) {
    console.log(error);
  }
});

//logout page
router.get("/logout", (req, res) => {
  console.log(`Hello my Logout Page`);
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send("User Logout");
});

module.exports = router;
