function RealAdmin (req, res, next) {
    let user = req.session.userLogged
    admin = user[0].Administrador
    console.log(admin)
    if (admin == 0) {
       res.send('No eres administrador') // return res.redirect('/users/login')   
    } else 
           next();
    

           
}

module.exports = RealAdmin;