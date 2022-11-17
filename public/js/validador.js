alert ("saludos desde el front-end!");

const password= document.getElementById("password")

const confirmaContrasena= document.getElementById("comfirm_password")

function validarContrasena(){
    if (password.value == confirmaContrasena.value){
        confirmaContrasena.setCustomValidity("")

    } else {
        confirmaContrasena.setCustomValidity("La Contraseña No Coinciden")
    }
}

password.onchange= validarContrasena

confirmaContrasena.onkeyup= validarContrasena