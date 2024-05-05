// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// dotenv.config();

// const URL = process.env.MONGOURL;

// const dbConfig = async () => {
//   try {
//     const conn = await mongoose.connect(URL);
//     console.log(` DB connection established on: ${conn.connection.host}`);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// module.exports = dbConfig;

// const { model, Schema } = require("mongoose");
// const { isEmail } = require("validator");

// const userSchema = new Schema(
//   {
//     email: {
//       type: String,
//       unique: true,
//       required: [true, "Email is required"],
//     },
//     firstName: {
//       type: String,
//       required: [true, "Please provide your first name"],
//     },
//     lastName: {
//       type: String,
//       required: [true, "Please provide your last name"],
//     },
//     password: {
//       type: String,
//       required: [true, "Please provide your password"],
//       validator: [isEmail, "Please provide a valid email"],
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const User = model("Users", userSchema);
// module.exports = User;

// const bcrypt = require("bcryptjs");
// const User = require("../models/User");
// const jwt = require("jsonwebtoken");

// const signUp = async (req, res) => {
//   const { firstName, lastName, email, password } = req.body;
//   try {
//     const hash = await bcrypt.hash(password, 12);

//     // check if email was exist
//     const checkEmail = await User.exists({ email });
//     if (checkEmail !== null) {
//       return res.status(400).json({ message: "Email has been taken" });
//     }
//     // create user
//     const newUser = new User({
//       password: hash,
//       email,
//       firstName,
//       lastName,
//     });

//     await newUser?.save();

//     return res.status(201).json({ message: "Successfully signup" });
//   } catch (error) {
//     console.log(error);
//   }
// };

const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connection = async () => {
  try {
    await mongoose
      .connect("mongodb://127.0.0.1:27017/chatBot")
      .then(() => console.log("Db is connected"));
  } catch (error) {
    console.error(error);
  }
};

module.exports = connection;
