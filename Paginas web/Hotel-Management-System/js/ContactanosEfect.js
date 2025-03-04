
  const formul = document.getElementById("form");

  formul.addEventListener("submit", function(event){
    event.preventDefault();

    Swal.fire({
      icon: 'success',
      title: 'Formulario enviado correctamente',
    })

    formul.reset();
  });




  