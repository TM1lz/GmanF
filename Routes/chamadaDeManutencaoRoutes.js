// routes/chamadaDeManutencaoRoutes.js
const express = require('express');
const router = express.Router();
const chamadaDeManutencaoController = require('../controllers/chamadaDeManutencaoController');

// Rota para listar todas as chamadas de manutenção
router.get('/listarChamadas/:id_cliente', chamadaDeManutencaoController.listarChamadaDeManutencao);
router.get('/listarChamadas', chamadaDeManutencaoController.listarChamadaDeManutencao);
 // Listar todas as chamadas de manutenção

// Rota para criar uma nova chamada de manutenção
router.post('/criarChamada', chamadaDeManutencaoController.criarChamadaDeManutencao); // Criar uma nova chamada de manutenção

// Rota para editar uma chamada de manutenção existente
router.put('/editarChamada/:id_manutencao', chamadaDeManutencaoController.editarChamadaDeManutencao); // Editar uma chamada de manutenção existente

// Rota para excluir uma chamada de manutenção
router.delete('/deletarChamada/:id_manutencao', chamadaDeManutencaoController.deletarChamadaDeManutencao); // Excluir uma chamada de manutenção

module.exports = router;
