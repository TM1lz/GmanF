// routes/funcionarioRoutes.js
const express = require('express');
const router = express.Router();
const funcionarioController = require('../controllers/funcionarioController.js');

// Rota para listar todos os funcionarios
router.get('/listarfuncionarios', funcionarioController.listarFuncionarios);
router.get('/listarfuncionarios/:id_funcionario', funcionarioController.listarFuncionarios);

// Rota para criar um novo funcionario
router.post('/criarfuncionarios', funcionarioController.criarFuncionario);

// Rota para editar um funcionario existente
router.put('/editarfuncionarios/:id_funcionario', funcionarioController.editarFuncionario);

// Rota para excluir um funcionario
router.delete('/deletarfuncionarios/:id_funcionario', funcionarioController.deletarFuncionario);

module.exports = router;
