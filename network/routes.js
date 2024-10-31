const { routes: usuarioRoutes } = require('../components/usuario/interface');
const { routes: materiaRoutes } = require('../components/materia/interface');

const routes = function( server ) {
    server.use('/usuario', usuarioRoutes);
    server.use('/materia', materiaRoutes);
};

module.exports = routes;