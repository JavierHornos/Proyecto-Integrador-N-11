let formulario = document.getElementById("formulario");     

formulario.addEventListener("submit",function(e) {
    e.preventDefault();

    let email = document.getElementById("Email").value.trim()
    let password = document.getElementById("Password").value.trim()


  
const validaEmail = (email) => {
  return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email);        
}
const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/  






     //validando Email 
    if (email==""){
           return  Swal.fire({
                 icon: 'error',
                 title: 'Validacion',
                 text: 'Ingrese un e-mail'})

    } else if(!validaEmail(email)) {                                 
                     return Swal.fire({
                          icon: 'error',
                          title: 'Validacion',
                          text: 'Debe ser un Email Válido'})
               } 

              
        //validando Pass// 
          if(password=="") {
                 
            return Swal.fire({
              icon: 'error',
              title: 'Validacion',
              text: 'Campo Vacio'})

          } else if (password.length < 6) { 

          return Swal.fire({
            icon: 'error',
            title: 'Validacion',
            text: 'Debe tener minimo 6 caracteres'})           

         } else if (!password.match(er)) {

          return Swal.fire({
            icon: 'error',
            title: 'Validacion',
            text: 'Debe tener al menos una Mayuscula y un Numero'})

         } else {

          formulario.submit();
          
         } 
 });
       