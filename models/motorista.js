var mongoose = require('mongoose');

var esquema = mongoose.Schema({
    "nombres": String,
    "apellidos": String,
    "usuario": String,
    "genero": String,
    "correo": String,
    "telefono": String,
    "imagen": String,
    "fechaNacimiento": String,
    "contrasena": String,
    "historialEntregas": mongoose.SchemaTypes.Mixed,
    "ordenesTomadas": mongoose.SchemaTypes.Mixed
});

module.exports = mongoose.model('motoristas', esquema);