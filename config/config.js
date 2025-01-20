require('dotenv').config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: process.env.DB_DIALECT,
    dialectModule: require(process.env.DB_DIALECT_MODULE),
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  }
);

