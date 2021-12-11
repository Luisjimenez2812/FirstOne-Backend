var mongoose = require('mongoose');

var esquema = mongoose.Schema({
    estado: String,
    fecha: String,
    total: String,
    cliente: mongoose.SchemaTypes.Mixed,
    productos: mongoose.SchemaTypes.Mixed,
});

module.exports = mongoose.model('ordenesdisponibles', esquema);