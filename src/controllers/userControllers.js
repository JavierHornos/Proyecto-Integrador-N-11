const path = require('path');
let fs = require('fs');
const { validationResult } = require('express-validator');
const bcrypt=require ('bcrypt')
const db = require('../database/models');



 
const controladorUsers = 
{

       iniciarSesion: (req, res) => {
                res.render('./users/login');
        },  
          
          
          

        procesoSesion: (req, res) => {
                let datos = req.body                                                    // capturo lo que viene por formulario y lo guardo de DATOS
                PasswordPlano = datos.Password;                                         // guardo el password Plano
               // console.log(PasswordPlano)
                let usuarioALoguearse;
                let errors = validationResult(req);                                      // resultados de errores de formulario y lo guardamos en errors

                if (errors.isEmpty()) {                                                 // si no hay errores hacemos toda la logica
                        
                        // // ** VALIDANDO A USUARIO ** 
                        
                        db.usuarios.findAll().then((listaUsuarios) =>{                                  // traemos todos los usuarios de la base de datos
                                        
                        let userbuscado = listaUsuarios.filter((prod) => prod.Email  == datos.Email);   // comparamos email y guardamos en userbuscado

                        for (let p of userbuscado) {                                                    // for para buscar el Password de la bae de datos

                              let PasswordHash = p.Password                                             // guardamos el password en la variable PasswordHash

                          //    console.log(PasswordHash)


                               // usamos encriptado para comparar la clave
                                                        
                               bcrypt.compare(PasswordPlano, PasswordHash, function(err, laClaveEsCorrecta) {           // le pasamos la pass plana y hasheada
                                if (laClaveEsCorrecta == true) {
                                       let usuarioALoguearse = userbuscado;                                                // encontramos al usuario y lo agregamos a usuarioALoguearse

                                       req.session.usuarioLogueado = usuarioALoguearse;                              // guardamos en el session el usuario a loguearse
        
                                        // ** ACA TERMINA LA VALIDACION DE USUARIO **
                
                
                                        //** ACA CREAMOS LA COOKIE **
                                        if (req.body.recordame != undefined) {                                      // si el recordame del formulario no es undefined es porque fue tildado
                                                res.cookie('recordame', usuarioALoguearse.email, { maxAge: 300000 })  // las cookie viajan en el response, creamos una cookie, le damos un nombre y valor, y expiracion   
                                        }

                                        db.productos.findAll().then((products) =>{                                      // treamos todos los productos
       
                                                res.render('home-admin', {products: products});                         // y lo mandamos a la vista final  
                                             });

                                        
                                                                       
                                } else {
                                        // clave es invalida!                                           // si no funciona la clave
                                        return res.render('./users/login', {errors: [                 // mando array de errors a la vista de login
                                                { msg: 'credenciales invalida'}                        // (con propiedad msg: credenciales invalida)
                                        ]});
                                        }
                               });

                        }                          
                                                       
                });
                        } else {
                                                                                                        
                                return res.render('./users/login', {errors: errors.errors});    // si no anda nada, mandamos errores a la vista
                }
                              
                        
                
        },




        registrarse: (req, res) => {
                res.render("./users/registro");
        },




        procesoRegistro: (req, res) => {

                let errors = validationResult(req); // resultados de errores de formulario y lo guardamos en errors

                let textoPlano = req.body.Password;
                          
                let hash = bcrypt.hashSync(textoPlano, 10);

                let datos = req.body
               // console.log(datos)

                db.usuarios.create({
                        "Nombre": req.body.Nombre,
                        "Apellido": req.body.Apellido,
                        "Email": req.body.Email,
                        "Password": hash,
                        "Direccion": req.body.Direccion,
                        "Imagen": req.file.filename,
                        "Administrador": 0,                                        
                        "Local_FK": req.body.Local_FK,
                                                                
                });                                                       

                res.redirect ('/users/login');
        },

        
       

        perfil: (req, res) => {
                
                res.render('./users/perfil',  {usuarios: req.session.usuarioLogueado},)
               
        },


}

module.exports = controladorUsers;