const path = require('path');

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
        res.render(__dirname + "/../views/products/productos-todos");
    },

    registro: (req, res) => {
        res.render(__dirname + "/../views/users/registro");
    },

    whiskies: (req, res) => {
        res.render(__dirname + "/../views/products/whiskies");
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