const path = require('path');
let fs = require('fs');

let user_json = fs.readFileSync('./src/database/usuariosDataBase.json');
let obj_literal_users = JSON.parse(user_json);
// console.log(obj_literal_users);

const productsFilePath = path.join(__dirname, '../database/usuariosDataBase.json');
const users = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
// console.log(users);

 



const controladorUsers = 
{
       iniciarSesion: (req, res) => {
        let user_json = fs.readFileSync('./src/database/usuariosDataBase.json');
        let obj_literal_users = JSON.parse(user_json);
        
        




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