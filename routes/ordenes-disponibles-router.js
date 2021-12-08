var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var ordenDisponible = require('../models/orden-disponible');

//Obtener todas las ordenes disponible
router.get("/", function(req, res){
	ordenDisponible.find()
    .then((result) => {
        res.send(result);res.end();
    })
    .catch((error) => {
        res.send(error);res.end();
    });
});

//Obtener una sola orden disponible
router.get("/:idOrdenDisponible", function(req, res){
	ordenDisponible.find(
        {_id: req.params.idOrdenDisponible},
        {}
    )
    .then((result) => {
        res.send(result[0]);res.end();
    })
    .catch((error) => {
        res.send(error);res.end();
    });
});

//Registrar una orden disponible
router.post("/registrar", function(req, res){
	let datos =  new ordenDisponible(
        {
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
            "productos": []
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

//Tomar una orden disponible


//Cambiar estado de una orden
router.put("/:idOrdenDisponible/actualizar-estado", (req, res) => {
	ordenDisponible
		.updateOne(
			{_id: req.params.idOrdenDisponible},
			{
				$set: {
					estado: req.body.estado,
				},
			}
		)
		.then((result) => {
            res.send(result[0]);res.end();
        })
        .catch((error) => {
            res.send(error);res.end();
        });
});

module.exports = router;