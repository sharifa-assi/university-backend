const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: false,
    },
    password: {
      type: String,
      bcrypt: true,
    },
    firstName: {
      type: String,
      unique: false,
    },
    lastName: {
      type: String,
      unique: false,
    },
    creationDate:
    { type: Date, required: false,
      default: Date.now }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
