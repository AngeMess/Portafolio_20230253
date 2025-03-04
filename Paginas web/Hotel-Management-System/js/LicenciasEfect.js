/*DOM*/
const selectOpcion = document.getElementById("selectorLicencia");

/*Precios*/
const PreciolicenciaSencilla = 100;
const PreciolicenciaPremium = 450;

/*Elementos del DOM*/
const selectorLicencia = document.getElementById('selectorLicencia');
const descripcionLicencia = document.getElementById('descripcion');
const comprarBtn = document.getElementById('comprarBtn');
let precioLicencia = document.getElementById('precio');

/*Cambio en el seltector*/
selectorLicencia.addEventListener('change', function() {
  /*Descrición*/
  if (selectorLicencia.value === 'sencilla') {
    descripcionLicencia.textContent = 'Acceso a funciones básicas de HMS.';
    precioLicencia.textContent = ` $${PreciolicenciaSencilla}`;
  } 
  else if (selectorLicencia.value === 'premium') {
    descripcionLicencia.textContent = 'Acceso completo a todas las características de HMS y soporte prioritario.';
    precioLicencia.textContent = ` $${PreciolicenciaPremium}`;
  } 
  else {
    descripcionLicencia.textContent = 'Seleccione una Licencia';
    precioLicencia.textContent = `$`;
  }
});

// Evento de clic en el botón de compra
comprarBtn.addEventListener('click', function () {
  // Verifica si se ha seleccionado una licencia antes de mostrar la alerta de compra
  if (!selectorLicencia.value || selectorLicencia.value === "ninguno") {
      Swal.fire('Selecciona una Licencia antes de comprar', '', 'error');
      return;
  }
  else{    // Muestra una alerta de confirmación utilizando SweetAlert
  Swal.fire({
      icon: 'question',
      title: 'Confirmar Compra',
      text: '¿Estás seguro de comprar la licencia?',
      showCancelButton: true,
      confirmButtonText: 'Sí, Comprar',
      cancelButtonText: 'Cancelar',
  }).then((result) => {
      // Si el usuario confirma la compra, muestra una alerta de éxito
      if (result.isConfirmed) {
          Swal.fire('Licencia adquirida con exito', '', 'success');
      }
      else{
        Swal.fire('Licencia cancelada', '', 'info');
      }
  });
}
});

