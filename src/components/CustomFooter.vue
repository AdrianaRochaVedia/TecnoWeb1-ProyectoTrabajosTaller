<template>
  <footer>
    <section>
      <img src="../assets/logo.png" alt="Logo">
      <p>Copyright © 2024 Adriana Nathalie Rocha Vedia<br> 
      Todos los derechos reservados<br>
      Universidad Católica Boliviana "San Pablo"</p>
    </section>

    <section>
      <p>Contáctanos<br>
      Av. 14 de Septiembre N°4807<br>
      esquina, La Paz<br>
      +591 76202760</p>  
    </section>
  </footer>
</template>

<style scoped>
  footer {
    align-items: center;
    background-color: #142a30;
    color: white;
    display: flex;
    height: 286px;
    justify-content: space-around;
    width: 100vw;
    bottom: 0px;
  }

  section {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  p {
    line-height: 22px;
    text-align: center;
  }

  img {
    height: 103px;
    width: 215px;
  }
</style>