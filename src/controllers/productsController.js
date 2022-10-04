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
        const productsFilePath = path.join(__dirname, '../database/productosDataBase.json');
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render('./products/whiskies', {products: products});
    },

    vinos: (req, res) => {
        const productsFilePath = path.join(__dirname, '../database/productosDataBase.json');
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render('./products/vinos', {products: products});
    },

    espumantes: (req, res) => {
        const productsFilePath = path.join(__dirname, '../database/productosDataBase.json');
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render('./products/espumantes', {products: products});
    },

    gin: (req, res) => {
        const productsFilePath = path.join(__dirname, '../database/productosDataBase.json');
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render('./products/gin', {products: products});
    },

    licores: (req, res) => {
        const productsFilePath = path.join(__dirname, '../database/productosDataBase.json');
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render('./products/licores', {products: products});
    },

    vodka: (req, res) => {
        const productsFilePath = path.join(__dirname, '../database/productosDataBase.json');
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render('./products/vodka', {products: products});
    },

    ron: (req, res) => {
        const productsFilePath = path.join(__dirname, '../database/productosDataBase.json');
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render('./products/ron', {products: products});
    },

    aperitivos: (req, res) => {
        const productsFilePath = path.join(__dirname, '../database/productosDataBase.json');
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render('./products/aperitivos', {products: products});
    },

    cervezas: (req, res) => {
        const productsFilePath = path.join(__dirname, '../database/productosDataBase.json');
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render('./products/cervezas', {products: products});
    },

    accesorios: (req, res) => {
        const productsFilePath = path.join(__dirname, '../database/productosDataBase.json');
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render('./products/accesorios', {products: products});
    },

    carrito: (req, res) => {
        res.render('./products/carrito');
    },

    carritoCargado: (req, res) => {
        res.render("./products/carrito-cargado");
    },

    producto: (req, res) => {
        res.render("./products/producto");
    },

    detalleProducto: (req, res) => {
    req.params.id
    let products_json = fs.readFileSync('./src/database/productosDataBase.json');
    let lista_de_objetos_literales_productos = JSON.parse(products_json);
    let productoDetallado = lista_de_objetos_literales_productos.filter((prod) => prod.id == req.params.id)[0]
    console.log(productoDetallado)
    res.render("./products/detalle-producto", { productoDetallado: productoDetallado }); 
    },
           
    
    productosTodos: (req, res) => {
     const productsFilePath = path.join(__dirname, '../database/productosDataBase.json');
     const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
     res.render('./products/productos-todos', {products: products});
            
   },

    

    crear: (req, res) => {
        res.render("./products/creacion-producto");
    },

    store: (req,res) => {
        let datos = req.body;
        let idNuevoProducto = (products[products.length-1].id)+1;

		let nuevoProducto ={
            "id": idNuevoProducto,
            "name": datos.name,
            "price": parseInt(datos.price),
            "discount": parseInt(datos.discount),
            "category": datos.category,
            "description": datos.description,
            "bebida": datos.bebida,
            "image": req.file.filename
        };
    
        products.push(nuevoProducto);
        fs.writeFileSync(productsFilePath,JSON.stringify(products, null, " "),'utf-8');
        res.redirect ('/products/crear') 
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