const usersController = require('./../controllers/userControllers')

const express = require('express');
const router = express.Router();

router.get('/registro',usersController.registrarse);

router.get('/login',usersController.iniciarSesion);

module.exports = router;