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
        res.render('./products/whiskies', {obj_literal_products: obj_literal_products});
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





};

module.exports = controladorProductos;