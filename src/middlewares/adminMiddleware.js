function adminMiddleware (req, res, next) {
    if (req.session.usuarioLogueado != undefined) {
        next();
    }
    res.send('Esta página es solo para Administradores');
}

module.exports = adminMiddleware;