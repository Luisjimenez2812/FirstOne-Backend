var express = require('express');
var router = express.Router();
var cliente = require('../models/cliente');
var mongoose = require('mongoose');

var cloudinary = require('cloudinary').v2;

//Obtener solo un cliente
router.get("/:idCliente", function(req, res){
	cliente.find(
        { _id: req.params.idCliente},
        {
            nombres: true,
            apellidos: true,
            usuario: true,
            genero: true,
            correo: true,
            telefono: true,
            imagen: true,
            fechaNacimiento: true,
            contrasena: true
        }
    )
    .then((result) => {
        res.send(result[0]);res.end();
    })
    .catch((error) => {
        res.send(error);res.end();
    });
});

//Obtener todos los clientes
router.get("/", function(req, res){
	cliente.find({},{})
    .then((result) => {
        res.send(result);res.end();
    })
    .catch((error) => {
        res.send(error);res.end();
    });
});

//Obtener el historial de ordenes recibidas
router.get("/:idCliente/historial-ordenes/", function(req, res){
	cliente.find(
        {
            _id : req.params.idCliente,
        },{
            historialOrdenes: true
        })
    .then((result) => {
        res.send(result[0]);res.end();
    })
    .catch((error) => {
        res.send(error);res.end();
    });
});

//Obtener las ordenes pendientes de entrega
router.get("/:idCliente/ordenes-pendientes/", function(req, res){
	cliente.find(
        {
            _id : req.params.idCliente,
        },{
            ordenesPendientesEntrega: true
        })
    .then((result) => {
        res.send(result[0]);res.end();
    })
    .catch((error) => {
        res.send(error);res.end();
    });
});

//Obtener las empresas favoritas
router.get("/:idCliente/empresas-favoritas/", function(req, res){
	cliente.find(
        {
            _id : req.params.idCliente,
        },{
            empresasFavoritas: true
        })
    .then((result) => {
        res.send(result[0]);res.end();
    })
    .catch((error) => {
        res.send(error);res.end();
    });
});

//Obtener las empresas favoritas
router.get("/:idCliente/direccion-entrega/", function(req, res){
	cliente.find(
        {
            _id : req.params.idCliente,
        },{
            direccionesEntrega: true
        })
    .then((result) => {
        res.send(result[0]);res.end();
    })
    .catch((error) => {
        res.send(error);res.end();
    });
});

//Guardar en el historial de ordenes recibidas
router.post("/:idCliente/historial-ordenes/", function(req, res){
	cliente.update(
        {
            _id : req.params.idCliente,
        },{
            
            $push: {
                historialOrdenes: {
                    _id: mongoose.Types.ObjectId(),
                    "estado": req.body.estado,
                    "fecha": req.body.fecha,
                    "productos": req.body.productos
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

//Guardar en las ordenes pendientes de entrega
router.post("/:idCliente/ordenes-pendientes/", function(req, res){
	cliente.update(
        {
            _id : req.params.idCliente,
        },{
            $push: {                
                ordenesPendientesEntrega: {
                    _id: mongoose.Types.ObjectId(),
                    "estado": req.body.estado,
                    "fecha": req.body.fecha,
                    "productos": req.body.productos
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

//Guardar en empresas favoritas
router.post('/:idCliente/empresas-favoritas/', function(req, res){
	cliente.update(
        {
            _id : req.params.idCliente,
        },{
            $push: {                
                empresasFavoritas: {
                    _id: mongoose.Types.ObjectId(),
                    nombre: req.body.nombre,
                    descripcion: req.body.descripcion,
                    imagen: req.body.imagen
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

//iniciar sesión cliente
router.post("/", function(req, res){
	cliente.find(
        {
            correo: req.body.correo,
            contrasena: req.body.contrasena
        },{}
    )
    .then((result) => {
        res.send(result[0]);res.end();
    })
    .catch((error) => {
        res.send(error);res.end();
    });
});

//registro cliente
router.post("/registrarse", function(req, res){
	let datos =  new cliente(
        {
            "nombres": req.body.nombres,
            "apellidos": req.body.apellidos,
            "usuario": req.body.usuario,
            "genero": req.body.genero,
            "correo": req.body.correo,
            "telefono": req.body.telefono,
            "imagen": req.body.imagen,
            "fechaNacimiento": req.body.fechaNacimiento,
            "contrasena": req.body.contrasena,
            "historialOrdenes": [],
            "ordenesPendientesEntrega": [],
            "empresasFavoritas": [],
            "direccionesEntrega": []
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

//Actualizar contraseña
router.put("/:idCliente/actualizar-contrasena", (req, res) => {
	cliente
		.updateOne(
			{_id: req.params.idCliente},
			{
				$set: {
					contrasena: req.body.contrasena,
				},
			}
		)
		.then((result) => {
            res.send(result);res.end();
        })
        .catch((error) => {
            res.send(error);res.end();
        });
});

//Actualizar datos
router.put("/:idCliente/actualizar-datos", (req, res) => {
	cliente
		.updateOne(
			{_id: req.params.idCliente},
			{
				$set: {
                    nombres: req.body.nombres,
                    apellidos: req.body.apellidos,
                    usuario: req.body.usuario,
                    genero: req.body.genero,
                    correo: req.body.correo,
                    telefono: req.body.telefono,
                    fechaNacimiento: req.body.fechaNacimiento
				},
			}
		)
		.then((result) => {
            res.send(result);res.end();
        })
        .catch((error) => {
            res.send(error);res.end();
        });
});

//Actualizar imagen
router.put("/:idCliente/actualizar-imagen", (req, res) => {
    let direccionImagen;
    console.log("hola");
    // File upload
    cloudinary.uploader.upload(req.body.file, { folder: 'FirstOne/Clientes' }, function (err, image) {
        console.log();
        console.log("** File Upload");
        if (err) { console.warn(err); }
        console.log("* public_id for the uploaded image is generated by Cloudinary's service.");
        console.log("* " + image.public_id);
        console.log("* " + image.url);
        direccionImagen = image.url;
    });
    console.log(direccionImagen);
    cliente
		.updateOne(
			{_id: mongoose.Types.ObjectId(req.params.idCliente)},
			{
				$set: {
                    imagen: direccionImagen
				},
			}
		)
		.then((result) => {
            res.send(result);res.end();
        })
        .catch((error) => {
            res.send(error);res.end();
        });
});

module.exports = router;