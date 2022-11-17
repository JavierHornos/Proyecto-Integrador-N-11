let fs = require('fs');
const path = require('path'); 


const { validationResult } = require('express-validator');
const bcrypt=require ('bcrypt')
const db = require('../database/models');



 
const controladorUsers = 
{

       iniciarSesion: (req, res) => {
               
        res.render('./users/login');
        },  
          
          
          

        procesoSesion: (req, res) => {
                let datos = req.body                                                    
                PasswordPlano = datos.Password;                                         
              // console.log(PasswordPlano)
           
                db.usuarios.findAll().then((listaUsuarios) =>{
                let userToLogin = listaUsuarios.filter((prod) => prod.Email  == datos.Email);

                for (let p of userToLogin) {
                let PasswordHash = p.Password   
               
                if(userToLogin) {
                        let isOkThePassword = bcrypt.compareSync(PasswordPlano, PasswordHash)
                        if (isOkThePassword) {
                                delete userToLogin.Password;
                                req.session.userLogged = userToLogin;

                                if(req.body.recordame) {
                                      res.cookie('recordame', req.body.Email, { maxAge: (1000 * 60) * 5 })  
                                }

                                return res.redirect('./perfil')
                        } else {
                                return res.render('./users/login', {
                                        errors: {
                                                   password: {
                                               msg: 'Password incorrecto'
                                               }
                                         }
                                  });
                        }
                }
                         return res.render('./users/login', {
                                 errors: {
                                            email: {
                                        msg: 'Email incorrecto'
                                        }
                                  }
                           });

                        }

                });
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
               
                res.render('./users/perfil',  {usuarios: req.session.userLogged},)
               
        },


        
        verPerfil: (req, res) => {
                                
                
                res.render('./users/editar-perfil',  {user: req.session.userLogged},)

        },


        cambiarPerfil: (req, res) => {
            let user = req.session.userLogged
                
                    for (let p of  user) {
                        Emailplano = p.Email
                        passplano = p.Password
                        nombreImagenAntigua = p.Imagen
                         
                db.usuarios.update({
          
                        "Nombre": req.body.Nombre,
                        "Apellido": req.body.Apellido,
                        "Email": Emailplano,
                        "Password": passplano,
                        "Direccion": req.body.Direccion,
                        "Imagen": req.file.filename,
                        "Administrador": 0,
                        "Local_FK": req.body.Local_FK,
              
                   },{
                       where: {
                      Email: Emailplano
                     }
                });

                
           }
                
       //     fs.unlinkSync(__dirname+'/../../public/imagenes/avatares/'+nombreImagenAntigua, (error) =>{
        //         if (error) {
         //               console.log(error.message);
        //        }})
                
                res.redirect ('/users/login');
                                                 
        },                
         
        




        desloguear: (req, res) => {
                res.clearCookie('recordame');
                req.session.destroy();
                
                return res.redirect('/');
        }
                  
                
        
}

module.exports = controladorUsers;