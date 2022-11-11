const path = require('path');
let fs = require('fs');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const db = require('../database/models');

let user_json = fs.readFileSync('./src/database/usuariosDataBase.json');
let obj_literal_users = JSON.parse(user_json);

const UsersFilePath = path.join(__dirname, '../database/usuariosDataBase.json');
const users = JSON.parse(fs.readFileSync(UsersFilePath, 'utf-8'));


const controladorUsers =
{
    iniciarSesion: (req, res) => {
        res.render('./users/login');
    },

    procesoSesion: (req, res) => {
        let usuarioALoguearse;
        let errors = validationResult(req);                                      // resultados de errores de formulario y lo guardamos en errors

        if (errors.isEmpty()) { // si no hay errores hacemos toda la logica                        
            // // ** VALIDANDO A USUARIO ** 

            db.usuarios.findAll().then((listaUsuarios) => {
                // comparamos email del json con lo que viene del formulario
                let usuario = listaUsuarios.filter((usuario) => usuario.Email == req.body.email)[0];

                console.log(usuario)

                // usamos encriptado para comparar la clave
                bcrypt.compare(req.body.password, usuario.Password, (err, laClaveEsCorrecta) => {
                    if (laClaveEsCorrecta == true) {
                        // encontramos al usuario y lo agregamos a usuarioALoguearse
                        usuarioALoguearse = usuario;

                        // guardamos en el session el usuario a loguearse
                        req.session.usuarioLogueado = usuarioALoguearse;

                        // ** ACA TERMINA LA VALIDACION DE USUARIO **

                        //** ACA CREAMOS LA COOKIE **
                        if (req.body.recordame != undefined) { 
                            // si el recordame del formulario no es undefined es porque fue tildado
                            res.cookie('recordame', usuarioALoguearse.Email, { maxAge: 300000 });  // las cookie viajan en el response, creamos una cookie, le damos un nombre y valor, y expiracion   
                        }

                        db.productos.findAll().then((productos) => {
                            res.render('home-admin', { products: productos }); // lo mandamos a la vista final
                        });
                    } else {
                        // clave es invalida!
                        return res.render('./users/login', {
                            errors: [                 // mando array de errors a la vista de login
                                { msg: 'credenciales invalida' }                        // (con propiedad msg: credenciales invalida)
                            ]
                        });
                    }
                });

            });

        } else {
            // si no mandamos errores a la vista
            return res.render('./users/login', { errors: errors.errors });
        }
    },

    procesoRegistro: (req, res) => {
        let errors = validationResult(req); // resultados de errores de formulario y lo guardamos en errors

        console.log("ALALLA")

        if (errors.isEmpty()) {
            // si no hay errores hacemos toda la logica
            // ** VALIDANDO A USUARIO **

            console.log(db.usuario)
            console.log(db.usuarios)

            db.usuarios.findAll().then((listaUsuarios) => {
                let idNuevoUsuario = (listaUsuarios[listaUsuarios.length - 1].Id) + 1;

                const saltRounds = 10;

                bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
                    let nuevoUsuario = {
                        "id": idNuevoUsuario,
                        "Nombre": req.body.nombre,
                        "Apellido": req.body.apellido,
                        "Email": req.body.mail,
                        "Password": hash,
                        "Dirección": req.body.domicilio,
                        "Imagen": req.file.cImage,
                        "Administrador": 1,
                        "Local_FK": 1
                        // "dni": req.body.dni,
                        // "usuario": req.body.usuario,
                        // "nacimiento": req.body.nacimiento,
                    }

                    db.usuarios.create(nuevoUsuario);
                    res.redirect('/users/login');
                });

            });
        }
    },

    registrarse: (req, res) => {
        res.render("./users/registro");
    },




    perfil: (req, res) => {
        res.render('./users/perfil', { user: req.session.usuarioLogueado },)
        // console.log(req.session.usuarioLogueado);

        // res.render('./users/perfil',);
    },
}

module.exports = controladorUsers;