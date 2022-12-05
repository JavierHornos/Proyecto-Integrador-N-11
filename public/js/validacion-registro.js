let formulario = document.getElementById("formulario-registro");
let campoNombre = document.getElementById("Nombre");
let email = document.getElementById("Email");
let apellido = document.getElementById("apellido");
let fileInput = document.getElementById('Imagen');

formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    let warnings = ""
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    let entrar = false
    if (campoNombre.value.length < 3) {
        warnings += '<div class="errreg" >* El nombre debe tener mas de 2 caracteres.</div>'
        entrar = true
    }
    if (campoNombre.value =="") {
        warnings += '<div class="errreg" >* Debe completar el nombre.</div>'
        entrar = true
    }
    if (!regexEmail.test(Email.value)) {
        warnings += '<div class="errreg" >* El Email no es valido.</div>'
        entrar = true
    }

    if (password.value.length < 8) {
        warnings += '<div class="errreg" >* La contraseña debe tener al menos 8 caracteres.</div>'
        entrar = true
    }

    if (apellido.value.length < 3) {
        warnings += '<div class="errreg" >* El apellido debe tener mas de 2 caracteres.</div>'
        entrar = true
    }
    if (apellido.value == "") {
        warnings += '<div class="errreg" >* Debe completar el apellido.</div>'
        entrar = true
    }

    if (domicilio.value.length < 3) {
        warnings += '<div class="errreg" >* Ingrese un domicilio valido.</div>'
        entrar = true
    }
    if (domicilio.value =="") {
        warnings += '<div class="errreg" >* Debe completar el domicilio.</div>'
        entrar = true
    }
        var allowedExtensions = /(.jpg|.jpeg)$/i;
        if (!allowedExtensions.exec(fileInput.value)) {
            warnings += '<div class="errreg" >* Asegurese que la imgen sea una extension valida. (.jpg|.jpeg)</div>';
            entrar = true
            fileInput.value = '';
            
        }

        if (entrar) {
            error.innerHTML = warnings
        } else {
            formulario.submit();
        }
    })
