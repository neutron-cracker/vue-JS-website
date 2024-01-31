<template>
  <div class="home">
    <div class="menu">
      <div class="menu-item">
        <img src="../assets/images/icons/ichthus-logo-red.png" class="logo">
      </div>
      <div class="menu-item">
        <div class="titleCorner">Ichthus Utrecht</div>
      </div>
      <div class="menu-item">Vereniging</div>
      <NavigatieDropdown tekst = "Activiteiten"/>
      <div class="menu-item">Over</div>
      <div class="menu-item">Lid worden</div>
      <NavigatieKnop tekst = "Leden" koppeling = "https://ichthusutrecht.churchbook.nl"/>
    </div>
    Welkom bij Ichthus Utrecht!
  </div>
</template>


<script setup>
// Hier importeren we de componenten die we nodig hebben
import NavigatieKnop from './interactief/NavigatieKnop.vue'
import NavigatieDropdown from './interactief/NavigatieDropdown.vue'
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
.menu {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
  height: 60px;
  margin-left: 10%;
  margin-right: 25%;
}
.menu-item {
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
  height: 60px;
}

.titleCorner{
  color: rgb(151, 0, 70);
  font-family:"Bree Serif", serif;
  font-size:30px;
  margin:0;
  white-space: nowrap;
}
</style>
