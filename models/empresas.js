var mongoose = require('mongoose');

var esquema = mongoose.Schema({
    productos: mongoose.SchemaTypes.Mixed,
    nombre: String,
    categoria: String,
    calificacion: Number
});

module.exports = mongoose.model('empresas', esquema);