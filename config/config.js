const Sequelize = require("sequelize");
const cors = require('cors');


app.use(cors());
app.use(cors({
  origin: '*', // Permitir apenas esse domínio
  methods: ['GET', 'POST'], // Especificar métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'] // Cabeçalhos permitidos
}));
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