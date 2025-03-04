document.addEventListener('DOMContentLoaded', function(){
    const ContenedorMenu = document.getElementById("footContenedor");
    const footHTML = Footer();

    ContenedorMenu.innerHTML = footHTML;
})