<template>
  <body>
    <h1>REGISTRO DE PROYECTOS DE GRADOS</h1>


    <form>
      <div class="form-section">
        <section class="form-left">
          <label>TÍTULO DEL PROYECTO</label>
          <input type="text" required spellcheck="false"/>

          <label>GESTIÓN</label>
          <input type="text" required spellcheck="false"/>
          
          <label>ESTUDIANTE</label>
          <input type="text" required spellcheck="false"/>
          
          <label>C.I. DEL ESTUDIANTE</label>
          <input type="text" required spellcheck="false"/>
          
          <label>TUTOR</label>
          <input type="text" required spellcheck="false"/>
        </section>

        <section class="form-right">
          <label>RELATOR</label>
          <input type="text" required spellcheck="false"/>
          
          <label>REPRESENTANTE DE RECTORADO</label>
          <input type="text" required spellcheck="false"/>
          
          <label>MODALIDAD DE TITULACIÓN</label>
          <input type="text" required spellcheck="false"/>
          
          <label>FECHA DE DEFENSA</label>
          <input type="text" required spellcheck="false"/>
        </section>
      </div>

      <div class="buttons-section">
        <button>GUARDAR</button>
        <button>IMPORTAR EXCEL</button>
      </div>
    </form>
  </body>
</template>

<style scoped>
  body {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 40px;
    width: 100vw;
    height: 100vh;
  }

  h1 {
    color: #0868ac;
    font-size: 26px;
  }

  form {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }

  .form-section {
    align-items: flex-start;
    display: flex;
    justify-content: space-around;
    width: 80vw;
  }

  section {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
  }

  label {
    color: #1f6fa8;
    font-size: 13px;
    margin-top: 29px;
    padding-left: 10px;
  }

  input {
    border-color: rgb(34, 33, 33);
    border-radius: 8px;
    font-size: 16px;
    height: 46px;
    padding: 0 10px;
    width: 355px;
  }
  
  .buttons-section {
    margin-top: 50px;
  }

  button {
    margin: 0 45px;
    height: 56px;
    width: 172px;
  }

</style>