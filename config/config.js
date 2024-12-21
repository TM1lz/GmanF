const Sequelize = require("sequelize");
const cors = require('cors');
const express = require('express');
const app = express();

// Configuração do CORS
app.use(cors({
  origin: '*', // Permitir qualquer domínio
  methods: ['GET', 'POST'], // Especificar métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'] // Cabeçalhos permitidos
}));

// Configuração do Sequelize
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
    // Corrigido para usar template literals (backticks) para interpolação de variáveis
    console.error(`Erro ao conectar com o banco de dados: ${error}`);
  }
};

connectToDataBase();

module.exports = { sequelize, connectToDataBase };
