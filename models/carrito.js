var mongoose = require('mongoose');

var esquema = mongoose.Schema({
    productos: mongoose.SchemaTypes.Mixed,
    total: Number
});

module.exports = mongoose.model('carrito', esquema);