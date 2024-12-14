

const Sequelize = require("sequelize");

const sequelize = new Sequelize('Gman', 'sa', 'UserAdm123', { // Nome do banco, usuário e senha 
  dialect: 'mssql',
  dialectModule: require('tedious'),
  host: 'localhost',
  port: 1433
 
});

const connectToDataBase = async () => {
  try {
    await sequelize.authenticate();
    console.log(`Conexão com o banco de dados realizada com sucesso!`);
  } catch (error) {
    console.error(`Erro ao conectar com o banco de dados: ${error}`);
  }
};

module.exports = { sequelize, connectToDataBase };





