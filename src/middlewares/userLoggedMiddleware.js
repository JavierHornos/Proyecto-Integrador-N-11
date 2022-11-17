const db = require('../database/models');

function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;

    

    if (req.session.userLogged) {
        res.locals.isLogged = true;
        

    }


    let emailInCookie = req.cookies.recordame;
    db.usuarios.findAll().then((listaProductos) =>{
    let userFromCookie = listaProductos.filter((prod) => prod.Email ==  emailInCookie);
    
        
        
    });

    next();

}

module.exports = userLoggedMiddleware