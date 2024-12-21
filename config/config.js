const Sequelize = require("sequelize");

const sequelize = new Sequelize('GmanSys', 'San_SQLLogin_1', 'eeb94y9ivn', { // Nome do banco, usuário e senha 
  dialect: 'mssql',
  dialectModule: require('tedious'),
  host: 'GmanSys.mssql.somee.com',
  port: 1433
 
});

const connectToDataBase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados realizada com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar com o banco de dados: ${error}");
  }
};
connectToDataBase()
module.exports = { sequelize, connectToDataBase };