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
    var x = document.getElementById("Password");
    if (x.type === "Password") {
      x.type = "text";
    } else {
      x.type = "Password";
    }
  }

  function mostrarPassword2() {
    var x = document.getElementById("password2");
    if (x.type === "Password") {
      x.type = "text";
    } else {
      x.type = "Password";
    }
}


window.addEventListener("load", function(){
  let formulario = document.querySelector("#formulario-registro");
  let campoNombre = document.querySelector("#nombre");
  console.log(campoNombre)

  console.log(formulario)

campoNombre.addEventListener("blur", function(){
  if(campoNombre.value == ""){
      alert("El campo de nombre debe estar completo")
  }
})

  formulario.addEventListener("submit", function(e){
      e.preventDefault();

      let campoNombre = document.querySelector("#nombre");
console.log(campoNombre)

      if(campoNombre.value == ""){
          alert("El campo de nombre debe estar completo")
      }

      else if(campoNombre.value.length < 4){
          alert("El campo de nombre debe tener al menos 4 caracteres")
      }


  })

})

//eventos//
password.onchange= validarContrasena

confirmaContrasena.onkeyup= validarContrasena


