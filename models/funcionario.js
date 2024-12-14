const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/config.js");

const funcionarioModel = sequelize.define("Funcionarios", {
  id_funcionario: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome_funcionario: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  funcao_funcionario:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  telefone_funcionario: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  email_funcionario: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  login_funcionario:{
    type:DataTypes.BIGINT,
    allowNull: false,
  },
  idEquipeFuncionario: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
        model: "EquipesDeManutencao",
        key: "id_equipesDeManutencao"
    }
}

 
}, {
  tableName: "Funcionarios",
  timestamps: false // Caso você não utilize os campos 'createdAt' e 'updatedAt'
});

module.exports = funcionarioModel;
