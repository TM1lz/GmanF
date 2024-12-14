// routes/clienteRoutes.js
const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// Rota para listar todos os clientes
router.get('/clientes', clienteController.listarClientes);

// Rota para criar um novo cliente
router.post('/clientes', clienteController.criarCliente);

// Rota para editar um cliente existente
router.put('/clientes/:id_cliente', clienteController.editarCliente);

// Rota para excluir um cliente
router.delete('/clientes/:id_cliente', clienteController.deletarCliente);

module.exports = router;
