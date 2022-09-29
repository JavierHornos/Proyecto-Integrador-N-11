const productsController = require('./../controllers/productsController')

const path = require('path');
const express = require('express');
const router = express.Router();


router.get ('/whiskies', productsController.whiskies)

router.get ('/carrito', productsController.carrito)

router.get('/productos-todos', productsController.productosTodos)



module.exports = router;