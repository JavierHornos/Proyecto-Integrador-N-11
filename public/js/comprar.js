window.addEventListener("load", function () {
  let botonComprar = document.getElementById("al-carrito");
  //console.log(botonComprar)
 

  botonComprar.addEventListener("click", function (e) {
   // console.log(e.target.dataset.id, e.target.dataset.nombre, e.target.dataset.precio, e.target.dataset.imagen)
    if (localStorage.carrito) {
      //si hay carrito veremos que hacemos
      let carrito = JSON.parse(localStorage.carrito);
      // console.log(carrito)
    

      let index = carrito.findIndex((prod) => prod.id == e.target.dataset.id);
      //console.log(index);
      if (index != -1) {
        carrito[index].Cantidad++               // si esta en el carrito le sumo 1

      } else {
        carrito.push({ id: e.target.dataset.id, nombre: e.target.dataset.nombre, precio: e.target.dataset.precio, imagen: e.target.dataset.imagen, Cantidad: 1 })    
      }
      localStorage.setItem('carrito',JSON.stringify(carrito));    
      
      
    } else {
      localStorage.setItem(
        "carrito",
        JSON.stringify([{ id: e.target.dataset.id, nombre: e.target.dataset.nombre, precio: e.target.dataset.precio, imagen: e.target.dataset.imagen, Cantidad: 1 }]) //sino lo agrego con push
      );
    }

    return Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se ha agregado un producto',
        showConfirmButton: false,
        timer: 1500
      })



  });
});
