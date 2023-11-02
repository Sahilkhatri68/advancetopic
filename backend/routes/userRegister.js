const express = require("express");
const router = express.Router();
const UserSchema = require("../models/usermodel");

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to Register API",
  });
});

// code to post data in db
router.post("/", validateuser, async (req, res) => {
  console.log(req.body);
  const save_user = new UserSchema({
    fullname: req.body.fullname,
    phone: req.body.phone,
    age: req.body.age,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    await save_user.save();
    res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      status: "Error",
    });
  }
});
// code to validate user

async function validateuser(req, res, next) {
  const { fullname, phone, age, email, password } = req.body;
  console.log(req.body);
  if (
    fullname === "" ||
    phone === "" ||
    age === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json({
      message: "Please fill all fields ",
    });
  }
  if (password.length < 6) {
    return res.status(400).json({
      message: "Password must be atleast 6 characters ",
      staus: "Error",
    });
  }
  // code to check if email is already is regiter or not
  const user = await UserSchema.findOne({
    email: req.body.email,
  });
  if (user)
    return res.status(400).json({
      message: "Email is already register ",
      status: "Error",
    });
  next();
}

module.exports = router;
