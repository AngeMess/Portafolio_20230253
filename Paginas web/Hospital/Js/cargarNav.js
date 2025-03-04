document.addEventListener('DOMContentLoaded', function(){
    const ContenedorMenu = document.getElementById("menuContenedor");
    const menuHTML = MenuPtc();

    ContenedorMenu.innerHTML = menuHTML;
})