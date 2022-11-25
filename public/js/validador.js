

const password= document.getElementById("password")

const confirmaContrasena= document.getElementById("password2")

//funciones//

function validarContrasena(){
    if (password.value == confirmaContrasena.value){
        confirmaContrasena.setCustomValidity("")

    } else {
        confirmaContrasena.setCustomValidity("Las Contraseñas No Coinciden")
    }
}

function mostrarPassword1() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  function mostrarPassword2() {
    var x = document.getElementById("password2");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}

db.productos.findAll().then((products) =>{
  let productosOrdenados = products;
  if (req.query.orden == 0) {
    productosOrdenados = products.sort((a,b) => a.precio - b.precio);
  } else if (req.query.orden == 1) {
    productosOrdenados = products.sort((a,b) => b.precio - a.precio);
  }
})

//eventos//
password.onchange= validarContrasena

confirmaContrasena.onkeyup= validarContrasena


