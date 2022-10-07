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
        const productsFilePath = path.join(__dirname, '../database/productosDataBase.json');
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render('home', {products: products}) ;
    },

    homeAdmin: (req, res) => {
        res.render('home-admin');
    },

}


module.exports = controlador;