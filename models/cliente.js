var mongoose = require('mongoose');

var esquema = mongoose.Schema({
    "nombres": String,
    "apellidos": String,
    "usuario": String,
    "genero": String,
    "correo": String,
    "telefono": String,
    "imagen": String,
    "fechaNacimiento": mongoose.SchemaTypes.Mixed,
    "contrasena": String,
    "historialOrdenes": mongoose.SchemaTypes.Mixed,
    "ordenesPendientesEntrega": mongoose.SchemaTypes.Mixed,
    "empresasFavoritas": mongoose.SchemaTypes.Mixed,
    "direccionesEntrega": mongoose.SchemaTypes.Mixed
});

module.exports = mongoose.model('clientes', esquema);