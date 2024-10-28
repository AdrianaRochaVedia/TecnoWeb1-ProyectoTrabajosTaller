<template>
  <body>
    <section>
      <form action="submit" class="sesion_form">
        <h2>INICIAR SESIÓN</h2>
        <label>CORREO ELECTRÓNICO</label>
        <input id="correo" type="text" required spellcheck="false"/>

        <label>CONTRASEÑA</label>
        <input id="password" type="text" required spellcheck="false"/>
        <div class="buttons">
          <button disabled>Entrar</button>
          <div class="google_button">
            <p>Iniciar sesión con Google</p>
            <img src="../assets/google.jpeg" alt="Google Logo">
          </div>
        </div>
      </form>
      <div class="image_sesion">
        <!-- <img src="../assets/imagen_sesion.jpeg" alt="Iniciar sesión"> -->
      </div>
    </section>
  </body>
</template>

<style scoped>
  body {
    align-items: center;
    justify-content: center;
    display: flex;
    height: 100vh;
  }

  section {
    align-items: center;
    display: flex;
    height: 70vh;
    justify-content: center;
    width: 80vw;
  }

  .image_sesion {
    background-image: url("../assets/imagen_sesion.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 75% center;
    border-radius: 20px;
    height: 100%;
    transform: scaleX(-1);
    width: 50%;
  }

  .image_sesion img {
    object-fit: fill;
    width: 100%;
  }

  .sesion_form {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 50%;
  }

  label {
    color: #1f6fa8;
    font-size: 13px;
    margin-top: 29px;
    padding-left: 40px;
  }

  input {
    border-color: rgb(34, 33, 33);
    border-radius: 8px;
    font-size: 16px;
    height: 46px;
    margin-left: 30px;
    padding: 0px 10px;
    width: 425px;
  }

  .buttons {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    justify-content: space-around;
  }

  button {
    background-color: #36ef24;
    border-color: #36ef24;
    border-radius: 8px;
    color: white;
    font-size: 16px;
    margin: 0 45px;
    height: 56px;
    width: 140px;
  }

  button:hover {
    cursor: pointer;
  }

  .google_button {
    align-items: center;
    display: flex;
    color: #7e7a7a;
    margin-top: 5px;
  }

  .google_button img {
    height: 30px;
    margin-left: 10px;
    width: 30px;
  }

  .google_button p:hover {
    cursor: pointer;
  }
</style>