const mainController= require('./../controllers/mainController')

const express = require ('express');
const router = express.Router();

router.get ('/' , mainController.home)

router.get ('/home2' , mainController.home2)



// administracion-producto seria editar producto
router.get('/administracion-producto', mainController.editarProducto)


/*** CREATE ONE PRODUCT ***/ 
router.get('/creacion-producto', mainController.crear); 



module.exports = router;