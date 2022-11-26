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


//eventos//
password.onchange= validarContrasena

confirmaContrasena.onkeyup= validarContrasena

var btn = document.getElementById("ordenar")

btn.addEventListener("click ", ()=>{
  productosOrdenados.sort(function (a, b){
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


