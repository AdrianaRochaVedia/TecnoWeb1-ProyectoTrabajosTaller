<template>
  <header>
    <nav class="navbar">
      <div>
        <RouterLink to="/">
          <img class="img" src="../assets/logo.png" alt="Home"/>
        </RouterLink>
      </div>
      <ul>
        <li>
          <RouterLink class="route" to="/proyecto">AÑADIR PROYECTO</RouterLink>
        </li>
        <li>
          <RouterLink class="route" to="/reportes">GENERAR REPORTES</RouterLink>
        </li>
        <li>
          <RouterLink class="route" to="/sesion">INICIAR SESIÓN</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
  .navbar {
    align-items: center;
    background-color: #142a30;
    display: flex;
    justify-content: space-around;
    padding: 5px;
  }
  .img {
    height: 75px;
    width: 154px;
  }
  .route {
    color: rgb(231, 230, 230);
    font-weight: bold;
    text-decoration: none;
  }
  .route:hover {
    color: #4eb3d3;
  }
  ul{
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 33vw;
  }
  li{
    list-style: none;
  }
</style>