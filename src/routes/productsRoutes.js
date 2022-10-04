const productsController = require('./../controllers/productsController')

const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');   // multer


// Productos//
router.get ('/whiskies', productsController.whiskies)
router.get ('/vinos', productsController.whiskies)
router.get ('/espumantes', productsController.espumantes)
router.get ('/gin', productsController.gin)
router.get ('/licores', productsController.licores)
router.get ('/vodka', productsController.vodka)
router.get ('/ron', productsController.ron)
router.get ('/aperitivos', productsController.aperitivos)
router.get ('/cervezas', productsController.cervezas)
router.get ('/accesorios', productsController.accesorios)
router.get('/productos-todos', productsController.productosTodos)


// Carrito
router.get ('/carrito', productsController.carrito)

router.get ('/carrito-cargado', productsController.carritoCargado)


router.get ('/producto', productsController.producto) // este no va???


//* DETALLE PRODUCTO *//
router.get ('/detalle-producto/:id', productsController.detalleProducto)


//* CREAR PRODUCTO *//
router.get ('/creacion-producto', productsController.crear)


//* EDITAR PRODUCTO *//
router.get('/editar-producto/:id', productsController.editarProducto)
router.put ('/editar-producto/:id', productsController.actualizarProducto)

//* MULTER *//
const multerDiskStorage = multer.diskStorage({
    destination: function(req, file, cb) {       // request, archivo y callback que almacena archivo en destino
     cb(null, path.join(__dirname,'../../public/imagenes'));    // Ruta donde almacenamos el archivo
    },
    filename: function(req, file, cb) {          // request, archivo y callback que almacena archivo en destino
     let imageName = Date.now() + path.extname(file.originalname);   // milisegundos y extensión de archivo original
     cb(null, imageName);         
    }
});

const uploadFile = multer({ storage: multerDiskStorage });


//* CREAR PRODUCTO CON FOTO MULTER *//
router.get ("/crear", productsController.crear);

router.post ("/crear", uploadFile.single('cImage') ,productsController.store);





module.exports = router;