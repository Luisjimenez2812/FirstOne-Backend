var mongoose = require('mongoose');

var esquema = mongoose.Schema({
    productos: mongoose.SchemaTypes.Mixed
});

module.exports = mongoose.model('ordenesPendientes', esquema);