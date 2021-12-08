var express = require('express');
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
	motorista.find({},{})
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
            "imagen": req.body.imagen,
            "fechaNacimiento": req.body.fechaNacimiento,
            "contrasena": req.body.contrasena,
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

module.exports = router;