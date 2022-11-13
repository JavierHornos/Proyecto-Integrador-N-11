const mainRoutes = require('./src/routes/mainRoutes');
const usersRouters = require('./src/routes/userRoutes');
const productsRouters = require('./src/routes/productsRoutes');
const methodOverride =  require('method-override');              // Pasar poder usar los métodos PUT y DELETE
const express = require('express');                            
const path = require('path');                                   
const app = express();
const session = require('express-session');                     // express-session
const cookieParser = require('cookie-parser');                  //cookie parser

 


app.use(express.static(path.resolve(__dirname, './public')));
app.use(express.static(__dirname +'/views'));

// ************ Middlewares - (don't touch) ************
app.use(express.static(path.join(__dirname, '../public')));  // Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false }));  // necesario para recibir la info que viaja en un formulario
app.use(express.json());
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(cookieParser());
/// app.use(session({secret: 'Secreto'}));  //express-session a nivel apliacion, para todas las paginas
//app.use(session({
//    secret:'secreto',
//    resave: true,
//    saveUninitialized: true
//}));

app.use(session({
    cookie:{
        secure: true,
        maxAge:60000
           },
    store: new RedisStore(),
    secret: 'secret',
    saveUninitialized: true,
    resave: false
    }));
    
    app.use(function(req,res,next){
    if(!req.session){
        return next(new Error('Oh no')) //handle error
    }
    next() //otherwise continue
    });



app.use('/', mainRoutes); // se concatenan las rutas del primer y segundo parámetro 

app.use('/users', usersRouters);

app.use('/products', productsRouters);




app.use('*', function(req, res) {
    res.render("./error-404")
});

app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, '/src/views'));


// app.set('views', path.join(__dirname, '/src/views/partials/'))
 const PORT = process.env.PORT || 3100                /* Codigo para Heroku Variable */
 app.listen(PORT, function() {                                   /* Codigo para Heroku*/
    console.log("Levantando un servidor con Express", PORT);
})