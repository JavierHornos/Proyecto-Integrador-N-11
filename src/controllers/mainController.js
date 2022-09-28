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

    carrito: (req, res) => {
        res.render("carrito");
    },

    carritocargado: (req, res) => {
        res.render("carrito-cargado");
    },

    login: (req, res) => {
        res.render(__dirname + "/../views/users/login");
    },

    producto: (req, res) => {
        res.render(__dirname + "/../views/products/producto");
    },

    productosTodos: (req, res) => {
        let products_json = fs.readFileSync('./src/database/productosDataBase.json');
        let obj_literal_products = JSON.parse(products_json);
       res.render(__dirname + "/../views/products/productos-todos", {obj_literal_products: obj_literal_products});
        
        
        
    },


    registro: (req, res) => {
        res.render(__dirname + "/../views/users/registro");
    },

    perfil: (req, res) => {
        res.render(__dirname + "/../views/users/perfil");
    },

    whiskies: (req, res) => {
        let products_json = fs.readFileSync('./src/database/productosDataBase.json');
        let obj_literal_products = JSON.parse(products_json);                  
        res.render(__dirname + "/../views/products/whiskies", {obj_literal_products: obj_literal_products});
    },

    editarProducto: (req, res) => {
        res.render(__dirname + "/../views/products/administracion-producto");
    },

    crear: (req, res) => {
		res.render(__dirname + "/../views/products/creacion-producto");
	},

    /*head: (req , res) =>{
        res.send("head");
    },

    header: (req , res) =>{
        res.send("header");
    },*/
}


module.exports = controlador;