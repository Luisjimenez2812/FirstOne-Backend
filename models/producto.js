var mongoose = require('mongoose');

var esquema = mongoose.Schema({
    nombre: String,
    descripcion: String,
    precio: Number,
    img: String,
    categoria: String
});

module.exports = mongoose.model('productos', esquema);