var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var motorista = require('../models/motorista');
var cliente = require('../models/cliente');

//Obtener solo un motorista
router.get("/:idMotorista", function(req, res){
	motorista.find(
        { _id: req.params.idMotorista},
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

//Obtener todos los motoristas
router.get("/", function(req, res){
	motorista.find({},{contrasena:false})
    .then((result) => {
        res.send(result);res.end();
    })
    .catch((error) => {
        res.send(error);res.end();
    });
});

//iniciar sesión motorista
router.post("/", function(req, res){
    motorista.find(
        {
            correo: req.body.correo,
            contrasena: req.body.password
        },{}
    )
    .then((result) => {res.send(result[0]);res.end();})
    .catch((error) => {res.send(error);res.end();});
});

//registro motorista
router.post("/registrarse", function(req, res){
	let datos =  new motorista(
        {
            "nombres": req.body.nombres,
            "apellidos": req.body.apellidos,
            "usuario": req.body.usuario,
            "genero": req.body.genero,
            "correo": req.body.correo,
            "telefono": req.body.telefono,
            "imagen": 'https://res.cloudinary.com/dekixopkw/image/upload/v1639033655/FirstOne/Clientes/yu6fnfkvgu6hhd9fmwii.png',
            "fechaNacimiento": req.body.fechaNacimiento,
            "contrasena": req.body.password,
            "aprobado": 0,
            "historialEntregas": [],
            "ordenesTomadas": []
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
router.put("/:idMotorista/actualizar-contrasena", (req, res) => {
	motorista
		.updateOne(
			{_id: req.params.idMotorista},
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
router.put("/:idMotorista/actualizar-datos", (req, res) => {
	motorista
		.updateOne(
			{_id: req.params.idMotorista},
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
router.put("/:idMotorista/actualizar-imagen", (req, res) => {
	motorista
		.updateOne(
			{_id: req.params.idMotorista},
			{
				$set: {
                    imagen: req.body.imagen
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

//Obtener el historial de entregas
router.get("/:idMotorista/historial-entregas", function(req, res){
	motorista.find(
        {
            _id : req.params.idMotorista,
        },{
            historialEntregas: true
        })
    .then((result) => {
        res.send(result[0].historialEntregas);res.end();
    })
    .catch((error) => {
        res.send(error);res.end();
    });
});

//Obtener las ordenes tomadas
router.get("/:idMotorista/ordenes-tomadas", function(req, res){
	motorista.find(
        {
            _id : req.params.idMotorista,
        },{
            ordenesTomadas: true
        })
    .then((result) => {
        res.send(result[0].ordenesTomadas);res.end();
    })
    .catch((error) => {
        res.send(error);res.end();
    });
});

//Guardar orden a un motorista
router.post("/:idMotorista/ordenes-tomadas", function(req, res){
	motorista
		.updateOne(
			{_id: req.params.idMotorista},
			{
				$push: {
                    ordenesTomadas: {
                        "_id" : mongoose.Types.ObjectId(req.body._id),
                        "estado": req.body.estado,
                        "fecha": req.body.fecha,
                        "cliente": {
                            "_id": mongoose.Types.ObjectId(req.body.cliente._id),
                            "nombres": req.body.cliente.nombres,
                            "apellidos": req.body.cliente.apellidos,
                            "telefono": req.body.cliente.telefono,
                            "direccionEntrega": {}
                        },
                        "productos": req.body.productos,
                        "total": req.body.total,
                    }
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

//Actualizar estado orden
router.put("/ordenes-tomadas/:idOrden/cambiar-estado", (req, res) => {
	motorista
		.updateOne(
			{
                _id: mongoose.Types.ObjectId(req.body.idMotorista),
                "ordenesTomadas._id" : mongoose.Types.ObjectId(req.params.idOrden)
            },
			{
				$set: {
                    "ordenesTomadas.$.estado": req.body.estado
				},
			}
		)
		.then((result1) => {
            cliente
                .updateOne(
                    {
                        _id: mongoose.Types.ObjectId(req.body.idCliente),
                        "ordenesPendientesEntrega._id" : mongoose.Types.ObjectId(req.params.idOrden)
                    },{
                        $set: {
                            "ordenesPendientesEntrega.$.estado": req.body.estado
                        },
                    }
                )
                .then((result2) => {
                    res.send({result1: result1, result2: result2});res.end();
                })
                .catch((error) => {
                    res.send(error);res.end();
                });
            
        })
        .catch((error) => {
            res.send(error);res.end();
        });
});

//Guardar orden al historial de un motorista y de un cliente
router.post("/:idMotorista/historial-entregas", function(req, res){
    let d = "destino";
	motorista
		.updateOne(
			{
                _id: req.params.idMotorista,
                "ordenesTomadas.estado": d
            },{
				$push: {
                    historialEntregas: {
                        "_id" : mongoose.Types.ObjectId(req.body.idOrden),
                        "fecha": req.body.fecha,
                        "estado": "entregado",
                        "cliente": {
                            "_id": mongoose.Types.ObjectId(req.body.cliente._id),
                            "nombres": req.body.cliente.nombres,
                            "apellidos": req.body.cliente.apellidos,
                            "telefono": req.body.cliente.telefono,
                            "direccionEntrega": {}
                        },
                        "productos": req.body.productos,
                        "total": req.body.total,
                    }
				},
			}
		)
		.then((result1) => {
            cliente
                .updateOne(
                    {
                        _id: req.body.cliente._id,
                        "ordenesPendientesEntrega.estado": d
                    },{
                        $push: {
                            historialOrdenes: {
                                "_id" : mongoose.Types.ObjectId(req.body.idOrden),
                                "fecha": req.body.fecha,
                                "estado": "entregado",
                                "productos": req.body.productos,
                                "total": req.body.total,
                            }
                        },
                    }
                )
                .then((result2) => {
                    res.send({result1: result1, result2: result2});res.end();
                })
                .catch((error) => {
                    res.send(error);res.end();
                });
        })
        .catch((error) => {
            res.send(error);res.end();
        });
});

//aprobar motorista
router.put("/:idMotorista/aprobar", (req, res) => {
	motorista
		.updateOne(
			{_id: req.params.idMotorista},
			{
				$set: {
					aprobado: 1,
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