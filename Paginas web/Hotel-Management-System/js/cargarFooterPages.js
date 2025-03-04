document.addEventListener('DOMContentLoaded', function(){
    const contenedorFooter = document.getElementById("footerContenedor");
    const footerHTML = generarFooterPages();
    
    contenedorFooter.innerHTML = footerHTML;
})