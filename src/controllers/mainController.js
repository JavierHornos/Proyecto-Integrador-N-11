const path = require('path');
let fs = require('fs');


let user_json = fs.readFileSync('./src/database/usuariosDataBase.json');
let obj_literal_users = JSON.parse(user_json);
//console.log(obj_literal_users);

let products_json = fs.readFileSync('./src/database/productosDataBase.json');
let obj_literal_products = JSON.parse(products_json);
 //console.log(obj_literal_products);


const controlador = {
    home: (req, res) => {
        res.render('home');
    },

    home2: (req, res) => {
        res.render('home2');
    },
    
    
    carritocargado: (req, res) => {
        res.render("carrito-cargado");
    },

    producto: (req, res) => {
        res.render(__dirname + "/../views/products/producto");
    },

   
    editarProducto: (req, res) => {
        res.render(__dirname + "/../views/products/administracion-producto");
    },

    crear: (req, res) => {
		res.render(__dirname + "/../views/products/creacion-producto");
	},

}


module.exports = controlador;