const path = require('path');

const controlador = {
    home: (req, res) => {
        res.render('home');
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

    registro: (req, res) => {
        res.render(__dirname + "/../views/users/registro");
    },

    whiskies: (req, res) => {
        res.render(__dirname + "/../views/products/whiskies");
    },

    editarProducto: (req, res) => {
        res.render(__dirname + "/../views/products/editar-producto");
    }

    /*head: (req , res) =>{
        res.send("head");
    },

    header: (req , res) =>{
        res.send("header");
    },*/
}


module.exports = controlador;