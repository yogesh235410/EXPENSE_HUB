const User = require("../Models/User");

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }
    res.status(200).json({
      message: "Successfully logged in",
      user,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      message: "An error occurred.",
    });
  }
};

const registerController = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({
      success: true,
      newUser,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      message: "An error occurred.",
    });
  }
};

module.exports = { loginController, registerController };
