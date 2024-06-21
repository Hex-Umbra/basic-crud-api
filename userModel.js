const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String, required: [true, "Please insert a username"] },
  email: { type: String, required: [true, "Please insert an e-mail"] },
  gender: { type: String, default: "none" },
  birthdate: { type: String, default: "2000" },
  country: {
    type: String,
    required: [true, "Please insert a your country of origin"],
  },
  favorite_techno: {
    type: String,
    required: [true, "Please insert you favorite technology"],
  },
  job_title: {
    type: String,
    required: [true, "Please tell us what's your job"],
  },
  annual_salary: {
    type: Number,
    required: [true, "Please tell us how much you wanna earn"],
  },
  last_login: { type: Date, default: Date.now },
});

const usersModel = mongoose.model("LinkedInUsers", userSchema);

module.exports = usersModel;
