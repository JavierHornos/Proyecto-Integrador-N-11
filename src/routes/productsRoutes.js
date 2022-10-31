const productsController = require('./../controllers/productsController')
let adminMiddleware = require('../middlewares/adminMiddleware')         // Middleares para restringir administradores

const express = require('express');
const router = express.Router();
const app = express();
const path = require('path');
const multer = require('multer');   // multer




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


// Productos//
router.get ('/whiskies', productsController.whiskies)
router.get ('/vinos', productsController.vinos)
router.get ('/espumantes', productsController.espumantes)
router.get ('/gin', productsController.gin)
router.get ('/licores', productsController.licores)
router.get ('/vodka', productsController.vodka)
router.get ('/ron', productsController.ron)
router.get ('/aperitivos', productsController.aperitivos)
router.get ('/cervezas', productsController.cervezas)
router.get ('/accesorios', productsController.accesorios)
router.get('/promociones', productsController.promociones)
router.get('/productos-todos', productsController.productosTodos)
router.get('/productos-todos-admin', adminMiddleware, productsController.productosTodosAdmin)


// Carrito
router.get ('/carrito', productsController.carrito)

router.get ('/carrito-cargado', productsController.carritoCargado)


//* DETALLE PRODUCTO *//
router.get ('/detalle-producto/:id', productsController.detalleProducto)

router.get ('/detalle-producto-admin/:id', adminMiddleware, productsController.detalleProductoAdmin)


//* CREAR PRODUCTO *//
router.get ('/creacion-producto', adminMiddleware, productsController.crear)


//* EDITAR PRODUCTO *//
router.get('/editar-producto/:id', adminMiddleware, productsController.editarProducto)
router.put ('/editar-producto/:id', adminMiddleware, uploadFile.single('cImage'), productsController.actualizarProducto)

//* BORRAR PRODUCTO *//
router.delete('/detalle-producto/:id', adminMiddleware, productsController.borrarProducto)


//* CREAR PRODUCTO CON FOTO MULTER *//
router.get ("/crear", productsController.crear);

router.post ("/crear", uploadFile.single('cImage'), productsController.store);

//* EDITAR PRODUCTO CON FOTO MULTER *//
router.get("/editar-producto/:id", productsController.editarProducto)
router.put ("/editar-producto/:id", uploadFile.single('cImage'), productsController.actualizarProducto)






module.exports = router;