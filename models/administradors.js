var mongoose = require('mongoose');

var esquema = mongoose.Schema({
    usuario: String,
    contrasena: String
});

module.exports = mongoose.model('administradors', esquema);