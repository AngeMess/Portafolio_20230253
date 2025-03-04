/*Función*/

function generarFooter()
{
    const footer = `<footer class="bg-dark text-center text-white">
    <!-- Grid container -->
    <div class="container p-4">
  
      <!-- Section: Links -->
      <section class="">
        <!--Grid row-->
        <div class="row">  
          <!--Grid column-->
          <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h6 class="titleLink text-uppercase">Ayuda</h6>
  
            <ul class="list-unstyled mb-0">
              <li>
                <li>
                    <a href="https://es.totvs.com/blog/cat-hoteleria/administracion-del-hotel-consejos-para-mejorar-su-gestion/" class="styleLink">¿Cómo gestionar un hotel?</a>
                  </li>
            </ul>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h6 class="titleLink text-uppercase">Páginas</h6>
  
            <ul class="list-unstyled mb-0" style="text-align: center;">
              <li>
                <a href="#" class="styleLink">Inicio</a>
              </li>
              <li>
                <a href="pages/SobreNosotros.html" class="styleLink">Sobre Nosotros</a>
              </li>
              <li>
                <a href="pages/Contactanos.html" class="styleLink">Contáctanos</a>
              </li>
              <li>
                <a href="pages/Tematica.html" class="styleLink">Temática del PTC</a>
              </li>
              <li>
                <a href="pages/Licencias.html" class="styleLink">Licencias del sitio web</a>
              </li>
            </ul>
          </div>
          <!--Grid column-->
  
          <!--Grid column-->
          <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h6 class="titleLink text-uppercase">Más</h6>
  
            <ul class="list-unstyled mb-0">
                <li>
                    <a href="https://getbootstrap.com/" class="styleLink">getbootstrap.com</a>
                  </li>
                  <li>
                    <a href="https://mdbootstrap.com/" class="styleLink">MDBootstrap.com</a>
                  </li>
                  <li>
            </ul>
          </div>
          <!--Grid column-->
  
        </div>
        <!--Grid row-->
      </section>
      <!-- Section: Links -->
  
    </div>
    <!-- Grid container -->

          <!-- Section: Social media -->
          <section class="mb-4">
            <h5 class="textos">Redes Sociales</h5>
            <!-- Facebook -->
            <a class="btn-floating btn btn-outline-light m-1" href="https://www.tiktok.com/@hms_oficiaal?is_from_webapp=1&sender_device=pc" role="button"><i class="bi bi-tiktok"> Tik Tok</i></a>

            <!-- Instagram -->
            <a class="btn-floating btn btn-outline-danger m-1" href="https://instagram.com/hms_oficiaal?igshid=MWZjMTM2ODFkZg==" role="button"><i class="bi bi-instagram"> Instagram</i></a>
      
            <!-- Twitter -->
            <a class="btn-floating btn btn-outline-info m-1" href="https://x.com/hms_oficiaal?t=yLmCZEKuAQdOmiiU784CHA&s=09" role="button"><i class="bi bi-twitter"> Twitter</i></a>
      
          </section>

    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2); border-top: 1px solid gray;">
        <img width="50" height="60" src="img/sql.jpg" alt="">
        <img width="40" height="40" src="img/visualCode.jpg" alt="">
        <img width="70" height="40" src="img/visualStudio.jpg" alt="">
      </div>
      <!-- Copyright -->
  
    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      <p>Privacidad - Terminos y Condiciones - ©2023 HMS</p>
    </div>
    <!-- Copyright -->
  
  </footer>`;

  return footer;
}