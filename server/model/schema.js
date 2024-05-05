const { model, Schema } = require("mongoose");
const { isEmail } = require("validator");
const dotenv = require("dotenv");
dotenv.config();

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: [true, "Please provide username"],
    },
    email: {
      type: String,
      validate: [isEmail, "Please provide a valid email"],
      required: [true, "Please provide email"],
    },
    password: {
      type: String,
      require: [true, "Please provide password"],
    },
  },
  {
    timestamps: true,
  }
);

const User = new model("users", userSchema);

module.exports = User;
