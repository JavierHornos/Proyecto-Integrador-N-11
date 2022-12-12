let nombre = document.getElementById("nombre");
// console.log(nombre)
let precio = document.getElementById("precio");
// console.log(precio)
let cantidad = document.getElementById("cantidad");
//console.log(cantidad)
let total = document.getElementById("total");
// console.log(total)
let total2 = document.getElementById("total2")
let botonBorrar = document.getElementById("botonBorrar")



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

 
let sumaTotal = carrito.reduce((acum, prod) => acum + prod.precio * prod.Cantidad, 0)
let div = document.createElement("div")
div.innerHTML = sumaTotal
total2.appendChild(div)


botonBorrar.addEventListener("click", function (e) {
        localStorage.removeItem('carrito');
        location.reload()
        
    


});


     
   
}

