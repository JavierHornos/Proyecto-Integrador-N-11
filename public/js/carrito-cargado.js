let nombre = document.getElementById("nombre");
// console.log(nombre)
let precio = document.getElementById("precio");
// console.log(precio)
let cantidad = document.getElementById("cantidad");
//console.log(cantidad)
let total = document.getElementById("total");
// console.log(total)


if (localStorage.carrito) {
    let carrito = JSON.parse(localStorage.carrito);
    //console.log(carrito)

   
   carrito.forEach(e => {
    let div = document.createElement("div")
    div.innerHTML = e.nombre
    nombre.appendChild(div)
   })


   carrito.forEach(e => {
    let div = document.createElement("div")
    div.innerHTML = e.precio  
    precio.appendChild(div)
   })

   carrito.forEach(e => {
    let div = document.createElement("div")
    div.innerHTML = e.Cantidad
    cantidad.appendChild(div)
   })

   carrito.forEach(e => {
    let div = document.createElement("div")
    div.innerHTML = e.Cantidad * e.precio
    total.appendChild(div)
   })


     

     
   
}