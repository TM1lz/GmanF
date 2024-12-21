const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/config.js");

const equipesDeManutencaoModel = sequelize.define("EquipesDeManutencao", {
  id_equipesDeManutencao: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  regiaoEquipe: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  supervisorEquipe: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  statusEquipe: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Ativa' // Valor padrão
  },
  numMembrosEquipe: {
    type: DataTypes.INTEGER,
    defaultValue: 0, // Valor padrão
    allowNull: false
  }
}, {
  tableName: "EquipesDeManutencao",
  timestamps: false
});

module.exports = equipesDeManutencaoModel;
