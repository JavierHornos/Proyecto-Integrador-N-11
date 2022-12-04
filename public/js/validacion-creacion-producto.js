let formulario = document.getElementById("creacion-producto");     

formulario.addEventListener("submit",function(e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value.trim()
    //let precio = document.getElementById("Price").value.trim()
    //let descuento = document.getElementById("Discount").value.trim()

  //arreglo de expresiones regulares para validar Email//
const validaNombre = (nombre) => {
  return /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/        
}


     //validando nombre 
    if (nombre==""){
           return  Swal.fire({
                 icon: 'error',
                 title: 'Validacion',
                 text: 'Ingrese un nombre'})

    }
    
   /* else if(nombre.value.length < 3){
        return  Swal.fire({
            icon: 'error',
            title: 'Validacion',
            text: 'El campo de nombre debe tener al menos 3 caracteres'})
    }*/
    
    else if(!validaNombre(nombre)) {                             // comparamos con el erreglo de expresiones            
                     return Swal.fire({
                          icon: 'error',
                          title: 'Validacion',
                          text: 'Debe ingresar un nombre'})
               } 

              
        //validando Precio// 
        /*  if(precio=="") {
                 
            return Swal.fire({
              icon: 'error',
              title: 'Validacion',
              text: 'Campo Vacio'})

          } 
           else {

          formulario.submit();                              // hacemos submit al formulario
          
         } */
 });
       