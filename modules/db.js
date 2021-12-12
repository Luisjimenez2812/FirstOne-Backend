var mongoose = require('mongoose');

const usuario = 'lromeroj';
const contrasena = 'Lerj.2812';
const bd = 'firstone';

const MONGODB_URI = `mongodb+srv://${usuario}:${contrasena}@cluster0.ewltm.mongodb.net/${bd}?retryWrites=true&w=majority`


class Database{
    constructor(){
        this.conectar();
    }
    
    conectar(){
        mongoose.connect(MONGODB_URI)
        .then(res=>console.log('Conexión a mongodb exitosa'))
        .catch(err=>console.error(err));
    }
}

module.exports = new Database();