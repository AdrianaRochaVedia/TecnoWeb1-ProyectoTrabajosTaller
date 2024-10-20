<template>
  <body>
    <Navbar />

    <main>
      <RouterView />
    </main>
  </body>
</template>

<style scoped>

</style>

<script setup lang="ts">
  import Navbar from './router/Navbar.vue'
</script>
