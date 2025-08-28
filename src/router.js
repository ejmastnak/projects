import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/Pages/Home.vue'
import AtticGym from '@/Pages/TV47/AtticGym.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/tv47/attic-gym', component: AtticGym },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
