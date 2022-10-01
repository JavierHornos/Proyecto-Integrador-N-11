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

router.get ('/producto1', productsController.producto)

router.get ('/creacion-producto', productsController.crear)

//router.put ("products/creacion-producto", productsController.store)

router.get('/administracion-producto', productsController.editarProducto)

module.exports = router;