// Routes/chamadaDeManutencaoRoutes.js
const express = require('express');
const router = express.Router();
const chamadaDeManutencaoController = require('../controllers/chamadaDeManutencaoController');

// Rota para listar todas as chamadas de manutenção
router.get('/chamadaDeManutencao', chamadaDeManutencaoController.listarChamadaDeManutencao);

// Rota para criar uma nova chamada de manutenção
router.post('/chamadaDeManutencao', chamadaDeManutencaoController.criarChamadaDeManutencao);

// Rota para editar uma chamada de manutenção existente
router.put('/chamadaDeManutencao/:id_manutencao', chamadaDeManutencaoController.editarChamadaDeManutencao);

// Rota para excluir uma chamada de manutenção
router.delete('/chamadaDeManutencao/:id_manutencao', chamadaDeManutencaoController.deletarChamadaDeManutencao);

module.exports = router;
