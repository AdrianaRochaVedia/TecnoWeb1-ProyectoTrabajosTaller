<template>
  <body>
    <div class="capa"></div>
    <section>
      <h1>BIENVENIDOS AL REPOSITORIO DE PROYECTOS DE GRADO</h1>
      <form>
        <div class="search">
          <RouterLink to="/search">
            <button type="submit" class="search-icon material-symbols-outlined">search</button>
          </RouterLink>
          <input type="search" placeholder="Buscar..." class="search-input">
        </div>
      </input>
      </form>
    </section>
  </body>
</template>

<style scoped>
  body{
    background-image: url('../assets/fondo.png');
    height: 100vh;
    width: 100vw;
  }

  .capa {
    background-color: #0868ac;
    height: 100vh;
    width: 100vw;
    opacity: 60%;
    position: absolute;
    z-index: 0;
  }

  .search {
    --padding: 14px;

    align-items: center;
    background: #f6f6f6;
    background-origin: 28px;
    border-radius: 60px;
    display: flex;
    padding: var(--padding);
    transition: box-shadow 0.25s;
    width: max-content;
  }

  .search:focus-within {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.75);
  }

  .search-input {
    background: transparent;
    border: none;
    color: #333;
    font-size: 16px;
    margin-left: var(--padding);
    outline: none;
    width: 300px;
  }

  .search-input::placeholder,
  .search-icon {
    color: rgba(0, 0, 0, 0.5);
  }

  section {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: 50%;
    position:absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
  }
  h1 {
    color: aliceblue;
    font-size: 64px;
    text-align: center;
  }

  button {
    border-color: transparent;
    cursor: pointer;
  }
  
</style>