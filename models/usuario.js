var mongoose = require('mongoose');

var esquema = mongoose.Schema({
    nombres: String,
    apellidos: String,
    fechaNacimiento: mongoose.SchemaTypes.Mixed,
    genero: String,
    pais: String,
    email: String,
    contrasena: String,
    direccionesEntrega: mongoose.SchemaTypes.Array,
    tarjetas: mongoose.SchemaTypes.Array
});

module.exports = mongoose.model('usuarios', esquema);