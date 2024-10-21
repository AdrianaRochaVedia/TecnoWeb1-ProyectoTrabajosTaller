<template>
  <body>
    <Navbar />

    <main>
      <RouterView />
    </main>

    <CustomFooter />
  </body>
</template>

<style scoped>

</style>

<script setup lang="ts">
  import Navbar from './components/Navbar.vue'
  import CustomFooter from './components/CustomFooter.vue'
</script>
