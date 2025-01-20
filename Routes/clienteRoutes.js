// routes/clienteRoutes.js
const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// Rota para listar todos os clientes
router.get('', clienteController.listarClientes);
router.get('/listarClientes/:id_cliente', clienteController.listarClientes);
// Rota para criar um novo cliente
router.post('/criarCliente', clienteController.criarCliente);

// Rota para editar um cliente existente
router.put('/editarCliente/:id_cliente', clienteController.editarCliente);

// Rota para excluir um cliente
router.delete('/deletarCliente/:id_cliente', clienteController.deletarCliente);

module.exports = router;
