function productos (sequelize, Datatypes){

    let a = 'productos';
  
    let b = {
      id: {type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
      nombre: {type: Datatypes.STRING(50)},
      precio: {type: Datatypes.FLOAT(50)},
      descuento: {type: Datatypes.FLOAT(50)},
      descripcion: {type: Datatypes.STRING(150)},
      imagen: {type: Datatypes.STRING(50)},
      fecha_creacion: {type: Datatypes.DATE},
      fecha_modificacion: {type: Datatypes.DATE},
      fecha_borrado: {type: Datatypes.DATE},
      Categoria_FK: {type: Datatypes.INTEGER(50)},
      creador_FK: {type: Datatypes.INTEGER(50)},

    }
  
    let c = {camelCase: false, timestamps: false}; 
  
    const productos = sequelize.define(a,b,c)
  
    return productos;
  }
  
  
  module.exports = productos;