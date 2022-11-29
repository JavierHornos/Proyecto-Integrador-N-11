const usersController = require('./../controllers/userControllers')

const express = require('express');
const router = express.Router();
const multerAvatar = require('../middlewares/multerAvatar')
const guestMiddleware = require('../middlewares/guestMiddleware')
const adminMiddleware = require('../middlewares/adminMiddleware')
const validacionRegistro = require('../middlewares/validacionRegistro')
const validacionLogin = require('../middlewares/validacionLogin')





router.get('/login', guestMiddleware, usersController.iniciarSesion);
router.post('/login', validacionLogin, usersController.procesoSesion);                                                                          // sigue su ruta


router.get('/registro', guestMiddleware, usersController.registrarse);
router.post('/registro',  multerAvatar.single('Imagen'), validacionRegistro, usersController.procesoRegistro)


router.get ('/perfil',adminMiddleware, usersController.perfil)

router.get ('/editar-perfil', usersController.verPerfil)
router.post ('/editar-perfil', multerAvatar.single('Imagen'), usersController.cambiarPerfil)


router.get ('/desloguear', usersController.desloguear)






router.get('/check', function (req, res) {                                              // para chequear si estamos logueados ingresamos a users/check
    if (req.session.userLogged == undefined) {
        res.send('no estas logueado');
    } else {    
            let mailLogueado = req.session.userLogged
            for (let p of  mailLogueado)
                email = p.Email
                      
                res.send("El usuario logueado es " + email)
            } 
        });      








module.exports = router;