const fs = require('fs')
const express = require('express');
const app = express();


function logMiddleware (req, res, next) {
        fs.appendFileSync('log.txt', 'se ingresó en la pagina' + req.url)

        next()

}

module.exports = logMiddleware


  