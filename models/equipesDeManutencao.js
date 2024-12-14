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
  supervisorEquipe:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  statusEquipe: {
    type: DataTypes.STRING,
    allowNull: false,
  },

 
}, {
  tableName: "EquipesDeManutencao",
  timestamps: false // Caso você não utilize os campos 'createdAt' e 'updatedAt'
});

module.exports = equipesDeManutencaoModel;
