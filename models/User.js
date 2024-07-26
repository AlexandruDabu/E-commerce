// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/config'); // Adjust the path as necessary

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  phonenumber: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  role: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
}, {
  tableName: 'users',
  timestamps: false, // Disable automatic timestamps if not present in the table
});

module.exports = User;