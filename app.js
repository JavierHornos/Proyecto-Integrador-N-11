const express = require("express")
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, './public')));

app.use(express.static(__dirname +'/views'));

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

app.listen(3100, function() {
    console.log("Levantando un servidor con Express")
})