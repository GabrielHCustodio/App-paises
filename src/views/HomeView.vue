<template>
  <div>
    <header-page/>
    <world-boxes/>
  </div>
</template>

<script>
import HeaderPage from '@/components/HeaderPage.vue'
import WorldBoxes from '@/components/WorldBoxes.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderPage,
    WorldBoxes
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Oswald', sans-serif;
  color: #1d0c20;
}
</style>