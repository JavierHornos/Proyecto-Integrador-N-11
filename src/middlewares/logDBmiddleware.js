const fs = require('fs')
const express = require('express');
const app = express();


function logDBMiddleware (req, res, next) {
        fs.appendFileSync('logDB.txt', 'se creó un registro al ingresar en la página' + req.url)        

        next()

}

module.exports = logDBMiddleware
