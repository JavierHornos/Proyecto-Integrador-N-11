const mainController= require('./../controllers/maincontroller')

const express = require ('express');
const router = express.Router();

router.get ('/' , mainController.home)

router.get ('/home2' , mainController.home2)

router.get ('/carrito', mainController.carrito)

router.get ('/carrito-cargado', mainController.carritocargado)

router.get ('/login', mainController.login)

router.get ('/producto', mainController.producto)

router.get ('/perfil', mainController.perfil)

router.get ('/registro', mainController.registro)

router.get ('/whiskies', mainController.whiskies)

router.get('/administracion-producto', mainController.editarProducto)

router.get('/productos-todos', mainController.productosTodos)

/*** CREATE ONE PRODUCT ***/ 
router.get('/creacion-producto', mainController.crear); 



module.exports = router;