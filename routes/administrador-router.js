var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var administrador = require('../models/administradors');

//iniciar sesión motorista
router.post("/", function(req, res){
    administrador.find(
        {
            correo: req.body.correo,
            contrasena: req.body.contrasena
        },{}
    )
    .then((result) => {res.send(result[0]);res.end();})
    .catch((error) => {res.send(error);res.end();});
});

module.exports = router;