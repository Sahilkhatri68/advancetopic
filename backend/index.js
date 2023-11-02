const express = require("express");
const mongoose = require("mongoose");
const PORT = 4000;
const app = express();
app.use(express.json());
const connectDB = require("./config/Db");
connectDB();

app.get("/", (req, res) => {
  res.send("Server is running ");
});
app.use("/api/getalluser", require("./routes/getuser"));
app.use("/api/userregister", require("./routes/userRegister"));

app.listen(PORT, () => {
  console.log(`Backend Server running on http://localhost:${PORT}`);
});
