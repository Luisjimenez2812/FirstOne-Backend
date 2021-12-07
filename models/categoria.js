var mongoose = require('mongoose');

var esquema = mongoose.Schema({
    nombre: String,
    icono: String,
    empresas: mongoose.SchemaTypes.Mixed
});

module.exports = mongoose.model('categoria', esquema);