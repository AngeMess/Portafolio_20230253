function confirmarCita() {
    const selectedDate = document.getElementById('date').value;
    const selectedTime = document.getElementById('time').value;
    const selectedDoctor = document.getElementById('dropdownButton').textContent;

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const currentDate = `${year}-${month}-${day}`;
    
    if (!selectedDate || !selectedTime || selectedDoctor === 'Seleccione a un doctor') {
        Swal.fire({
            title: "Error",
            text: "Todos los campos son obligatorios. Por favor, complete el formulario.",
            icon: "error",
            confirmButtonText: "Entendido"
        });
    } else if (selectedDate < currentDate) {
        Swal.fire({
            title: "Error",
            text: "Por favor, selecciona una fecha posterior a la fecha actual.",
            icon: "error",
            confirmButtonText: "Entendido"
        });

    } else {

    const textoConcatenado = `La cita está programada para el ${selectedDate}, a las ${selectedTime}, con ${selectedDoctor}.`;

    Swal.fire({
        title: "Confirma la agenda de tu cita",
        text: textoConcatenado,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirmar"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "¡Cita confirmada!",
                text: "Tu cita ha sido agendada correctamente.",
                icon: "success"
            });
        }
    });
}}
