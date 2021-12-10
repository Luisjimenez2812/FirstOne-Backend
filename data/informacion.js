db.clientes.insertMany([
    {
        "nombres": "Luis Eduardo",
        "apellidos": "Romero Jimenez",
        "usuario": "lromero",
        "genero": "Masculino",
        "correo": "lromeroj@gmail.com",
        "telefono": "+504 3247-2880",
        "imagen": "https://res.cloudinary.com/dekixopkw/image/upload/v1639033655/FirstOne/Clientes/yu6fnfkvgu6hhd9fmwii.png",
        "fechaNacimiento": "28/12/1998",
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
                "_id": ObjectId("61b1afbb9f6fe0530d3972fb"),
                "nombre": "",
                "descipcion": "",
                "imagen": ""
            }
        ],
        "direccionesEntrega": {
            "direccion": "",
            "referencia": "",
            "longitud": "",
            "latitud": ""
        }
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
        "fechaNacimiento": "12/12/2000",
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
        "nombre": "Cosméticos",
        "icono": "https://res.cloudinary.com/dekixopkw/image/upload/v1639032057/FirstOne/categorias/yk2zzppurbp76xgbpsgd.svg",
        "empresas": [
            {
                "_id": ObjectId(),
                "nombres": "Logitech",
                "descripcion": "Empresa dedicada a la elaboración y distribución de productos tecnológicos.",
                "correo": "logitech@gmail.com",
                "telefono": "12345678",
                "imagen": "https://res.cloudinary.com/dekixopkw/image/upload/v1639032721/FirstOne/empresas/qivoyrmjhteublif3qx9.png",
                "baner": "https://res.cloudinary.com/dekixopkw/image/upload/v1639032721/FirstOne/empresas/qivoyrmjhteublif3qx9.png",
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
    },
    {
        "nombre": "Farmacias",
        "icono": "https://res.cloudinary.com/dekixopkw/image/upload/v1639032058/FirstOne/categorias/tcswb6mbascuwuiyssxl.png",
        "empresas":[]
    },
    {
        "nombre": "Super",
        "icono": "https://res.cloudinary.com/dekixopkw/image/upload/v1639032058/FirstOne/categorias/n7owo0g2p2owrhxpo58e.svg",
        "empresas":[]
    },
    {
        "nombre": "Ropa",
        "icono": "https://res.cloudinary.com/dekixopkw/image/upload/v1639032057/FirstOne/categorias/foef60zo00myh7hcdzzt.png",
        "empresas":[]
    },
    {
        "nombre": "Calzado",
        "icono": "https://res.cloudinary.com/dekixopkw/image/upload/v1639032058/FirstOne/categorias/hd0nijezbclogcnzdzu3.png",
        "empresas":[]
    },
    {
        "nombre": "Restaurantes",
        "icono": "https://res.cloudinary.com/dekixopkw/image/upload/v1639032057/FirstOne/categorias/qvppref5feh7cwmm93hn.png",
        "empresas":[]
    },
    {
        "nombre": "Ferreterias",
        "icono": "https://res.cloudinary.com/dekixopkw/image/upload/v1639032057/FirstOne/categorias/t3vztd13bzof2eihbvw2.png",
        "empresas":[]
    },
    {
        "nombre": "Papeleria",
        "icono": "https://res.cloudinary.com/dekixopkw/image/upload/v1639032057/FirstOne/categorias/mz11o1ajjpnqha4pcua2.png",
        "empresas":[]
    },    
    {
        "nombre": "Joyeria",
        "icono": "https://res.cloudinary.com/dekixopkw/image/upload/v1639032057/FirstOne/categorias/brm6ybbcxx7ezjuodz0e.png",
        "empresas":[]
    },
    {
        "nombre": "Hogar",
        "icono": "https://res.cloudinary.com/dekixopkw/image/upload/v1639032057/FirstOne/categorias/wuevdds4t4p3uqy2wltv.png",
        "empresas":[]
    },
    {
        "nombre": "Tecnologia",
        "icono": "https://res.cloudinary.com/dekixopkw/image/upload/v1639032057/FirstOne/categorias/yzm2kodtwpwyav37xz2f.png",
        "empresas":[]
    },
    {
        "nombre": "Panaderia",
        "icono": "https://res.cloudinary.com/dekixopkw/image/upload/v1639032057/FirstOne/categorias/ju0zrr9zdedkw36hibrr.png",
        "empresas":[]
    },
    {
        "nombre": "Cafe",
        "icono": "https://res.cloudinary.com/dekixopkw/image/upload/v1639032059/FirstOne/categorias/fxd7jvh6lut5frufvlne.png",
        "empresas":[]
    },
    {
        "nombre": "Videojuegos",
        "icono": "https://res.cloudinary.com/dekixopkw/image/upload/v1639032059/FirstOne/categorias/cfejmojmku3uhsbtepqh.png",
        "empresas":[]
    }
]);

db.ordenesdisponibles.insertMany([
    {
        "estado": "disponible",
        "fecha": "12/11/2020",
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