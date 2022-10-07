const fs = require('fs')
const express = require('express');
const app = express();


function logMiddleware (req, res, next) {
        fs.appendFileSync('log.txt', 'se ingresó en la pagina' + req.url)

        next()

}

module.exports = logMiddleware


app.get('/user/:id', function (req, res, next) {
    // if the user ID is 0, skip to the next route
    if (req.params.id == 0) next('route');
    // otherwise pass the control to the next middleware function in this stack
    else next(); //
  }, function (req, res, next) {
    // render a regular page
    res.render('regular');
  });

  