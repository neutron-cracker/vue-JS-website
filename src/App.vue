<template>
  <router-view /> <!-- De router mag de view laten zien -->
</template>

<script>
import { createWebHistory, createRouter } from "vue-router"
// Met createWebHistory kunnen we de gebruiker navigatiegeschiedenis geven, en met createRouter kunnen we een routerobject maken

import StartPagina from './components/views/StartPagina.vue'
import GeloofPagina from './components/views/activiteiten/GeloofPagina.vue'

const routes = [ 
  {
    path: "/",
    name: "StartPagina",
    component: StartPagina,
  },
  {
    path: "/activiteiten-geloof",
    name: "GeloofPagina",
    component: GeloofPagina,
  }
]


const router = createRouter({history: createWebHistory(), routes})

export default {
  name: 'App',
  components: {
    StartPagina,
    GeloofPagina,
  },
  router
}
</script>

<style>
#app {
  font-family: Caveat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
