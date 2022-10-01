const productsController = require('./../controllers/productsController')

const express = require('express');
const router = express.Router();

router.get ('/whiskies', productsController.whiskies)

router.get ('/carrito', productsController.carrito)

router.get('/productos-todos', productsController.productosTodos)

router.get ('/carrito-cargado', productsController.carritoCargado)

router.get ('/producto', productsController.producto)

router.get ('/producto/:id', productsController.detalleProducto)

router.get ('/creacion-producto', productsController.crear)

//router.put ("products/creacion-producto", productsController.store)

router.get('/editar-producto/:id', productsController.editarProducto)
router.put ('/editar-producto/:id', productsController.actualizarProducto)


//* CREAR PRODUCTO *//

router.get ("/crear", productsController.crear);

router.post ("/crear", productsController.store);


module.exports = router;