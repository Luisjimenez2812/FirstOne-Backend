var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var fileupload = require('express-fileupload');

var database = require('./modules/db')
var clientesRouter = require('./routes/clientes-router');
var motoristasRouter = require('./routes/motoristas-router');
var categoriasRouter = require('./routes/categorias-router');
var ordenesDisponiblesRouter = require('./routes/ordenes-disponibles-router');
var administradorRouter = require('./routes/administrador-router');

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(fileupload({useTempFiles : true,tempFileDir : '/tmp/'}))


app.use('/clientes', clientesRouter);
app.use('/motoristas', motoristasRouter);
app.use('/categorias', categoriasRouter);
app.use('/ordenes-disponibles', ordenesDisponiblesRouter);
app.use('/administradors', administradorRouter);

app.get('/', function(req, res){
    res.send("Se ha recibido una petición.")
});

app.listen(app.get('port'), function(){
    console.log(`El servidor se ha levantado en el puerto ${app.get('port')}`);
});