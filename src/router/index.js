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
    meta: {
      titel: "Geloof",
    },
  }
]


const router = createRouter({history: createWebHistory(), routes})

router.beforeEach((to) => { // html-title instellen
  if ('titel' in to.meta)
    document.title = to.meta.titel + ' | Ichthus Utrecht'
  else
    document.title = 'Ichthus Utrecht'
})

export default router