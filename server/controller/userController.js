const User = require("../model/schema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.signUp = async (req, res) => {
  const { username, password } = req.body;

  // Check if all data are provided
  if (!username || !password) {
    return res.json({ error: "Please provide all fields" });
  }

  try {
    // Check if username exist
    const checkUsername = await User.exists({ username });
    if (checkUsername !== null) {
      return res.json({ error: "Username already exist", success: false });
    }

    // Check if email exist
    // const checkEmail = await User.exists({ email });
    // if (checkEmail !== null) {
    //   return res.json({ error: "Email already exist", success: false });
    // }

    // Check password length
    if (password.length < 6) {
      return res.json({
        error: "Password length must be more than 6",
        success: false,
      });
    }

    // Encrypt the password
    const hashPassword = await bcrypt.hash(password, 10);

    // Create the user
    const newUser = new User({
      username,
      // email,
      password: hashPassword,
    });

    // Save the user into the db (if there's no error with newUser. newUser could be null or undefined)
    await newUser?.save();
    return res.json({ message: "Registration successful", success: true });
  } catch (error) {
    console.log(`thisError: `, error);
    return res.json(error.message);
  }
};

module.exports.login = async (req, res) => {
  const { username, password } = req.body;

  // Check if all data are provided
  if (!username || !password) {
    return res.json({ error: "Please provide all fields", success: false });
  }

  // Check for username
  const checkUser = await User.findOne({ username });
  console.log(`user:`, checkUser);
  if (!checkUser) {
    return res.json({ error: "User not found", success: false });
  }

  // Check if password is correct
  const checkPassword = await bcrypt.compare(password, checkUser.password);
  if (!checkPassword) {
    return res.json({ error: "Wrong password", success: false });
  }

  const token = jwt.sign({ _id: checkUser._id }, process.env.SecretKey);
  console.log(`token: `, token);
  res.cookie("authorized", token);

  return res.json({
    message: "Welcome, login successful",
    data: checkUser,
    success: true,
  });
};

module.exports.logout = async (_, res) => {
  res.cookie("authorized", "", { maxAge: 1 });
  return res.json({ message: "Logout Successful", success: true });
};

module.exports.resetPassword = async (req, res) => {
  const { username, password } = req.body;

  // Check if all data are provided
  if (!username || !password) {
    return res.json({ error: "Please provide all fields" });
  }

  try {
    // Check if username exist
    const checkUsername = await User.exists({ username });
    if (!checkUsername) {
      return res.json({ error: "User doesn't exist", success: false });
    }

    // Check password length
    if (password.length < 6) {
      return res.json({
        error: "Password length must be more than 6",
        success: false,
      });
    }

    // Encrypt the password
    const hashPassword = await bcrypt.hash(password, 10);

    // Update the user
    await User.updateOne({ username }, { password: hashPassword });

    return res.json({ message: "Password changed successful", success: true });
  } catch (error) {
    console.log(`thisError: `, error);
    return res.json(error.message);
  }
};
