const path = require('path');

const controlador = {
    home:(req, res) => {
        res.render('home');
    },

    carrito: (req , res) =>{
        res.render("carrito");
    },

    carritocargado: (req , res) =>{
        res.render("carrito-cargado");
    },
    
    login: (req , res) =>{
        res.render("login");
    },
    
    producto: (req , res) =>{
        res.render("producto");
    },
    
    registro: (req , res) =>{
        res.render("registro");
    },
    
    whiskies: (req , res) =>{
        res.render("whiskies");
    },

    /*head: (req , res) =>{
        res.send("head");
    },

    header: (req , res) =>{
        res.send("header");
    },*/
}


module.exports= controlador;