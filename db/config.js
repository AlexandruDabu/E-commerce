const { Sequelize } = require('sequelize');
require('dotenv').config();


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres'
  });

  sequelize.authenticate().then(() => {
    console.log('Success Connection');
  }).catch(err => {
    console.log('Error connecting to DB');
  })

module.exports = sequelize;