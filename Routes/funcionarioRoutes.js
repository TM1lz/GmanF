// routes/funcionarioRoutes.js
const express = require('express');
const router = express.Router();
const funcionarioController = require('../controllers/funcionarioController.js');

// Rota para listar todos os funcionarios
router.get('/funcionarios', funcionarioController.listarFuncionarios);

// Rota para criar um novo funcionario
router.post('/funcionarios', funcionarioController.criarFuncionario);

// Rota para editar um funcionario existente
router.put('/funcionarios/:id_funcionario', funcionarioController.editarFuncionario);

// Rota para excluir um funcionario
router.delete('/funcionarios/:id_funcionario', funcionarioController.deletarFuncionario);

module.exports = router;
