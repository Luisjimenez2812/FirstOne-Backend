var mongoose = require('mongoose');

const db = 'firstone';
const port = '27017';
const host = 'localhost';

class Database{
    constructor(){
        this.conectar();
    }
    
    conectar(){
        mongoose.connect(`mongodb://${host}:${port}/${db}`)
        .then(res=>console.log('Conexión a mongodb exitosa'))
        .catch(err=>console.error(err));
    }
}

module.exports = new Database();