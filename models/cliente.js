// models/cliente.js
const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/config.js");

const clienteModel = sequelize.define("Cliente", {
  id_cliente: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome_empresa: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone_empresa: {
    type: DataTypes.STRING(25),
    allowNull: false,
  },
  email_empresa: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  }
}, {
  tableName: "Cliente",
  timestamps: false // Caso você não utilize os campos 'createdAt' e 'updatedAt'
});

module.exports = clienteModel;
