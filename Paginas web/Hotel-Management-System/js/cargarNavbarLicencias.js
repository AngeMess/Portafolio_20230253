document.addEventListener('DOMContentLoaded', function(){
    const contenedorNavbar = document.getElementById("navbarContenedor");
    const navbarHTML = generarNavbarPages();
    
    contenedorNavbar.innerHTML = navbarHTML;
})