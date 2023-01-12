const express = require("express");
const router = express.Router();

const controller = require("./../controllers/apiController");

router.get("/users/", controller.usuarios);

router.get("/users/ultimo", controller.ultimo);

router.get("/users/:id", controller.usuarioDetalle);

router.get("/products/", controller.lista);

router.get("/products/ultima", controller.ultima);

router.get("/products/:id", controller.productosDetalle);

router.get("/categorias/", controller.categorias);


module.exports = router;