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
  funcao_funcionario: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone_funcionario: {
    type: DataTypes.STRING(25), // Ajustado para VARCHAR(25)
    allowNull: false,
  },
  email_funcionario: {
    type: DataTypes.STRING(100), // Ajustado para VARCHAR(100)
    allowNull: false,
    unique: true,
  },
  senha_funcionario: {
    type: DataTypes.STRING(100), // Ajustado para VARCHAR(100) (com base no seu modelo de banco de dados)
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
