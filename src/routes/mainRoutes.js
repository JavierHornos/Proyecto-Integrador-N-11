const mainController= require('./../controllers/mainController')

const express = require ('express');
const router = express.Router();

router.get ('/' , mainController.home)

router.get ('/home2' , mainController.home2)



// administracion-producto seria editar producto
router.get('/administracion-producto', mainController.editarProducto)

//* CREAR PRODUCTO *//

router.get ("products/creacion-producto", mainController.crear)

router.post ("/creacion-producto", mainController.store)


module.exports = router;