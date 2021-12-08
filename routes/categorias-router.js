var express = require('express');
var router = express.Router();
var categoria = require('../models/categoria');
var mongoose = require('mongoose');


//Obtener solo una categoria
router.get("/:idCategoria", function(req, res){
	categoria.find(
        { _id: req.params.idCategoria},{}
    )
    .then((result) => {
        res.send(result[0]);res.end();
    })
    .catch((error) => {
        res.send(error);res.end();
    });
});

//Obtener todas las categorias
router.get("/", function(req, res){
	categoria.find({},{})
    .then((result) => {
        res.send(result);res.end();
    })
    .catch((error) => {
        res.send(error);res.end();
    });
});

//Obtener todas las empresas de solo una categoria
router.get("/:idCategoria/empresas", function(req, res){
	categoria.find(
        { _id: req.params.idCategoria},{
            empresas: true
        }
    )
    .then((result) => {
        res.send(result);res.end();
    })
    .catch((error) => {
        res.send(error);res.end();
    });
});

//Obtener una sola las empresas
router.get("/:idCategoria/empresas/:idEmpresa", function(req, res){
	categoria.find(
        {
            _id: req.params.idCategoria,
            "empresas._id": mongoose.Types.ObjectId(req.params.idEmpresa)
        },{
            "empresas.$": true
        }
    )
    .then((result) => {
        res.send(result[0].empresas[0]);res.end();
    })
    .catch((error) => {
        res.send(error);res.end();
    });
});

//Guardar una nueva categoria
router.post("/", function(req, res){
	let datos =  new categoria(
        {
            "nombre": req.body.nombre,
            "icono": req.body.icono,
            "empresas": []
        }
    );
    datos.save()
    .then((result) => {
        res.send(result);res.end();
    })
    .catch((error) => {
        res.send(error);res.end();
    });
});

//Guardar una empresa en una categoria
router.post('/:idCategoria/empresas', function(req, res){
	categoria.update(
        {
            _id : req.params.idCategoria,
        },{
            $push: {                
                empresas: {
                    _id: mongoose.Types.ObjectId(),
                    nombre: req.body.nombre,
                    descripcion: req.body.descripcion,
                    correo: req.body.correo,
                    telefono: req.body.telefono,
                    imagen: req.body.imagen,
                    baner: req.body.baner,
                    contrasena: req.body.contrasena,
                    calificacion: req.body.calificacion,
                    productos: []
                }
            }
        })
    .then((result) => {
        res.send(result);res.end();
    })
    .catch((error) => {
        res.send(error);res.end();
    });
});

//Guardar un producto en una empresa en una categoria
router.post('/:idCategoria/empresas/:idEmpresa/productos', function(req, res){
	categoria.update(
        {
            _id : mongoose.Types.ObjectId(req.params.idCategoria),
            "empresas._id" : mongoose.Types.ObjectId(req.params.idEmpresa)
        },{
            $push: {                
                "empresas.$.productos": {
                    _id: mongoose.Types.ObjectId(),
                    nombre: req.body.nombre,
                    descripcion: req.body.descripcion,
                    precio: req.body.precio,
                    imagen: req.body.imagen,
                    cantidad: req.body.cantidad
                }
            }
        })
    .then((result) => {
        res.send(result);res.end();
    })
    .catch((error) => {
        res.send(error);res.end();
    });
});


module.exports = router;