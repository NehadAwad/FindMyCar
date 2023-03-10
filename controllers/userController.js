const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// login a user
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signup a user
exports.signupUser = async (req, res) => {
  const { email, password, name } = req.body;
  //   console.log(email, password, name)
  // console.log(req.body);
  try {
    const user = await User.signup(email, password, name);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    console.log("eee");
    res.status(400).json({ error: error.message });
  }
};

// module.exports = { signupUser, loginUser };
