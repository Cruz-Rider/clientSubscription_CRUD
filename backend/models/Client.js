const Sequelize = require('sequelize');
const sequelize = require('../database/database');

const Client = sequelize.define('Client', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true, // Ensure unique email addresses
  },
  mobile_number: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  start_date: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  end_date: {
    type: Sequelize.DATEONLY,
    allowNull: false,
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

module.exports = Client;
