const mainController= require('./../controllers/maincontroller')

const express = require ('express');
const router = express.Router();

router.get ('/' , mainController.home)

router.get ('/carrito', mainController.carrito)

router.get ('/carrito-cargado', mainController.carritocargado)

router.get ('/login', mainController.login)

router.get ('/producto', mainController.producto)

router.get ('/registro', mainController.registro)

router.get ('products/whiskies', mainController.whiskies)


module.exports = router;