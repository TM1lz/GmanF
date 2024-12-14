// Routes/equipesDeManutencaoRoutes.js
const express = require('express');
const router = express.Router();
const equipesDeManutencaoController = require('../controllers/equipesDeManutencaoController.js');

// Rota para listar todos as Equipes De Manutenção
router.get('/equipesDeManutencao', equipesDeManutencaoController.listarEquipesDeManutencao);

// Rota para criar uma nova Equipes De Manutenção
router.post('/equipesDeManutencao', equipesDeManutencaoController.criarEquipesDeManutencao);

// Rota para editar Equipes De Manutenção existente
router.put('/equipesDeManutencao/:id_equipesDeManutencao', equipesDeManutencaoController.editarEquipesDeManutencao);

// Rota para excluir  Equipes De Manutenção
router.delete('/equipesDeManutencao/:id_equipesDeManutencao', equipesDeManutencaoController.deletarEquipesDeManutencao);

module.exports = router;
