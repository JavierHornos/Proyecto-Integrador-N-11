const usersController = require('./../controllers/userControllers')

const path = require('path');
const express = require('express');
const router = express.Router();


router.get('/login', usersController.iniciarSesion);

router.get('/registro', usersController.registrarse);

router.get ('/perfil', usersController.perfil)



module.exports = router;