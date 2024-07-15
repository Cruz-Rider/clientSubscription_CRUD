const Sequelize = require('sequelize')
const sequelize = require('../database/database');

const Admin = sequelize.define('Admin', {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

(async () => {
  try {
    await sequelize.sync();
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing models:', error);
  }
})();

module.exports = Admin;
