import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/Pages/Home.vue'
import MiniOffice from '@/Pages/LJ16/MiniOffice.vue'
import AtticGym from '@/Pages/TV47/AtticGym.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/lj16/minioffice', component: MiniOffice },
  { path: '/tv47/attic-gym', component: AtticGym },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
