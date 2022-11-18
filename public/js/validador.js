

const password= document.getElementById("password")

const confirmaContrasena= document.getElementById("password2")

//funciones//

function validarContrasena(){
    if (password.value == confirmaContrasena.value){
        confirmaContrasena.setCustomValidity("")

    } else {
        confirmaContrasena.setCustomValidity("La Contraseña No Coinciden")
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


