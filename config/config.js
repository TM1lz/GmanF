// config/config.js
const { Sequelize } = require('sequelize');

// Criação da instância do Sequelize
const sequelize = new Sequelize('GmanSys', 'San_SQLLogin_1', 'eeb94y9ivn', {
  dialect: 'mssql',
  dialectModule: require('tedious'),
  host: 'GmanSys.mssql.somee.com',
  port: 1433,
});

// Testando a conexão
const connectToDataBase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados realizada com sucesso!");
  } catch (error) {
    console.error(`Erro ao conectar com o banco de dados: ${error}`);
  }
};

// Exportando a instância do Sequelize
module.exports = { sequelize , connectToDataBase };
