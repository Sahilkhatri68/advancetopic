const express = require("express");
const router = express.Router();

const UserSchema = require("../models/usermodel");

router.get("/", async (req, res) => {
  try {
    const allUser = await UserSchema.find().lean();
    res.json(allUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;
