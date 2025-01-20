const express = require('express');
const router = express.Router();
const equipamentoController = require('../controllers/equipamentoController'); // Certifique-se de que o caminho está correto

// Rota para listar todos os equipamentos
router.get('', equipamentoController.listarEquipamentos);

// Rota para criar um novo equipamento
router.post('/criarequipamentos', equipamentoController.criarEquipamento);

// Rota para editar um equipamento
router.put('/editarequipamentos/:id_equipamento', equipamentoController.editarEquipamento);

// Rota para deletar um equipamento
router.delete('/deletarequipamentos/:id_equipamento', equipamentoController.deletarEquipamento);

module.exports = router;
