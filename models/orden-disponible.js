var mongoose = require('mongoose');

var esquema = mongoose.Schema({
    estado: String,
    cliente: mongoose.SchemaTypes.Mixed,
    productos: mongoose.SchemaTypes.Mixed,
    fecha: mongoose.SchemaTypes.Mixed
});

module.exports = mongoose.model('ordenesPendientes', esquema);