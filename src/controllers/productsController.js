let fs = require('fs-extra');
const path = require('path'); 
const cloudinary = require('cloudinary')





const db = require('../database/models');






const controladorProductos =
{   
    
    //* PRODUCTOS *//
    whiskies: async (req, res) => {

      await db.productos.findAll().then((listaProductos) =>{

         

	    let soloWhiskies = listaProductos.filter((prod) => prod.Categoria_FK  == 3);
		
      
		 	res.render('./products/whiskies',{soloWhiskies: soloWhiskies});

		});

    },


    vinos: (req, res) => {
     
        db.productos.findAll().then((listaProductos) =>{

			
        let soloVinos = listaProductos.filter((prod) => prod.Categoria_FK  == 1);
		
			console.log(soloVinos);

		 	res.render('./products/vinos',{soloVinos: soloVinos});

		});


        
    },


    espumantes: (req, res) => {
     
        db.productos.findAll().then((listaProductos) =>{

			
           let soloEspumantes = listaProductos.filter((prod) => prod.Categoria_FK  == 2);
			
			// console.log(soloEspumantes);

            res.render('./products/espumantes', {soloEspumantes: soloEspumantes});

		});

        
    },


    gin: (req, res) => {
     
        db.productos.findAll().then((listaProductos) =>{

	
           let soloGin = listaProductos.filter((prod) => prod.Categoria_FK  == 4);
		
			// console.log(soloGin);

            res.render('./products/gin', {soloGin: soloGin});

		});
        
    },


    licores: (req, res) => {
    
        db.productos.findAll().then((listaProductos) =>{

		
           let soloLicores = listaProductos.filter((prod) => prod.Categoria_FK  == 5);
			

			// console.log(soloLicores);

            res.render('./products/licores', {soloLicores: soloLicores});

		});
        
    },


    vodka: (req, res) => {
     

        db.productos.findAll().then((listaProductos) =>{

			
           let soloVodka = listaProductos.filter((prod) => prod.Categoria_FK  == 6);
			

			// console.log(soloVodka);

            res.render('./products/vodka', {soloVodka: soloVodka});

		});
        
    },


    ron: (req, res) => {
     

        db.productos.findAll().then((listaProductos) =>{

		
           let soloRon = listaProductos.filter((prod) => prod.Categoria_FK  == 7);
			

		// 	console.log(soloRon);

            res.render('./products/ron', {soloRon: soloRon});

		});
        
    },


    aperitivos: (req, res) => {
     

        db.productos.findAll().then((listaProductos) =>{

			
           let soloAperitivos = listaProductos.filter((prod) => prod.Categoria_FK  == 8);
		

			// console.log(soloAperitivos);

            res.render('./products/aperitivos', {soloAperitivos: soloAperitivos});

		});
        
    },


    cervezas: (req, res) => {
    
        db.productos.findAll().then((listaProductos) =>{

		
           let soloCervezas = listaProductos.filter((prod) => prod.Categoria_FK  == 9);
			
			// console.log(soloCervezas);

		 	res.render('./products/cervezas',{soloCervezas: soloCervezas});

		});

   
    },


    accesorios: (req, res) => {
 
        db.productos.findAll().then((listaProductos) =>{

	
           let soloAccesorios = listaProductos.filter((prod) => prod.Categoria_FK  == 10);
		

		//	console.log(soloAccesorios);

            res.render('./products/accesorios', {soloAccesorios: soloAccesorios});

		});
        
    },

     promociones: (req, res) => {
       
        db.productos.findAll().then((listaProductos) =>{

            let promociones = listaProductos.filter((prod) => prod.descuento > 10);
		
		      	res.render('./products/promociones',{Promociones: promociones});

		        });
       
      },



    productosTodos: (req, res) => {
     
          db.productos.findAll().then((products) =>{
                   
            res.render('./products/productos-todos', {products: products});
          });
               
      },

      productosTodosAdmin: (req, res) => {
      
             db.productos.findAll().then((products) =>{
       
            res.render('./products/productos-todos-admin', {products: products});
           });
        
               
      },  


    detalleProducto: (req, res) => {
        req.params.id
      
        db.productos.findAll().then((products) =>{
            let productoDetallado = products.filter((prod) => prod.id == req.params.id)[0]
       
            res.render("./products/detalle-producto", { productoDetallado: productoDetallado });
         });
        
        },  



    detalleProductoAdmin: (req, res) => {
        req.params.id
    
       db.productos.findAll().then((products) =>{
        let productoDetallado = products.filter((prod) => prod.id == req.params.id)[0]
   
        res.render("./products/detalle-producto-admin", { productoDetallado: productoDetallado });
     });

    
    },  

      

    //* CARRITO *//
    carrito: (req, res) => {
        res.render('./products/carrito',);
    },

    carritoCargado: (req, res) => {
        res.render("./products/carrito-cargado");
    },


    
    //* CREAR Y GUARDAR *//
    crear: (req, res) => {
        res.render("./products/creacion-producto");
    },

    store: async (req,res) => {
      let datos = req.body;
      console.log(datos)  
      const result = await cloudinary.v2.uploader.upload(req.file.path)
      db.productos.create({
            "nombre": datos.nombre,
            "precio": parseInt(datos.precio),
            "descuento": parseInt(datos.descuento),
            "descripcion": datos.descripcion,
            "imagen": result.url,
            "fecha_creacion": datos.fecha_creacion,
            "fecha_modificacion": null,
            "fecha_borrado": null,
            "Categoria_FK": datos.Categoria_FK,
            "creador_FK": datos.Creador_FK,
    
      });   

      await fs.unlink(req.file.path)
      res.redirect('../') ;
    },

    //* EDITAR Y ACTUALIZAR *//
    editarProducto: async (req, res) => {
     await db.productos.findByPk(req.params.id)
            .then(function(productoDetallado) {
              console.log(productoDetallado.imagen)
              res.render("products/editar-producto", { producto_detallado: productoDetallado });
            }) 

    },

    
    actualizarProducto: async (req, res) =>{
    const result = await cloudinary.v2.uploader.upload(req.file.path)
     await db.productos.findByPk(req.params.id)
             .then(function(productoDetallado) {
              
              nombreImagenAntigua = productoDetallado.imagen

             // console.log(nombreImagenAntigua)

             

             db.productos.update({
              
              "nombre": req.body.nombre,
               "precio": parseInt(req.body.precio),
               "descuento": parseInt(req.body.descuento),
               "descripcion": req.body.descripcion,
               "imagen": result.url,
               "fecha_creacion": null,
               "fecha_modificacion": req.body.fecha_modificacion,
               "fecha_borrado": null,
               "Categoria_FK": req.body.Categoria_FK,
               "creador_FK": req.body.Creador_FK,
       
         },{
             where: {
             id: req.params.id
           }    
             
          
      
      // fs.unlinkSync(__dirname+'/../../public/imagenes/productos/'+nombreImagenAntigua, (error) =>{
      //   if (error) {
      //           console.log(error.message);
      //   }})

      
      }) 

    
     
   });
    // await fs.unlink(req.file.path)
      res.redirect ('../../users/login') 
		
    },
        
    


   //* BORRAR *//

    borrarProducto: (req, res) => {

      db.productos.findByPk(req.params.id)
      .then(function(productoDetallado) {
        
        nombreImagenAntigua = productoDetallado.imagen

        console.log(nombreImagenAntigua)
      
      
 
         db.productos.destroy({
            where: {
              id: req.params.id
            }
          })


          // fs.unlinkSync(__dirname+'/../../public/imagenes/productos/'+nombreImagenAntigua, (error) =>{
          //   if (error) {
          //           console.log(error.message);
          //   }})
    

        });


        
          
          res.redirect ('../../users/login') 

             
    },
        
      

    



};

module.exports = controladorProductos;