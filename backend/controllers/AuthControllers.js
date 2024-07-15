const express = require("express");
const bcrypt = require("bcryptjs");
const Admin = require("../models/Admin");

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ where: { email } });
    if (!admin) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const validPassword = await bcrypt.compare(password, admin.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Successful login, send relevant data (e.g., a token)
    // You might use libraries like JWT to generate tokens
    res.status(200).json({ message: "Login Successful!" });
  } catch (err) {
    console.error("Error logging in admin:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
    login,
}
