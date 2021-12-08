var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var database = require('./modules/db')
var clientesRouter = require('./routes/clientes-router');
var motoristasRouter = require('./routes/motoristas-router');
var categoriasRouter = require('./routes/categorias-router');
var ordenesDisponiblesRouter = require('./routes/ordenes-disponibles-router');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/clientes', clientesRouter);
app.use('/motoristas', motoristasRouter);
app.use('/categorias', categoriasRouter);
app.use('/ordenes-disponibles', ordenesDisponiblesRouter);

app.get('/', function(req, res){
    res.send("Se ha recibido una petición.")
});

app.listen(8880, function(){
    console.log("El servidor se ha levantado.");
});