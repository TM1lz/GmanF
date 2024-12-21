// models/chamadaDeManutencao.js
const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/config.js");
const clienteModel = require("./cliente");
const equipesDeManutencaoModel = require("./equipesDeManutencao");

const chamadaDeManutencaoModel = sequelize.define(
  "ChamadaDeManutencao",
  {
    id_manutencao: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tipoDeManutencao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  
    dataManutencao: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    reagendamentoManutencao: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    pagamentoManutencao: {
      type: DataTypes.DECIMAL(10, 2),
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: clienteModel,
        key: "id_cliente",
      },
    },
    id_equipeManu: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: equipesDeManutencaoModel,
        key: "id_equipesDeManutencao",
      },
    },
  },
  {
    tableName: "ChamadaDeManutencao",
    timestamps: false,
  }
);

// Associações
chamadaDeManutencaoModel.belongsTo(clienteModel, {
  foreignKey: "id_cliente",
  as: "Cliente",
});

chamadaDeManutencaoModel.belongsTo(equipesDeManutencaoModel, {
  foreignKey: "id_equipeManu",
  as: "EquipeDeManutencao",
});

module.exports = chamadaDeManutencaoModel;
