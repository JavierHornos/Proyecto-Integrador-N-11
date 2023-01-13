
let imagen = document.getElementById("imagen");
let nombre = document.getElementById("nombre");
let precio = document.getElementById("precio");
let cantidad = document.getElementById("cantidad");
let total = document.getElementById("total");
let total2 = document.getElementById("total2")
let botonBorrar = document.getElementById("botonBorrar")
let botonComprar = document.getElementById("botonComprar")




if (localStorage.carrito) {
    let carrito = JSON.parse(localStorage.carrito);

    carrito.forEach(e => {
     let div = document.createElement("div")
     div.style.borderTop = "gainsboro solid 3px"
     div.style.height = "50px"
     div.style.display = "flex"
     div.style.alignItems ="center"
     div.style.justifyContent ="center"
     e.imagen
     console.log(e.imagen)
     div.innerHTML = `<div class="columna1"><img src="${e.imagen}" class="jack-daniels" width= 40 height= 45 ></img></div>`
     imagen.appendChild(div)
   })
      

   carrito.forEach(e => {
    let div = document.createElement("div")
    div.style.borderTop = "gainsboro solid 3px"
    div.style.height = "50px"
    div.style.display = "flex"
    div.style.alignItems ="center"
    div.style.justifyContent ="center"
    div.innerHTML = e.nombre
    nombre.appendChild(div)
   })


   carrito.forEach(e => {
    let div = document.createElement("div")
    div.style.borderTop = "gainsboro solid 3px"
    div.style.height = "50px"
    div.style.display = "flex"
    div.style.alignItems ="center"
    div.style.justifyContent ="center"
    div.innerHTML = "$" + parseInt(e.precio)  
    precio.appendChild(div)
   })

   carrito.forEach(e => {
    let div = document.createElement("div")
    div.style.borderTop = "gainsboro solid 3px"
    div.style.height = "50px"
    div.style.display = "flex"
    div.style.alignItems ="center"
    div.style.justifyContent ="center"
    div.innerHTML = e.Cantidad
    cantidad.appendChild(div)
   })

   carrito.forEach(e => {
    let div = document.createElement("div")
    div.style.borderTop = "gainsboro solid 3px"
    div.style.height = "50px"
    div.style.display = "flex"
    div.style.alignItems ="center"
    div.style.justifyContent ="center"
    div.innerHTML = "$" + e.Cantidad * parseInt(e.precio)
    total.appendChild(div)
   })

 
let sumaTotal = carrito.reduce((acum, prod) => parseInt(acum) + parseInt(prod.precio) * prod.Cantidad, 0)
let div = document.createElement("div")
div.style.fontSize = "x-large"
div.innerHTML = "$" + parseInt(sumaTotal)
total2.appendChild(div)


botonBorrar.addEventListener("click", function (e) {
        localStorage.removeItem('carrito');
        location.reload()
        
    


});


     
   
}

