function usuarios (sequelize, Datatypes){

    let a = 'usuario';

    let b = {
      Id: {type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
      Nombre: {type: Datatypes.STRING(50)},
      Apellido: {type: Datatypes.STRING(50)},
      Email: {type: Datatypes.STRING(50)},
      Password: {type: Datatypes.STRING(150)},
      "Dirección": {type: Datatypes.STRING(150)},
      Imagen: {type: Datatypes.STRING(150)},
      Administrador: {type: Datatypes.INTEGER},
      Local_FK: {type: Datatypes.INTEGER},
    }
  
    let c = {camelCase: false, timestamps: false}; 
  
    const usuarios = sequelize.define(a,b,c)
  
    return usuarios;
  }
  
  
  module.exports = usuarios;