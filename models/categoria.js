var mongoose = require('mongoose');

var esquema = mongoose.Schema({
    empresas: mongoose.SchemaTypes.Mixed,
    nombre: String
});

module.exports = mongoose.model('categoria', esquema);