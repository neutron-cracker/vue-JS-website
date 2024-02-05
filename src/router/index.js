import { createWebHistory, createRouter } from "vue-router"
// Met createWebHistory kunnen we de gebruiker navigatiegeschiedenis geven, en met createRouter kunnen we een routerobject maken

import StartPagina from '../components/views/StartPagina.vue'
import GeloofPagina from '../components/views/activiteiten/GeloofPagina.vue'

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

export default router