function MenuPtc() {
    const Menu = `<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
    <img src="../Imgs/logo.png" alt="" width="4%">
    <h1 class="display-5 me-5">MediLife</h1>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="../index.html">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="doctores.html">Doctores</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="citas.html">Agendar citas</a>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>`;

    return Menu;
}