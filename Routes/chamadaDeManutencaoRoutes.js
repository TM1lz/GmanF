// Routes/chamadaDeManutencaoRoutes.js
const express = require('express');
const router = express.Router();
const chamadaDeManutencaoController = require('../controllers/chamadaDeManutencaoController');

// Rota para listar todas as chamada de manutencao
router.get('/chamadaDeManutencao', chamadaDeManutencaoController.listarChamadaDeManutencao);

// Rota para criar uma nova chamada de manutencao
router.post('/chamadaDeManutencao', chamadaDeManutencaoController.criarChamadaDeManutencao);

// Rota para editar uma chamada de manutencao existente
router.put('/chamadaDeManutencao/:id_manutencao', chamadaDeManutencaoController.editarChamadaDeManutencao);

// Rota para excluir uma chamada de manutencao
router.delete('/chamadaDeManutencao/:id_manutencao', chamadaDeManutencaoController.deletarChamadaDeManutencao);

module.exports = router;
