const path = require('path');
let fs = require('fs');
const { validationResult } = require('express-validator');
const bcrypt=require ('bcrypt')

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
                        
                        const usersFilePath = path.join(__dirname, '../database/usuariosDataBase.json');  
                        const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));   
                        
                        for (let i =0; i< users.length; i++) {                               
                                if (users[i].email == req.body.email) { // comparamos email del json con lo que viene del formulario

                                        // usamos encriptado para comparar la clave
                                        bcrypt.compare(req.body.password, users[i].password, function(err, laClaveEsCorrecta) {
                                                if (laClaveEsCorrecta == true) {
                                                        usuarioALoguearse = users[i]; // encontramos al usuario y lo agregamos a usuarioALoguearse

                                                        req.session.usuarioLogueado = usuarioALoguearse; // guardamos en el session el usuario a loguearse
                        
                                                        // ** ACA TERMINA LA VALIDACION DE USUARIO **
                                
                                
                                                        //** ACA CREAMOS LA COOKIE **
                                                        if (req.body.recordame != undefined) {                                     // si el recordame del formulario no es undefined es porque fue tildado
                                                                res.cookie('recordame', usuarioALoguearse.email, { maxAge: 300000 })  // las cookie viajan en el response, creamos una cookie, le damos un nombre y valor, y expiracion   
                                                        }
                                
                                                        res.render('home-admin'); // lo mandamos a la vista final                                
                                                } else {
                                                        // clave es invalida!
                                                        return res.render('./users/login', {errors: [                 // mando array de errors a la vista de login
                                                                { msg: 'credenciales invalida'}                        // (con propiedad msg: credenciales invalida)
                                                        ]});
                                                }
                                        });
                                }
                        }
                } else {
                        // si no mandamos errores a la vista
                        return res.render('./users/login', {errors: errors.errors});
                }
        },

        procesoRegistro: (req, res) => {
                let errors = validationResult(req); // resultados de errores de formulario y lo guardamos en errors

                if (errors.isEmpty());
                { // si no hay errores hacemos toda la logica
                        // // ** VALIDANDO A USUARIO ** 
                        const usersFilePath = path.join(__dirname, '../database/usuariosDataBase.json');  
                        const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

                        let idNuevoUsuario = (users[users.length-1].id)+1;

                        const saltRounds = 10;

                        bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
                                let nuevoUsuario = {
                                        "id": idNuevoUsuario,
                                        "Nombre": req.body.nombre,
                                        "Apellido": req.body.apellido,
                                        "password": hash,
                                        "dni": req.body.dni,
                                        "usuario": req.body.usuario,
                                        "email": req.body.mail,
                                        "domicilio": req.body.domicilio,
                                        "nacimiento": req.body.nacimiento,
                                        "image": req.file.filename
                                }
        
                                users.push(nuevoUsuario);
                                fs.writeFileSync(usersFilePath,JSON.stringify(users, null, " "),'utf-8');
                                res.redirect ('/users/login');
                        });
                }
        },

        registrarse: (req, res) => {
                 res.render("./users/registro");
         },

               
               

        perfil: (req, res) => {
                res.render('./users/perfil',  {user: req.session.usuarioLogueado},)
                // console.log(req.session.usuarioLogueado);
                 
                // res.render('./users/perfil',);
        },
}

module.exports = controladorUsers;