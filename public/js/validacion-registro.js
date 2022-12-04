let formulario = document.getElementById("formulario-registro");
let campoNombre = document.getElementById("Nombre");
let email = document.getElementById("Email");
let apellido = document.getElementById("apellido");
let fileInput = document.getElementById('Imagen');

formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    let warnings = ""
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let entrar = false
    if (campoNombre.value.length < 3) {
        warnings += '<div class="errreg" >* El nombre debe tener mas de 2 caracteres.</div>'
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
        var allowedExtensions = /(.jpg|.jpeg)$/i;
        if (!allowedExtensions.exec(fileInput.value = 1)) {
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
