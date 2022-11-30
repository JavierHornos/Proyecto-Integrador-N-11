window.addEventListener("load", function(){
    let formulario = document.querySelector("#formulario-registro");
    let campoNombre = document.querySelector("#nombre");
     /* console.log(campoNombre)

     console.log(formulario)*/

    formulario.addEventListener("submit", function(e){
         /*e.preventDefault();*/
 
         let errores = [];
 
         let campoNombre = document.querySelector("#nombre");

         /* console.log(campoNombre)*/
 
         if(campoNombre.value == ""){
             errores.push("El campo de nombre debe estar completo")
         }
 
         else if(campoNombre.value.length < 4){
             errores.push("El campo de nombre debe tener al menos 4 caracteres")
         }
 
         if(errores.length > 0){
             e.preventDefault();
     
             let ulErrores = document.querySelector ("div.errores ul");
             for (let i=0 ; i < errores.length; i++)
     
             ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
         }
  })

/*campoNombre.addEventListener("blur", function(){
    if(campoNombre.value == ""){
        alert("El campo de nombre debe estar completo")
    }

    else if(campoNombre.value.length < 4){
        alert("El campo de nombre debe tener al menos 4 caracteres")
    }
})
*/

})