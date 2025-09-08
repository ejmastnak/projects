import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import Home from '@/Pages/Home.vue'
import AtticGym from '@/Pages/TV47/AtticGym.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/tv47/attic-gym', component: AtticGym },
]

export const createApp = ViteSSG(
  App,
  { routes },
)
