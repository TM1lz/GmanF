const express = require("express");
const app = express();
const port = 3080;
const path = require("path");
const clienteRoutes = require("./Routes/clienteRoutes.js"); // Importa as rotas de clientes
const funcionarioRoutes = require("./Routes/funcionarioRoutes.js"); // Importa as rotas de funcionário
const equipesDeManutencaoRoutes = require("./Routes/equipesDeManutencaoRoutes.js"); // Importa as rotas de equipes de manutenção
const chamadaDeManutencaoRoutes = require("./Routes/chamadaDeManutencaoRoutes.js"); // Importa as rotas de chamada de manutenção
const equipamentoRoutes = require("./Routes/equipamentosRoutes.js"); // Importa as rotas de equipamentos

// Conectar ao banco de dados
const { connectToDataBase } = require("./config/config.js");
connectToDataBase();

// Configuração do Express
app.use(express.json()); // Para lidar com requisições JSON
app.use(express.static(path.join(__dirname)));

// Usar as rotas
app.use("/api", clienteRoutes); // Prefixo "api" para todas as rotas de clientes
app.use("/api", funcionarioRoutes); // Prefixo "api" para todas as rotas de funcionários
app.use("/api", equipesDeManutencaoRoutes); // Prefixo "api" para todas as rotas de equipes de manutenção
app.use("/api", chamadaDeManutencaoRoutes); // Prefixo "api" para todas as rotas de chamadas de manutenção
app.use("/api", equipamentoRoutes); // Prefixo "api" para todas as rotas de equipamentos

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor ouvindo na porta ${port}`);
});
