const usersController = require('./../controllers/userControllers')

const path = require('path');
const express = require('express');
const router = express.Router();
const {check} = require('express-validator');   // usamos check del express validator
const multerAvatar = require('../middlewares/multerAvatar')
const guestMiddleware = require('../middlewares/guestMiddleware')
const adminMiddleware = require('../middlewares/adminMiddleware')


router.get('/login', guestMiddleware, usersController.iniciarSesion);

router.post('/login', [                                                                                                         
                        check('Email').isEmail().withMessage('Email invalido').bail(),                                                 // validamos email
                        check('Password').isLength({mnin: 4}).withMessage('La contraseña debe tener al menos 4 caracteres')     // validamos password
                      ], usersController.procesoSesion);                                                                          // sigue su ruta


router.get('/check', function (req, res) {                                              // para chequear si estamos logueados ingresamos a users/check
            if (req.session.usuarioLogueado == undefined) {
                res.send('no estas logueado');
            } else {    
                    let mailLogueado = req.session.usuarioLogueado
                    for (let p of  mailLogueado)
                        email = p.Email
                              
                        res.send("El usuario logueado es " + email)
                    } 
                });               



router.get('/registro', guestMiddleware, usersController.registrarse);
router.post('/registro',[                                                                                                         
                        check('Email').isEmail().withMessage('Email invalido').bail(),                                                 // validamos email
                        check('Password').isLength({mnin: 4}).withMessage('La contraseña debe tener al menos 4 caracteres')     // validamos password
                    ],multerAvatar.single('Imagen'), usersController.procesoRegistro)


router.get ('/perfil',adminMiddleware, usersController.perfil)

router.get ('/editar-perfil', usersController.verPerfil)

router.post ('/editar-perfil', multerAvatar.single('Imagen'), usersController.cambiarPerfil)


router.get ('/desloguear', usersController.desloguear)






module.exports = router;