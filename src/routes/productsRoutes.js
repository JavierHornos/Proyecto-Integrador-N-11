const productsController = require('./../controllers/productsController')

const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');   // multer

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


//* CREAR PRODUCTO *//

router.get ("/crear", productsController.crear);

router.post ("/crear", uploadFile.single('cImage') ,productsController.store);


module.exports = router;