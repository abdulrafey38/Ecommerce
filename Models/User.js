const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin"],
  },
  verification_code: {
    type: String,
  },
  is_verified: {
    type: Boolean,
    default: false,
  },
  accessToken: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
