function moviesData(sequelize, Datatypes){

    let a = 'movies';
  
    let b = {
      id: {type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
      created_at: {type: Datatypes.DATE},
      updated_at: {type: Datatypes.DATE},
      title: {type: Datatypes.STRING(500)},
      rating: {type: Datatypes.FLOAT},
      awards: { type: Datatypes.INTEGER},
      release_date: {type: Datatypes.DATE},
      length: {type: Datatypes.INTEGER}
    }
  
    let c = {camelCase: false, timestamps: false}; 
  
    const películas = sequelize.define(a,b,c)
  
    return películas;
  }
  
  
  module.exports = moviesData;