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
        const productsFilePath = path.join(__dirname, '../database/productosDataBase.json');    // leemos el json y la guardamos en productFilesPath
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));                // parseamos el json y lo guardamos en products
        let soloWhiskies = products.filter((prod) => prod.category == 'Whiskies')               // filtramos products solo wiskies y la guardamos en soloWhiskies
        console.log(soloWhiskies)
        res.render('./products/whiskies', {soloWhiskies: soloWhiskies});                        // mandamos a la vista whiskies solo los whiskies.
    },

    vinos: (req, res) => {
        const productsFilePath = path.join(__dirname, '../database/productosDataBase.json');
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let soloVinos = products.filter((prod) => prod.category == 'Vinos')
        console.log(soloVinos)
        res.render('./products/vinos', {soloVinos: soloVinos});
    },

    espumantes: (req, res) => {
        const productsFilePath = path.join(__dirname, '../database/productosDataBase.json');
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let soloEspumantes = products.filter((prod) => prod.category == 'Espumantes')
        console.log(soloEspumantes)
        res.render('./products/espumantes', {soloEspumantes: soloEspumantes});
    },

    gin: (req, res) => {
        const productsFilePath = path.join(__dirname, '../database/productosDataBase.json');
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let soloGin = products.filter((prod) => prod.category == 'gin')
        console.log(soloGin)
        res.render('./products/gin', {soloGin: soloGin});
    },

    licores: (req, res) => {
        const productsFilePath = path.join(__dirname, '../database/productosDataBase.json');
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let soloLicores = products.filter((prod) => prod.category == 'Licores')
        console.log(soloLicores)
        res.render('./products/licores', {soloLicores: soloLicores});
    },

    vodka: (req, res) => {
        const productsFilePath = path.join(__dirname, '../database/productosDataBase.json');
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let soloVodka = products.filter((prod) => prod.category == 'Vodka')
        console.log(soloVodka)
        res.render('./products/vodka', {soloVodka: soloVodka});
    },

    ron: (req, res) => {
        const productsFilePath = path.join(__dirname, '../database/productosDataBase.json');
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let soloRon = products.filter((prod) => prod.category == 'Ron')
        console.log(soloRon)
        res.render('./products/ron', {soloRon: soloRon});
    },

    aperitivos: (req, res) => {
        const productsFilePath = path.join(__dirname, '../database/productosDataBase.json');
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let soloAperitivos = products.filter((prod) => prod.category == 'Aperitivos')
        console.log(soloAperitivos)
        res.render('./products/aperitivos', {soloAperitivos: soloAperitivos});
    },

    cervezas: (req, res) => {
         const productsFilePath = path.join(__dirname, '../database/productosDataBase.json');
         const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let soloCervezas = products.filter((prod) => prod.category == 'Cervezas')
        console.log(soloCervezas)
        res.render('./products/cervezas', {soloCervezas: soloCervezas});
    },

    accesorios: (req, res) => {
        const productsFilePath = path.join(__dirname, '../database/productosDataBase.json');
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let soloAccesorios = products.filter((prod) => prod.category == 'Accesorios')
        console.log(soloAccesorios)
        res.render('./products/accesorios', {soloAccesorios: soloAccesorios});
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