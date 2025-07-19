const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {

    console.log("Inside register:");
    console.log("Request body:", req.body);
    const { email, password, firstName, lastName } = req.body; 
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: "User already exists" });
  
    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashed, firstName, lastName }); 
  
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.json({ token, email: user.email, firstName: user.firstName, lastName: user.lastName });
  };

  const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });
  
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: "Invalid credentials" });
  
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.json({ token, email: user.email, firstName: user.firstName, lastName: user.lastName });
  };

module.exports = { register, login };
