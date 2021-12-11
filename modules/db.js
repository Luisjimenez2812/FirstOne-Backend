var mongoose = require('mongoose');

const db = 'firstone';
const port = '27017';
const host = 'localhost';

const MONGODB_URI = `mongodb+srv://lromeroj:Lerj.2812@cluster0.ewltm.mongodb.net/firstone?retryWrites=true&w=majority`


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