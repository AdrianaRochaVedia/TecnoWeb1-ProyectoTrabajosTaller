<template>
  <body>
    <section class="sidebar">
      <h3>Buscar por: </h3>
      <div class="filters">
        <label for="titulo">Titulo de Proyecto</label>
        <input type="checkbox" name="titulo" id="titulo">

        <label for="estudiante">Estudiante</label>
        <input type="checkbox" name="estudiante" id="estudiante">

        <label for="categoria">Categoría</label>
        <input type="checkbox" name="categoria" id="categoria">

        <label for="tutor">Tutor</label>
        <input type="checkbox" name="tutor" id="tutor">

        <label for="relator">Relator</label>
        <input type="checkbox" name="relator" id="relator">

        <label for="modalidad">Modalidad</label>
        <input type="checkbox" name="modalidad" id="modalidad">
      </div>
    </section>
    <section class="results">
      <div class="search">
        <button type="submit" class="search-icon material-symbols-outlined">search</button>
        <input type="search" placeholder="Buscar..." class="search-input">
      </div>
    </section>
  </body>
</template>

<style scoped>
  body {
    display: flex;
    height: 100vh;
    width: 100vw;
  }

  .sidebar {
    width: 331px;
    background-color: #b5d3bd;
    opacity: 76%;
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

  button {
    border-color: transparent;
    cursor: pointer;
  }
</style>