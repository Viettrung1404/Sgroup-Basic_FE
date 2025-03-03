import { createRouter, createWebHistory } from 'vue-router'

import PokemonDetail from '../pages/PokemonDetail.vue'
import PokemonList from '../pages/PokemonList.vue'

const routes = [
  { path: '/', component: PokemonList },
  { path: '/:name/:id', component: PokemonDetail }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;