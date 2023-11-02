require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log("ORG Database connected successfully ");
  } catch (error) {
    console.log("Connection Error");
    console.log(error);
  }
};

module.exports = connectDB;
