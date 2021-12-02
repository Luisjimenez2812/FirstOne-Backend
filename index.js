var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var database = require('./modules/db')
var usuariosRouter = require('./routes/usuarios-router');
var carritoRouter = require('./routes/carrito-router');
var categoriasRouter = require('./routes/categorias-router');
var empresasRouter = require('./routes/empresas-router');
var ordenesPendientesRouter = require('./routes/ordenes-pendientes-router');
var productosRouter = require('./routes/productos-router');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/usuarios', usuariosRouter);
app.use('/carrito', carritoRouter);
app.use('/categorias', categoriasRouter);
app.use('/empresas', empresasRouter);
app.use('/ordenesPendientes', ordenesPendientesRouter);
app.use('/productos', productosRouter);

app.get('/', function(req, res){
    res.send("Se ha recibido una petición.")
});

app.listen(8888, function(){
    console.log("El servidor se ha levantado.");
});