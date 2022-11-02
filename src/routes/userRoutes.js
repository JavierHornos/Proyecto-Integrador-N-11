const usersController = require('./../controllers/userControllers')

const path = require('path');
const express = require('express');
const router = express.Router();
const {check} = require('express-validator');   // usamos check del express validator


router.get('/login', usersController.iniciarSesion);

router.post('/login', [                                                                                                         
                        check('email').isEmail().withMessage('Email invalido'),                                                 // validamos email
                        check('password').isLength({mnin: 4}).withMessage('La contraseña debe tener al menos 4 caracteres')     // validamos password
                      ], usersController.procesoSesion);                                                                          // sigue su ruta


router.get('/check', function (req, res) {                                              // para chequear si estamos logueados ingresamos a users/check
        if (req.session.usuarioLogueado == undefined) {
            res.send('no estas logueado');
        } else {
            res.send("El usuario logueado es " + req.session.usuarioLogueado.email)
        } 
});             



router.get('/registro', usersController.registrarse);
router.post('/registro',[                                                                                                         
                        check('mail').isEmail().withMessage('Email invalido'),                                                 // validamos email
                        check('password').isLength({mnin: 4}).withMessage('La contraseña debe tener al menos 4 caracteres')     // validamos password
                    ], usersController.procesoRegistro)


router.get ('/perfil', usersController.perfil)



module.exports = router;