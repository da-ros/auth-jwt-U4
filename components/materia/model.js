const mongoose = require('mongoose');

const MateriaSchema = new mongoose.Schema({
    codigo: String,
    nombre: String
});

module.exports = mongoose.model('Materia', MateriaSchema);