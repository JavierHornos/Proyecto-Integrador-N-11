  let formulario = document.querySelector("#formulario-registro");
  let campoNombre = document.querySelector("#Nombre");

  /*campoNombre.addEventListener("blur", function(){
    if(campoNombre.value == ""){
      errores.push("El campo de nombre debe estar completo")
    }
  }) */
  /*console.log(formulario)
  formulario.addEventListener("submit", function (e) {
   e.preventDefault(); 
    let errores = [];

    let campoNombre = document.querySelector("#Nombre");

    if (campoNombre.value == "") {
      alert("El campo de nombre debe estar completo");
      return;
    }

    else if (campoNombre.value.length < 4) {
      alert("El campo de nombre debe tener al menos 4 caracteres");
      
      return;
      
    }

    if (errores.length > 0) {
      
      let ulErrores = document.querySelector("div.errores ul");
      for (let i = 0; i < errores.length; i++)

        ulErrores.innerHTML += "<li>" + errores[i] + "</li>";


    }

    

  })*/
  formulario.addEventListener("submit", function(e){
  e.preventDefault();
  campoNombre.onblur = function() {
    if (campoNombre.value.length < 3) { 
      campoNombre.classList.add('invalid');
      error.innerHTML = '<div class="errreg" >El nombre tiene que ser mayor a 2 caracteres.</div>'
   
   
    }
  };
    campoNombre.onfocus = function() {
    if (this.classList.contains('invalid')) {
      this.classList.remove('invalid');
      error.innerHTML = "";
    }
  };
  
  e.preventDefault();

});