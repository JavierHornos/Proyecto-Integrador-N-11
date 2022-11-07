const path = require('path');
let fs = require('fs');
const nodemailer = require('nodemailer')


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
        const productsFilePath = path.join(__dirname, '../database/productosDataBase.json');
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render('home-admin', {products: products} );
    },

    contacto: (req, res) => {
        res.render('contacto');
    },

    enviando: (req, res) => {
             
        console.log(req.body)
        const { de, email, asunto, contenido } = req.body;

        contentHTML = `
            <h1> Información de Contacto</h1>
            <ul>
                <li>De: ${de}</li>
                <li>Email: ${email}</li>
                <li>Asunto: ${asunto}</li>
            </ul>
            <p>Contenido: ${contenido}</p>
        `;
        console.log(contentHTML)

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'DigitalDrinks.com@gmail.com',
                pass: "etoenddlsetcjtaa",
            },
        });

        const info = transporter.sendMail({
            from: "'DigitalDrinks.com@gmail.com'",
            to: "hjavih@gmail.com, Franciscovalenza@gmail.com, Lucasvallone@gmail.com, lauranunez1412@gmail.com",
            subject: 'Contacto de Digital Drinks',
            html: contentHTML

        });

        
        const productsFilePath = path.join(__dirname, '../database/productosDataBase.json');
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render('home', {products: products}) ;
        
                
    }



}




module.exports = controlador;