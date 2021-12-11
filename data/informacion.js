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
                "fecha": "",
                "cliente": "",
                "productos": ""
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
                "nombres": "L'oréal Paris",
                "descripcion": "L'Oréal es una empresa francesa de cosméticos y belleza, creada en 1909 por el químico Eugène Schueller",
                "correo": "loreal@gmail.com",
                "telefono": "12345678",
                "imagen": "https://res.cloudinary.com/dekixopkw/image/upload/v1639038136/FirstOne/categorias/empresas/ap5nvac0ka3gtujitqeh.png",
                "baner": "https://res.cloudinary.com/dekixopkw/image/upload/v1639038136/FirstOne/categorias/empresas/ap5nvac0ka3gtujitqeh.png",
                "calificacion": "4",
                "productos": [
                    {
                        "_id": ObjectId(),
                        "nombre": "Base de maquillaje 5D Sable Doré",
                        "descripcion": "La base de maquillaje Accord Parfait calca tu tono exacto y se adapta a todos tus matices. ",
                        "precio": "225.77",
                        "imagen": "https://res.cloudinary.com/dekixopkw/image/upload/v1639041741/FirstOne/categorias/empresas/productos/f3thp05du87ohfs7bkev.png",
                        "cantidad": "9"
                    }
                ],
            },
            {
                "_id": ObjectId(),
                "nombres": "MAC Cosmetics",
                "descripcion": "MAC o M·A·C Cosmetics es una empresa de productos dedicada al maquillaje y cosméticos canadiense.",
                "correo": "masccosmetics@gmail.com",
                "telefono": "12345678",
                "imagen": "https://res.cloudinary.com/dekixopkw/image/upload/v1639038136/FirstOne/categorias/empresas/fxawpmcsohqjvfm5crzb.png",
                "baner": "https://res.cloudinary.com/dekixopkw/image/upload/v1639038136/FirstOne/categorias/empresas/fxawpmcsohqjvfm5crzb.png",
                "calificacion": "4",
                "productos": [
                    {
                        "_id": ObjectId(),
                        "nombre": "SURPRISE EYES EYE SHADOW X 6",
                        "descripcion": "A limited-edition Eye Shadow palette featuring waves of six all-new Warm, Cool, and Rich-toned shades in a pocket-sized mirrored compact. ",
                        "precio": "715.97",
                        "imagen": "https://res.cloudinary.com/dekixopkw/image/upload/v1639041741/FirstOne/categorias/empresas/productos/f3thp05du87ohfs7bkev.png",
                        "cantidad": "6"
                    }
                ],
            },
        ]
    },
    {
        "nombre": "Farmacias",
        "icono": "https://res.cloudinary.com/dekixopkw/image/upload/v1639032058/FirstOne/categorias/tcswb6mbascuwuiyssxl.png",
        "empresas":[
            {
                "_id": ObjectId(),
                "nombres": "Farmacias Kielsa",
                "descripcion": "Farmacias kielsa descripción",
                "correo": "farmaciaskielsa@gmail.com",
                "telefono": "12345678",
                "imagen": "https://res.cloudinary.com/dekixopkw/image/upload/v1639038137/FirstOne/categorias/empresas/cgrecs4yhmp063gpyezn.png",
                "baner": "https://res.cloudinary.com/dekixopkw/image/upload/v1639038136/FirstOne/categorias/empresas/eqa1jlnb087becfg8rev.png",
                "calificacion": "4",
                "productos": [
                    {
                        "_id": ObjectId(),
                        "nombre": "Farinter Alcohol",
                        "descripcion": "Alcohol Clínico Mentolado 250ML.",
                        "precio": "55.60",
                        "imagen": "https://res.cloudinary.com/dekixopkw/image/upload/v1639041741/FirstOne/categorias/empresas/productos/ehjwgs58cndily2z6epd.png",
                        "cantidad": "40"
                    }
                ],
            },
            {
                "_id": ObjectId(),
                "nombres": "Farmacias Punto Farma",
                "descripcion": "Farmacias punto farma descripción",
                "correo": "farmaciaskielsa@gmail.com",
                "telefono": "12345678",
                "imagen": "https://res.cloudinary.com/dekixopkw/image/upload/v1639038137/FirstOne/categorias/empresas/wtoktxq2ljn2xyi2vkca.png",
                "baner": "https://res.cloudinary.com/dekixopkw/image/upload/v1639038137/FirstOne/categorias/empresas/wtoktxq2ljn2xyi2vkca.png",
                "calificacion": "4",
                "productos": [
                    {
                        "_id": ObjectId(),
                        "nombre": "Acetaminofen Mk",
                        "descripcion": "Acetaminofen Mk 500 Mg 20 tabletas",
                        "precio": "55.30",
                        "imagen": "https://res.cloudinary.com/dekixopkw/image/upload/v1639041741/FirstOne/categorias/empresas/productos/a7zjpsy1gfmg4a7602bj.jpg",
                        "cantidad": "15"
                    }
                ],
            }
        ]
    },
    {
        "nombre": "Super",
        "icono": "https://res.cloudinary.com/dekixopkw/image/upload/v1639032058/FirstOne/categorias/n7owo0g2p2owrhxpo58e.svg",
        "empresas":[
            {
                "_id": ObjectId(),
                "nombres": "Walmart",
                "descripcion": "Walmart es una corporación multinacional de tiendas de origen estadounidense, que opera cadenas de grandes almacenes de descuento y clubes de almacenes.",
                "correo": "walmart@gmail.com",
                "telefono": "12345678",
                "imagen": "https://res.cloudinary.com/dekixopkw/image/upload/v1639041859/FirstOne/categorias/empresas/stmeqlhe4itgngikyezf.png",
                "baner": "https://res.cloudinary.com/dekixopkw/image/upload/v1639041859/FirstOne/categorias/empresas/stmeqlhe4itgngikyezf.png",
                "calificacion": "4",
                "productos": [
                    {
                        "_id": ObjectId(),
                        "nombre": "Ranchitas Yummies Natrual",
                        "descripcion": "Ranchitas Yummies Natural 750 Gr",
                        "precio": "73.50",
                        "imagen": "https://res.cloudinary.com/dekixopkw/image/upload/v1639041741/FirstOne/categorias/empresas/productos/aceydrbmxcbuzo0v1ggz.jpg",
                        "cantidad": "15"
                    }
                ],
            },
            {
                "_id": ObjectId(),
                "nombres": "Supermercados La Colonia",
                "descripcion": "Supermercados la colonia descripción",
                "correo": "supermercadoslacolonia@gmail.com",
                "telefono": "12345678",
                "imagen": "https://res.cloudinary.com/dekixopkw/image/upload/v1639038138/FirstOne/categorias/empresas/oh79guvaovpesnkigcyn.png",
                "baner": "https://res.cloudinary.com/dekixopkw/image/upload/v1639038138/FirstOne/categorias/empresas/oh79guvaovpesnkigcyn.png",
                "calificacion": "4",
                "productos": [
                    {
                        "_id": ObjectId(),
                        "nombre": "Mayonesa Essential",
                        "descripcion": "Mayonesa Essential Everyday Real 30 Oz",
                        "precio": "114.90",
                        "imagen": "https://res.cloudinary.com/dekixopkw/image/upload/v1639041740/FirstOne/categorias/empresas/productos/kqemyducqg0fuejbr9qq.jpg",
                        "cantidad": "5"
                    }
                ],
            }
        ]
    },
    {
        "nombre": "Ropa",
        "icono": "https://res.cloudinary.com/dekixopkw/image/upload/v1639032057/FirstOne/categorias/foef60zo00myh7hcdzzt.png",
        "empresas":[
            {
                "_id": ObjectId(),
                "nombres": "Malibu",
                "descripcion": "Malibu descripción.",
                "correo": "malibu@gmail.com",
                "telefono": "12345678",
                "imagen": "https://res.cloudinary.com/dekixopkw/image/upload/v1639038137/FirstOne/categorias/empresas/cfq2mpvdc9fn9ktm4pog.png",
                "baner": "https://res.cloudinary.com/dekixopkw/image/upload/v1639038137/FirstOne/categorias/empresas/cfq2mpvdc9fn9ktm4pog.png",
                "calificacion": "4",
                "productos": [
                    {
                        "_id": ObjectId(),
                        "nombre": "Camiseta para mujer",
                        "descripcion": "Camiseta para mujer.",
                        "precio": "180.55",
                        "imagen": "https://res.cloudinary.com/dekixopkw/image/upload/v1639041740/FirstOne/categorias/empresas/productos/dcmihub1dikduuw1izvk.webp",
                        "cantidad": "3"
                    }
                ],
            }
        ]
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

db.administradors.insertMany([
    {
        "usuario":"admin",
        "contrasena":"asd.456"
    }
]);