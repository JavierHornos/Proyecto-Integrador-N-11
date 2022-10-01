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
    
    

    editarProducto: (req, res) => {
        res.render("products/administracion-producto");
    },

    

}


module.exports = controlador;