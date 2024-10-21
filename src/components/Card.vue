<template>
  <section>
    <div class="image">
      <img src="../assets/logo-ucb.jpeg" alt="Logo Ucb">
    </div>

    <div class="information">
      <div class="category">
        <span>CATEGORÍA</span>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo ante sapien, sagittis euismod risus interdum nec. Donec arcu lectus, bibendum sollicitudin fringilla eget, blandit a leo.</p>
    </div>

    <div class="details">
      <h3>Puntaje</h3>
      <h3>Modalidad</h3>
      <div class="photo"></div>
    </div>
  </section>
</template>

<style scoped>

  section {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: 30px 20px;
  }

  .image {
    height: 281px;
    width: 237px;
  }

  .image img {
    max-height: 100%;
    max-width: 100%;
  }

  .information {
    padding: 5px 20px;
  }

  .category {
    background-color: #36ef24;
    border-radius: 8px;
    color: white;
    font-weight: bold;
    height: 27px;
    padding-top: 3px;
    text-align: center;
    width: 107px;
  }

  .information p {
    text-align: center;
    padding: 0px 5px;
  }

  .details {
    align-items: center;
    background-color: #36ef24;
    border-radius: 8px;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }

  .details h3 {
    color: #2a3a46;
    font-size: 18px;
  }

  .details .photo {
    background-color: rgb(102, 122, 122);
    border-radius: 50%;
    height: 48px;
    width: 48px;
  }
</style>