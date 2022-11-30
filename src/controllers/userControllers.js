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
                const resultValidation = validationResult(req); // resultados de errores de la validacion y lo guardamos en resultValidation

                if (resultValidation.errors.length > 0) {
                        return res.render ('./users/login', {errors: resultValidation.errors})
                }

                let datos = req.body                                                    
                PasswordPlano = datos.Password;                                         
         
                db.usuarios.findAll().then((listaUsuarios) =>{
                let userToLogin = listaUsuarios.filter((prod) => prod.Email  == datos.Email);

                if(userToLogin) {
                        for (let p of userToLogin) {
                        let PasswordHash = p.Password 
                        let isOkThePassword = bcrypt.compareSync(PasswordPlano, PasswordHash)
                        if (isOkThePassword) {
                                delete userToLogin.Password;
                                req.session.userLogged = userToLogin;

                                if(req.body.recordame) {
                                      res.cookie('recordame', req.body.Email, { maxAge: (1000 * 60) * 5 })  
                                }

                                return res.redirect('./perfil')
                        } else {
                                return res.render('./users/login', {errors: {password: {msg: 'Password incorrecto'}}});
                        }
                }
                        } return res.render('./users/login', {errors: {email: {msg: 'Email incorrecto'}}});

                });
        },

                              
        registrarse: (req, res) => {
                
                res.render("./users/registro");
        },



        procesoRegistro: (req, res) => {

                console.log(req.body)
                const resultValidation = validationResult(req); // resultados de errores de formulario y lo guardamos en errors

                if (resultValidation.errors.length > 0) {
                        return res.render ('./users/registro', {errors: resultValidation.errors})
                }


                let textoPlano = req.body.password; 
                          
                let hash = bcrypt.hashSync(textoPlano, 10);

                let datos = req.body
                //console.log(datos)

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
              //  console.log(req.session.userLogged)
                
                res.render('./users/perfil',  {usuarios: req.session.userLogged},)
               
        },



        verPerfil: (req, res) => {
                             
        
                res.render('./users/editar-perfil',  {user: req.session.userLogged},)

        },



        cambiarPerfil: async (req, res) => {
        
            let user = req.session.userLogged

                        Emailplano = user[0].Email
                        passplano = user[0].Password
                        nombreImagenAntigua = user[0].Imagen

                        console.log(nombreImagenAntigua)
                      
                        req.session.userLogged[0].Email = Emailplano
                        req.session.userLogged[0].Password = passplano 
                        req.session.userLogged[0].Imagen = req.file.filename
                        console.log(req.file.filename);
                       

                         
                await db.usuarios.update({
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
           
                //         fs.unlinkSync(__dirname+'/../../public/imagenes/avatares/'+nombreImagenAntigua, (error) =>{
                //         if (error) {
                //       console.log(error.message);
                // }})
             
                res.redirect ('/users/perfil');                                             
        },                
         
        

        desloguear: (req, res) => {
                res.clearCookie('recordame');
                req.session.destroy();
                
                return res.redirect('/');
        }
                  
        
}

module.exports = controladorUsers;