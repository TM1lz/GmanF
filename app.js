const cors = require('cors')
const express = require("express");
const app = express();
const port = 3080;
const path = require("path");

// Importando as rotas
const clienteRoutes = require("./Routes/clienteRoutes.js"); 
const funcionarioRoutes = require("./Routes/funcionarioRoutes.js");
const equipesDeManutencaoRoutes = require("./Routes/equipesDeManutencaoRoutes.js");
const chamadaDeManutencaoRoutes = require("./Routes/chamadaDeManutencaoRoutes.js");
const equipamentoRoutes = require("./Routes/equipamentosRoutes.js");

// Caminho para a página HTML
const htmlPage = path.join(__dirname, "views", "index.html");

// Conectar ao banco de dados
const { connectToDataBase } = require("./config/config.js");
connectToDataBase();
app.use(cors())
// Configuração do Express
app.use(express.json()); // Para lidar com requisições JSON
app.use(express.static(path.join(__dirname, "public"))); // Pasta para arquivos estáticos

// Rota para servir o arquivo HTML
app.get("/", (req, res) => {
  res.sendFile(htmlPage);
});
// Usar as rotas com prefixo 'api'
app.use("/clientes", clienteRoutes); 
app.use("/funcionarios", funcionarioRoutes);
app.use("/equipes-de-manutencao", equipesDeManutencaoRoutes);
app.use("/chamadas-de-manutencao", chamadaDeManutencaoRoutes);
app.use("/equipamentos", equipamentoRoutes);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});