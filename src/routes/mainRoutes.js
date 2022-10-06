const mainController= require('./../controllers/mainController')

const express = require ('express');
const router = express.Router();

router.get ('/' , mainController.home)

router.get ('/home-admin' , mainController.homeAdmin)



// administracion-producto seria editar producto
// router.get('/administracion-producto', mainController.editarProducto)

module.exports = router;