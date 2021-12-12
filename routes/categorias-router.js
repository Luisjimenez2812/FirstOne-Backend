var express = require('express');
var router = express.Router();
var categoria = require('../models/categoria');
var mongoose = require('mongoose');
var cloudinary = require('cloudinary').v2;
CLOUDINARY_URL='cloudinary://883524283929815:Ni1R0wA8HkeW_H6lUjEWG8Vsjig@dekixopkw'
cloudinary.config({ 
    cloud_name: 'dekixopkw', 
    api_key: '883524283929815', 
    api_secret: 'Ni1R0wA8HkeW_H6lUjEWG8Vsjig',
    secure: true
});

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
router.post('/:idCategoria/empresas', async function(req, res){
    let imagen1 = await cloudinary.uploader.upload(req.files.imagen1.tempFilePath, { folder: 'FirstOne/categorias/empresas' }, function (err, image) {
        if (err) { console.warn(err); }
        console.log(image.url);
    });
    let imagen2 = await cloudinary.uploader.upload(req.files.imagen2.tempFilePath, { folder: 'FirstOne/categorias/empresas' }, function (err, image) {
        if (err) { console.warn(err); }
        console.log(image.url);
    });
	categoria.updateOne(
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
                    imagen: imagen1.url,
                    baner: imagen2.url,
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

router.put("/:idCategoria/empresas/actualizar-imagen", (req, res) => {
    
});

//Guardar un producto en una empresa en una categoria
router.post('/:idCategoria/empresas/:idEmpresa/productos', async function(req, res){
	let imagenProducto = await cloudinary.uploader.upload(req.files.imagenProducto.tempFilePath, { folder: 'FirstOne/categorias/empresas/productos' }, function (err, image) {
        if (err) { console.warn(err); }
        console.log(image.url);
    });
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
                    imagen: imagenProducto.url,
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

//Guardar un producto en una empresa en una categoria
router.get('/:idCategoria/empresas/:idEmpresa/productos', function(req, res){
	categoria.find(
        {
            _id : mongoose.Types.ObjectId(req.params.idCategoria),
            "empresas._id" : mongoose.Types.ObjectId(req.params.idEmpresa)
        },{         
            "empresas.$":true
        })
    .then((result) => {
        res.send(result[0].empresas[0].productos);res.end();
    })
    .catch((error) => {
        res.send(error);res.end();
    });
});

//EliminarEmpresas
router.delete("/:idCategoria/empresas/:idEmpresa", function(req, res){
	categoria.remove(
        {
            _id : mongoose.Types.ObjectId(req.params.idCategoria),
            "empresas._id" : mongoose.Types.ObjectId(req.params.idEmpresa)
        },{
            "empresas.$._id":true
        })
    .then((result) => {
        res.send(result);res.end();
    })
    .catch((error) => {
        res.send(error);res.end();
    });
});



module.exports = router;