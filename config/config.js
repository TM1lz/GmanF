const { Sequelize } = require("sequelize"); // Importa Sequelize corretamente

// Cria a instância do Sequelize
const sequelize = new Sequelize('Gman', 'root', 'caio', {
  host: 'localhost',
  dialect: 'mysql', // Dialeto MySQL
  port: 3000, // Adicione a porta correta caso tenha alterado
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
