/*Función*/

function generarNavbarPages()
{
    const navbarPages = `        <header class="header">
    <nav class="transparencia navbar navbar-expand-lg bg-link navbar-dark fixed-top">
        <!-- Container wrapper -->
        <div class="container-fluid">
      
          <!-- Navbar brand -->
          <a class="navbar-brand" href="#">
            <img src="../img/Black White Modern Luxury Logo.png" alt="Logo" class="imgLogo d-inline-block align-text-top">
          </a>
      
          <!-- Toggle button -->
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
         </button>
      
          <!-- Collapsible wrapper -->
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      
            </ul>
      
            <!-- Menú -->
            <ul class="navbar-nav d-flex flex-row me-1">
              <li class="nav-item me-3 me-lg-0">
                <a type="button" class="navMenu nav-link btn" href="../Index.html">Inicio</a>
              </li>
              <li class="nav nav-item me-3 me-lg-0">
                <a class="navBarra navbar-text">|</a>
              </li>
              <li class="nav-item me-3 me-lg-0">
                <a type="button" class="navMenu nav-link btn" aria-current="page" href="SobreNosotros.html">Sobre Nosotros</a>
              </li>
              <li class="nav nav-item me-3 me-lg-0">
                <a class="navBarra navbar-text">|</a>
              </li>
              <li class="nav-item me-3 me-lg-0">
                <a class="navSelect nav-link active" href="#">Contáctanos</a>
              </li>
              <li class="nav nav-item me-3 me-lg-0">
                <a class="navBarra navbar-text">|</a>
              </li>
              <li class="nav-item me-3 me-lg-0">
                <a type="button" class="navMenu nav-link btn" href="Tematica.html">Temática</a>
              </li>
              <li class="nav nav-item me-3 me-lg-0">
                <a class="navBarra navbar-text">|</a>
              </li>
              <li class="nav-item me-3 me-lg-0">
                <a type="button" class="navMenu nav-link btn" href="Licencias.html">Licencias</a>
              </li>
            </ul>
          </div>
        </div>
        <!-- Container wrapper -->
      </nav>
</header>`;

return navbarPages;
}