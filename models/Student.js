const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
 
    firstName: {
      type: String,
      required: true,
      unique: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: false,
    },
    phoneNumber: {
      type: String,
      required: false,
    },
    countryCode: {
      type: String,
      required: false,
    },
    creationDate:
    { type: Date,
      required: false,
      default: Date.now },

      dateOfBirth:
      { type: Date, },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", StudentSchema);
