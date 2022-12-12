function categorias (sequelize, Datatypes){

    let a = 'categorias';
  
    let b = {
      id: {type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
      nombre: {type: Datatypes.STRING(50)},
      

    }
  
    let c = {camelCase: false, timestamps: false}; 
  
    const categorias = sequelize.define(a,b,c)
  
    return categorias;
  }
  
  
  module.exports = categorias;