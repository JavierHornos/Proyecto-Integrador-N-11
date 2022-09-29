const mainController= require('./../controllers/mainController')

const express = require ('express');
const router = express.Router();

router.get ('/' , mainController.home)

router.get ('/home2' , mainController.home2)





// carrito-cargado hay que llevarlo a productsRoutes.js
router.get ('/carrito-cargado', mainController.carritocargado)

// producto seria detalle de producto
router.get ('/producto', mainController.producto)

// administracion-producto seria editar producto
router.get('/administracion-producto', mainController.editarProducto)


/*** CREATE ONE PRODUCT ***/ 
router.get('/creacion-producto', mainController.crear); 



module.exports = router;