const productsController = require('./../controllers/productsController')

const path = require('path');
const express = require('express');
const { Router } = require('express');
const router = express.Router();


router.get ('/whiskies', productsController.whiskies)

router.get ('/carrito', productsController.carrito)

router.get('/productos-todos', productsController.productosTodos)

router.get ('/carrito-cargado', productsController.carritoCargado)

router.get ('/producto', productsController.producto)



//* CREAR PRODUCTO *//

router.get ("/crear", productsController.crear);

router.post ("/crear", productsController.store);


module.exports = router;