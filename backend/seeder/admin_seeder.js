const Sequelize = require('sequelize');
const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
require('dotenv').config();

(async () => {
  try {
    const existingAdmin = await Admin.findOne();

    if (existingAdmin) {
      console.log('Admin exists already. DELETING...');
      await Admin.destroy();
    }

    // Admin credentials
    const adminData = {
      email: "hello@wel.com",
      password: "PaSsWoRd",
    };

    // Hash password using bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(adminData.password, salt);

    const admin = await Admin.create({
      email: adminData.email,
      password: hashedPassword,
    });

    console.log('Admin user created:', admin.toJSON());
  } catch (error) {
    console.error('Error creating admin user:', error);
  }
})();
