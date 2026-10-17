const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "yourSecretKey";

// Register User
const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({ msg: "All fields required" });
    }

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10); // Manual hash
    user = new User({ name, email, password: hashedPassword, role });
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.status(201).json({ msg: "Registered!", token });
  } catch (err) {
    console.log("❌ Server Error:", err.message);
    res.status(500).json({ msg: "Server error" });
  }
};


const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ msg: "User not found" });
  }

  console.log("🔐 Comparing:", password, user.password);

  const isMatch = await bcrypt.compare(password, user.password);
  console.log("✅ isMatch:", isMatch);

  if (!isMatch) {
    return res.status(401).json({ msg: "Password mismatch" });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
  return res.status(200).json({ success: true, token });
};




module.exports = { registerUser, loginUser };
