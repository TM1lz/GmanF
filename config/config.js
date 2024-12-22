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
app.use((req, res, next) => {
  console.log(`Requisição recebida: ${req.method} ${req.url}`);
  next();
});

// Configuração do Sequelize
const sequelize = new Sequelize('GmanSys', 'San_SQLLogin_1', 'eeb94y9ivn', { 
  dialect: 'mssql',
  dialectModule: require('tedious'),
  host: 'GmanSys.mssql.somee.com',
  port: 1433
});

// Função para conectar ao banco de dados
const connectToDataBase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados realizada com sucesso!");
  } catch (error) {
    console.error(`Erro ao conectar com o banco de dados: ${error}`);
  }
};

connectToDataBase();

// Rota de exemplo
// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

