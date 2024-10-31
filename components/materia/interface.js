const express = require('express');
const { authenticateToken, authorizeRoles } = require('../usuario/interface');
const { insertarMateria, modificarMateria, eliminarMateria, obtenerMaterias } = require('./controller');

const routes = express.Router();

routes.post('/', authenticateToken, authorizeRoles(['admin']), insertarMateria);
routes.put('/:id', authenticateToken, authorizeRoles(['admin']), modificarMateria);
routes.delete('/:id', authenticateToken, authorizeRoles(['admin']), eliminarMateria);
routes.get('/', authenticateToken, authorizeRoles(['admin', 'usuario']), obtenerMaterias);

module.exports = { routes };