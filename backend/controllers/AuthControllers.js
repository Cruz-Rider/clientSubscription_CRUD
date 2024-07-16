const express = require("express");

const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const Admin = require("../models/Admin");

require('dotenv').config();

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

    const payload = { id: admin.id };
    const token = jwt.sign(payload, process.env.JWT_SECRET);
    res.status(200).json({ message: "Login Successful!", token });
  } catch (err) {
    console.error("Error logging in admin:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
    login
}
