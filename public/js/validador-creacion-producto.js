
let formulario = document.getElementById("creacion-producto");
let campoNombre = document.getElementById("nombre");
let precio = document.getElementById("price");
let descuento = document.getElementById("discount");
let categoria = document.getElementById("category");
let creador = document.getElementById("creator");
//let fechaCreacion = document.getElementById("fecha");
//let date = new Date();
//let outPut = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
//console.log(outPut)
let descripcion = document.getElementById("description");
let fileInput = document.getElementById('cImage');

formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    let warnings = ""
    let entrar = false
    if (campoNombre.value.length < 3) {
        warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i> El nombre debe tener mas de 2 caracteres.</div>'
        entrar = true
    }
    if (campoNombre.value =="") {
        warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i> Debe completar el nombre.</div>'
        entrar = true
    }


    if (precio.value <= 0) {
        warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i> El precio debe ser mayor a $0.</div>'
        entrar = true
    }
    if (precio.value == "") {
        warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i> Debe completar el campo precio.</div>'
        entrar = true
    }

    if (descuento.value.length == 100) {
        warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i> Ingrese un descuento valido.</div>'
        entrar = true
    }
    if (descuento.value =="") {
        warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i> Debe completar el campo descuento.</div>'
        entrar = true
    }

    if (categoria.value.length == 'Elegí') {
        warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i> Ingrese una categoría válida.</div>'
        entrar = true
    }
    if (categoria.value =="") {
        warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i> Debe ingresar una categoría.</div>'
        entrar = true
    }

    if (creador.value.length == 'Elegí') {
        warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i> Ingrese un creador válido.</div>'
        entrar = true
    }
    if (creador.value =="") {
        warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i> Debe ingresar un creador.</div>'
        entrar = true
    }

    //if (fechaCreacion.value !== outPut.value) {
      //  warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i> Ingrese la fecha de hoy.</div>'
       // entrar = true
   // }
    

    if (descripcion.value.length <= 0) {
        warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i> Ingrese una descripción.</div>'
        entrar = true
    }
    if (descripcion.value =="") {
        warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i> Debe ingresar una descripción.</div>'
        entrar = true
    }




        var allowedExtensions = /(.jpg|.jpeg)$/i;
        if (!allowedExtensions.exec(fileInput.value)) {
            warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i>Asegurese que la imgen sea una extension valida. (.jpg|.jpeg)</div>'
            entrar = true
            fileInput.value = '';
            
        }

        if (entrar) {
            error.innerHTML = warnings
        } else {
            formulario.submit();
        }
    })