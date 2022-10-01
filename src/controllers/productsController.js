const path = require('path');
let fs = require('fs');

let user_json = fs.readFileSync('./src/database/usuariosDataBase.json');
let obj_literal_users = JSON.parse(user_json);
//console.log(obj_literal_users);

let products_json = fs.readFileSync('./src/database/productosDataBase.json');
let obj_literal_products = JSON.parse(products_json);
 //console.log(obj_literal_products);
 const productsFilePath = path.join(__dirname, '../database/productosDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



const controladorProductos =
{
    whiskies: (req, res) => {
        let products_json = fs.readFileSync('./src/database/productosDataBase.json');
        let obj_literal_products = JSON.parse(products_json);
        res.render('./products/whiskies', { obj_literal_products: obj_literal_products });
    },

    carrito: (req, res) => {
        res.render('./products/carrito');
    },

    carritoCargado: (req, res) => {
        res.render("./products/carrito-cargado");
    },

    producto: (req, res) => {
        res.render("./products/producto1");
    },


    detalleProducto: (req, res) => {
        let products_json = fs.readFileSync('./src/database/productosDataBase.json');
        let lista_de_objetos_literales_productos = JSON.parse(products_json);
        let productoDetallado = lista_de_objetos_literales_productos.filter((prod) => prod.id == req.params.id)[0]
        res.render("./products/detalle-producto", { objeto_literal_producto_detallado: productoDetallado });
    },

   productosTodos: (req, res) => {
    let products_json = fs.readFileSync('./src/database/productosDataBase.json');
    let obj_literal_products = JSON.parse(products_json);
   res.render('./products/productos-todos', {obj_literal_products: obj_literal_products});
            
    },

    index:(req, res) => {
        res.render('productos-todos',{productos: productos-todos})
    },

    crear: (req, res) => {
        res.render("./products/creacion-producto");
    },

    store: (req,res) => {
        let datos = req.body;
		let idNuevoProducto = (products[products.length-1].id)+1;
		let imagenNuevoProducto = '../../imagenes/jack-daniels.png';

		let nuevoProducto ={
			"id": idNuevoProducto,
			"name": datos.name,
			"price": parseInt(datos.price),
			"discount": parseInt(datos.discount),
			"category": datos.category,
			"description": datos.description,
            "bebida": datos.bebida,
			"image": imagenNuevoProducto
		};

		products.push(nuevoProducto);
		fs.writeFileSync(productsFilePath,JSON.stringify(products, null, " "),'utf-8');
        res.redirect ('/products/crear')
    },


    editarProducto: (req, res) => {
        let products_json = fs.readFileSync('./src/database/productosDataBase.json');
        let lista_de_objetos_literales_productos = JSON.parse(products_json);
        let productoDetallado = lista_de_objetos_literales_productos.filter((prod) => prod.id == req.params.id)[0]

        res.render("products/editar-producto", { producto_detallado: productoDetallado });
    },

    actualizarProducto: (req, res) =>{
		let idProducto = req.params.id;
		let datosProducto = req.body;
        let products_json = fs.readFileSync('./src/database/productosDataBase.json');
        let lista_de_objetos_literales_productos = JSON.parse(products_json);

		for (let objeto_producto of lista_de_objetos_literales_productos){
			if (objeto_producto.id==idProducto){
				objeto_producto.name = datosProducto.name;
				objeto_producto.price = parseInt(datosProducto.price);
				objeto_producto.discount = parseInt(datosProducto.discount);
				objeto_producto.category = datosProducto.category;
				objeto_producto.description = datosProducto.description;
				break;
			}
		}

		fs.writeFileSync('./src/database/productosDataBase.json', JSON.stringify(lista_de_objetos_literales_productos, null, " "), 'utf-8');
		res.redirect('/');
    },

    productosTodos: (req, res) => {
        let products_json = fs.readFileSync('./src/database/productosDataBase.json');
        let obj_literal_products = JSON.parse(products_json);
        res.render('./products/productos-todos', { obj_literal_products: obj_literal_products });

    },

};

module.exports = controladorProductos;