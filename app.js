const express = require("express")
const path = require('path')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
const app = express()

app.use(express.static(path.join(__dirname, './public')));

//app.use(express.static(__dirname +'/views'));


const PORT = process.env.PORT || 3100                /* Codigo para Heroku Variable */

app.get('/', (req, res) => {
    res.send('ahora si entre')
})

app.get('/mostrar_home', (req, res) => {
    res.sendFile((__dirname + '/views/home.html'))
})

app.get('/mostrar_carrito', (req, res) => {
    res.sendFile((__dirname + '/views/carrito.html'))
})

app.get('/mostrar_login', (req, res) => {
    res.sendFile((__dirname + '/views/login.html'))
})

app.get('/mostrar_producto', (req, res) => {
    res.sendFile((__dirname + '/views/producto.html'))
})

app.get('/mostrar_registro', (req, res) => {
    res.sendFile((__dirname + '/views/registro.html'))
})

app.get('*', (req, res) => {
    res.send('ruta restringida ****')
})


/* app.listen(3100, function() {
    console.log("Levantando un servidor con Express")
}) */ 

app.listen(PORT, function() {                                   /* Codigo para Heroku*/
    console.log("Levantando un servidor con Express", PORT)
})
