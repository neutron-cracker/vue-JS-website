<template>
  <div class="home">
    <HeaderBalk />
    Welkom bij Ichthus Utrecht!
  </div>
</template>

<script setup>
import HeaderBalk from '../interactief/HeaderBalk.vue'
</script>
<!-- Waarom is dit 'script' terwijl de tutorials steeds 'script setup' gebruiken?-->
<script> 
export default {
  name: 'HomePage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app {
  font-family: Caveat, sans-serif, Arial, Helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}
body {
  background: white;
}
</style>
