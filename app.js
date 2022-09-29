const mainRoutes = require('./src/routes/mainRoutes');
const usersRouters = require('./src/routes/userRoutes');
const productsRouters = require('./src/routes/productsRoutes');

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, './public')));
app.use(express.static(__dirname +'/views'));


app.use('/', mainRoutes); // se concatenan las rutas del primer y segundo parámetro 

app.use('/users', usersRouters);

app.use('/products', productsRouters);



app.use('*', function(req, res) {
    res.send("Error de acceso, esta ruta no existe en el sitio")
});

app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, '/src/views'));


// app.set('views', path.join(__dirname, '/src/views/partials/'))
 const PORT = process.env.PORT || 3100                /* Codigo para Heroku Variable */
 app.listen(PORT, function() {                                   /* Codigo para Heroku*/
    console.log("Levantando un servidor con Express", PORT);
}) 


const methodOverride = require('method-override');  // para usar put y delete
app.use(methodOverride('_method'));                 // para usar put y delete