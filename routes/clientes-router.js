var express = require('express');
var router = express.Router();
var cliente = require('../models/cliente');
var ordenDisponible = require('../models/orden-disponible');
var mongoose = require('mongoose');

var cloudinary = require('cloudinary').v2;
CLOUDINARY_URL='cloudinary://883524283929815:Ni1R0wA8HkeW_H6lUjEWG8Vsjig@dekixopkw'
cloudinary.config({ 
    cloud_name: 'dekixopkw', 
    api_key: '883524283929815', 
    api_secret: 'Ni1R0wA8HkeW_H6lUjEWG8Vsjig',
    secure: true
  });
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
            fechaNacimiento: true
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

//Borrar las empresas favoritas
router.delete("/:idCliente/empresas-favoritas/", function(req, res){
	cliente.deleteOne(
        {
            _id : req.params.idCliente,
            "empresasFavoritas._id" : mongoose.Types.ObjectId(req.body._id)
        },{
            "empresasFavoritas.$._id":true
        })
    .then((result) => {
        res.send(result[0]);res.end();
    })
    .catch((error) => {
        res.send(error);res.end();
    });
});

//Obtener la direccion de entrega
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

/*//Guardar en las ordenes pendientes de entrega
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
});*/

//Guardar en empresas favoritas
router.post('/:idCliente/empresas-favoritas/', function(req, res){
	cliente.update(
        {
            _id : req.params.idCliente,
        },{
            $push: {                
                empresasFavoritas: {
                    _id: mongoose.Types.ObjectId(req.body._id),
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

//iniciar sesi??n cliente
router.post("/", function(req, res){
	cliente.find(
        {
            correo: req.body.correo,
            contrasena: req.body.password
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
            "contrasena": req.body.password,
            "telefono": req.body.telefono,
            "imagen": 'https://res.cloudinary.com/dekixopkw/image/upload/v1639033655/FirstOne/Clientes/yu6fnfkvgu6hhd9fmwii.png',
            "fechaNacimiento": req.body.fechaNacimiento,
            "historialOrdenes": [],
            "ordenesPendientesEntrega": [],
            "empresasFavoritas": [],
            "direccionesEntrega": [],
            "tarjeta": {}
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

//Actualizar contrase??a
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
    cloudinary.uploader.upload(req.files.imagen.tempFilePath, { folder: 'FirstOne/Clientes' }, function (err, image) {
        if (err) { console.warn(err); }
        cliente.updateOne(
			{_id: mongoose.Types.ObjectId(req.params.idCliente)},
			{
				$set: {
                    imagen: image.url
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
});

//Actualizar direccion
router.put("/:idCliente/direccion-entrega", (req, res) => {
	cliente
		.updateOne(
			{_id: req.params.idCliente},
			{
				$set:{
                    direccionesEntrega:{
                        direccion: req.body.direccion,
                        referencia: req.body.referencia,
                        longitud: req.body.longitud,
                        latitud: req.body.latitud
                    }
                }
			}
		)
		.then((result) => {
            res.send(result);res.end();
        })
        .catch((error) => {
            res.send(error);res.end();
        });
});

//Guardar orden nueva en la colecci??n ordenes disponibles
router.post("/confirmar-compra", function(req, res){
    var idOrden = mongoose.Types.ObjectId();
	let datosOrdenesDisponibles =  new ordenDisponible(
        {
            "_id": idOrden,
            "estado": "disponible",
            "fecha": req.body.fecha,
            "total": req.body.total,
            "cliente": {
                "_id": mongoose.Types.ObjectId(req.body.idCliente),
                "nombres": req.body.nombres,
                "apellidos": req.body.apellidos,
                "telefono": req.body.telefono,
                "direccionEntrega": {
                    "direccion": req.body.direccion,
                    "referencia": req.body.referencia,
                    "longitud": req.body.longitud,
                    "latitud": req.body.latitud
                }
            },
            "productos": req.body.productos
        }
    );
    datosOrdenesDisponibles.save()
    .then((result) => {
        cliente.updateOne(
            {
                _id : mongoose.Types.ObjectId(req.body.idCliente),
            },{
                $push: {                
                    ordenesPendientesEntrega: {
                        _id: idOrden,
                        estado: "Pendiente",
                        fecha: req.body.fecha,
                        total: req.body.total,
                        productos: req.body.productos
                    }
                }
            })
        .then((result2) => {
            res.send({ordenDisponible: result, ordenPendiente: result2});res.end();
        })
        .catch((error) => {
            res.send(error);res.end();
        });
    })
    .catch((error) => {
        res.send(error);res.end();
    });
});

/*"metodoPago": req.body.metodoPago,
"nombreTitular": req.body.nombreTitular,
"numeroTarjeta": req.body.numeroTarjeta,
"vencimiento": req.body.vencimiento,
"cvv": req.body.cvv,
"longitud": req.body.longitud,
"latitud": req.body.latitud,
"direccion": req.body.direccion,
"referencia": req.body.referencia,
"total": req.body.total,*/

module.exports = router;
