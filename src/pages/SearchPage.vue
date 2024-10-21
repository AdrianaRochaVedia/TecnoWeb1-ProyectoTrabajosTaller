<template>
  <body>
    <section class="sidebar">
      <h3>Buscar por: </h3>
      <div class="filters">
        <div class="filter">
          <input class="check" type="checkbox" name="titulo" id="titulo">
          <label for="titulo">Titulo de Proyecto</label>
        </div>

        <div class="filter">
          <input class="check" type="checkbox" name="estudiante" id="estudiante">
          <label for="estudiante">Estudiante</label>
        </div>

        <div class="filter">
          <input class="check" type="checkbox" name="categoria" id="categoria">
          <label for="categoria">Categoría</label>
        </div>

        <div class="filter">
          <input class="check" type="checkbox" name="tutor" id="tutor">
          <label for="tutor">Tutor</label>
        </div>

        <div class="filter">
          <input class="check" type="checkbox" name="relator" id="relator">
          <label for="relator">Relator</label>
        </div>

        <div class="filter">
          <input class="check" type="checkbox" name="modalidad" id="modalidad">
          <label for="modalidad">Modalidad</label>
        </div>
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
    background-color: #4eb4d331;
    color: #0868ac;
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    width: 331px;
  }

  .filters {
    display: flex;
    flex-direction: column;
    margin-left: 50px;
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
  
  .filter {
    margin-top: 15px;
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

  .check {
    margin-right: 6px;
    pointer-events: none;
  }

  label {
    font-weight: 500;
    color: #333;
    cursor: pointer;
  }

  .check:checked {
    accent-color: #0868ac;
  }

  .check:checked ~ label {
    color: #0868ac;
  }
</style>