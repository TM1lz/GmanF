const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/config.js");

const equipamentoModel = sequelize.define(
  "Equipamento",
  {
    id_equipamento: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome_equipamento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    modelo_equipamento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    data_ultima_manutencao: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    data_proxima_manutencao: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
  },
  {
    tableName: "Equipamentos",
    timestamps: false,
  }
);

module.exports = equipamentoModel;
