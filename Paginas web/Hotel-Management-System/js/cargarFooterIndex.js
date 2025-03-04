document.addEventListener('DOMContentLoaded', function(){
    const contenedorFooter = document.getElementById("footerContenedor");
    const footerHTML = generarFooter();
    
    contenedorFooter.innerHTML = footerHTML;
})