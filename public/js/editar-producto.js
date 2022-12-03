let formulario = document.getElementById("formulario");

formulario.addEventListener("submit",function(e) {
   e.preventDefault();

   let image = document.getElementById("imagen").value
   let description = document.getElementById("description").value.trim()
   let category = document.getElementById("category").value
   let price = document.getElementById("price").value.trim()
   let name = document.getElementById("name").value.trim()

   if (image == "") {
      return Swal.fire({
         icon: 'error',
         title: 'Validacion',
         text: 'Cargue una imagen!'
      });
   } else if (description == "") {
      return Swal.fire({
         icon: 'error',
         title: 'Validacion',
         text: 'Agregue una descripcion!'
      });
   } else if (category == "") {
      return Swal.fire({
         icon: 'error',
         title: 'Validacion',
         text: 'Seleccione una categoria!'
      });
   } else if (price == "") {
      return Swal.fire({
         icon: 'error',
         title: 'Validacion',
         text: 'Debe asignar un precio para el producto!'
      });
   } else if (name == "") {
      return Swal.fire({
         icon: 'error',
         title: 'Validacion',
         text: 'Todo producto debe tener un nombre!'
      });
   } else {
      formulario.submit();
   } 
});

 document.getElementById('imagen').onchange=function(e){
    let reader=new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=function(){
         let preview=document.getElementById('preview');
         imagen= document.createElement('img');
         imagen.src=reader.result;
         imagen.style.width="200px";
         preview.append(imagen);
                  
    }

 }



