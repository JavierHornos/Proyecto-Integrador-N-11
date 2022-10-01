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

     crear: (req, res) => {
        res.render("./products/creacion-producto");
},


     editarProducto: (req, res) => {
        res.render("products/administracion-producto");
},



   productosTodos: (req, res) => {
    let products_json = fs.readFileSync('./src/database/productosDataBase.json');
    let obj_literal_products = JSON.parse(products_json);
   res.render('./products/productos-todos', {obj_literal_products: obj_literal_products});
            
},





};

module.exports = controladorProductos;