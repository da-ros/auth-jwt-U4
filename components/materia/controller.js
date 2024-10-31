const Materia = require('./model');

async function insertarMateria(req, res) {
    const materia = new Materia(req.body);
    await materia.save();
    res.json(materia);
}

async function modificarMateria(req, res) {
    const materia = await Materia.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(materia);
}

async function eliminarMateria(req, res) {
    await Materia.findByIdAndDelete(req.params.id);
    res.json({ message: 'Materia eliminada' });
}

async function obtenerMaterias(req, res) {
    const materias = await Materia.find();
    res.json(materias);
}

module.exports = { insertarMateria, modificarMateria, eliminarMateria, obtenerMaterias };