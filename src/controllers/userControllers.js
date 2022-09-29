const path = require('path');

const controladorUsers = 
{
       iniciarSesion: (req, res) => {
                res.render('./users/login');
        },   

        registrarse: (req, res) => {
                res.render("./users/registro");
        },

        perfil: (req, res) => {
                res.render('./users/perfil');
        },
}

module.exports = controladorUsers;