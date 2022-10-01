const path = require('path');
let fs = require('fs');

let user_json = fs.readFileSync('./src/database/usuariosDataBase.json');
let obj_literal_users = JSON.parse(user_json);
//console.log(obj_literal_users);

let products_json = fs.readFileSync('./src/database/productosDataBase.json');
let obj_literal_products = JSON.parse(products_json);
//console.log(obj_literal_products);





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

    crear: (req, res) => {
        res.render("./products/creacion-producto");
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