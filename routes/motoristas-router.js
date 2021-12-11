var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var motorista = require('../models/motorista');

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
                            "_id": mongoose.Types.ObjectId(req.body.idCliente),
                            "nombres": req.body.nombres,
                            "apellidos": req.body.apellidos,
                            "telefono": req.body.telefono,
                            "direccionEntrega": {
                                "_id": mongoose.Types.ObjectId(req.body.idDireccion),
                                "direccion": req.body.direccion,
                                "referencia": req.body.referencia,
                                "longitud": req.body.longitud,
                                "latitud": req.body.latitud
                            }
                        },
                        "productos": req.body.productos
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

module.exports = router;