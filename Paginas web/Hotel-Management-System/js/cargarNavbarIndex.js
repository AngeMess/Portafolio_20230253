document.addEventListener('DOMContentLoaded', function(){
    const contenedorNavbar = document.getElementById("navbarContenedor");
    const navbarHTML = generarNavbarIndex();
    
    contenedorNavbar.innerHTML = navbarHTML;
})