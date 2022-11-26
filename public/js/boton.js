const db = {};



function ordenar() {
    products.productos.findAll().then((products) =>{
        let productosOrdenados = products;
})
var btn = document.getElementById("ordenar")
btn.addEventListener("click", ()=>{
    products.sort(function (a, b){
        if (a.precio > b.precio) {
            return 1;
        }
        if (a.precio < b.precio) {
            return -1;
        }
        // a must be equal to b
        return 0; 
    });
    })
        db.productos.findAll().then((products) =>{
          let productosOrdenados = products;
          if (req.query.orden == 0) {
            productosOrdenados = products.sort((a,b) => a.precio - b.precio);
          } else if (req.query.orden == 1) {
            productosOrdenados = products.sort((a,b) => b.precio - a.precio);
          }
        });
             
    }