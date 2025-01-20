const express = require('express');
const router = express.Router();
const equipesDeManutencaoController = require('../controllers/equipesDeManutencaoController'); // Importando o controlador de equipes de manutenção

// Rota para listar todas as equipes de manutenção
router.get('', equipesDeManutencaoController.listarEquipesDeManutencao);

// Rota para criar uma nova equipe de manutenção
router.post('/criarEquipesDeManutencao', equipesDeManutencaoController.criarEquipesDeManutencao);

// Rota para editar uma equipe de manutenção existente
router.put('/editarEquipesDeManutencao/:id_equipesDeManutencao', equipesDeManutencaoController.editarEquipesDeManutencao);

// Rota para excluir uma equipe de manutenção
router.delete('/deletarEquipesDeManutencao/:id_equipesDeManutencao', equipesDeManutencaoController.deletarEquipesDeManutencao);

module.exports = router;
