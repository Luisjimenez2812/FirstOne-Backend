db.clientes.insertMany([
    {
        "nombres": "Luis Eduardo",
        "apellidos": "Romero Jimenez",
        "usuario": "lromero",
        "genero": "Masculino",
        "correo": "lromeroj@gmail.com",
        "telefono": "+504 3247-2880",
        "imagen": "images/luis-perfil.jpg",
        "fechaNacimiento": {
            "dia": "28",
            "mes": "12",
            "anio": "1998"
        },
        "contrasena": "lromero",
        "historialOrdenes": [
            {
                "_id": "", 
                "estado": "entregada",
                "fecha": "12/12/2020",
                "productos": [
                    {
                        "nombre": "Mouse Gaming Logitech",
                        "descripcion": "Mouse inalambrico gaming Logitech G502 Lightspeed",
                        "precio": "1491.40",
                        "imagen": "images/logitech-mouse.jpg",
                        "cantidad": "1"
                    }
                ],
            }
        ],
        "ordenesPendientesEntrega": [
            {
                "_id": "",
                "estado": "origen",
                "fecha": "12/10/2021",
                "productos": [
                    {
                        "_id": "",
                        "nombre": "Mouse Razer",
                        "descripcion": "Mouse gaming Razer Basilik Essential",
                        "precio": "1204.54",
                        "imagen": "images/razer-mouse.jpg",
                        "cantidad": "1"
                    }
                ],
            }
        ],
        "empresasFavoritas": [
            {
                "_id": "",
                "nombre": "",
                "descipcion": "",
                "imagen": ""
            }
        ],
        "direccionesEntrega": [
            {
                "_id": ObjectId(),
                "direccion": "",
                "referencia": "",
                "longitud": "",
                "latitud": ""
            }
        ]
    },
]);

db.motoristas.insertMany([
    {
        "nombres": "Juan Antonio",
        "apellidos": "Rodriguez",
        "usuario": "jrodriguez",
        "genero": "Masculino",
        "correo": "jrodriguez",
        "telefono": "12345678",
        "imagen": "images/juan-perfil.jpg",
        "fechaNacimiento": {
            "dia": "12",
            "mes": "12",
            "anio": "2000"
        },
        "contrasena": "jrodriguez",
        "historialEntregas": [
            {
                "_id": "",
                "estado": "",
                "titulo": ""
            }
        ],
        "ordenesTomadas": [
            {
                "_id": "",
                "estado": "",
                "titulo": ""
            }
        ]
    }
]);

db.categorias.insertMany([
    {
        "nombre": "",
        "icono": "",
        "empresas": [
            {
                "_id": ObjectId(),
                "nombres": "Logitech",
                "descripcion": "Empresa dedicada a la elaboración y distribución de productos tecnológicos.",
                "correo": "logitech@gmail.com",
                "telefono": "12345678",
                "imagen": "images/logitech-perfil.jpg",
                "baner": "images/logitech-banner.jpg",
                "contrasena": "logitech",
                "calificacion": "4",
                "productos": [
                    {
                        "_id": ObjectId(),
                        "nombre": "Mouse gaming inalambrico",
                        "descripcion": "Mouse inalambrico gaming Logitech G502 Lightspeed",
                        "precio": "1491.40",
                        "imagen": "images/g502-lightspeed.jpg",
                        "cantidad": "9"
                    },
                    {
                        "_id": ObjectId(),
                        "nombre": "Mouse M720 Triathlon",
                        "descripcion": "Ratón inalábrico multidispositivo con desplazamiento ultra rápido",
                        "precio": "1230.19",
                        "imagen": "images/m720-triathlon.jpg",
                        "cantidad": "14"
                    }
                ],
            }
        ]
    }
]);

db.ordenesDisponibles.insertMany([
    {
        "estado": "disponible",
        "fecha": "12/11/2021",
        "cliente": {
            "_id": "",
            "nombres": "Luis Eduardo",
            "apellidos": "Romero Jimenez",
            "telefono": "+504 3247-2880",
            "direccionEntrega": {
                "_id": "",
                "direccion": "",
                "referencia": "",
                "longitud": "",
                "latitud": ""
            }
        },
        "productos": [
            {
                "_id": ObjectId(),
                "nombre": "Mouse Razer",
                "descripcion": "Mouse gaming Razer Basilik Essential",
                "precio": "1204.54",
                "imagen": "images/razer-mouse.jpg",
                "cantidad": "1"
            }
        ],
    }
]);

/*"carrito": {
    "productos": [
        {
            "nombre": "Mouse Logitech",
            "descripcion": "Mouse inalambrico gaming Logitech G502 Lightspeed",
            "precio": "1491.40",
            "imagen": "images/logitech-mouse.jpg",
            "cantidad": "1"
        }
    ],
    "total": "1491.40"
},*/