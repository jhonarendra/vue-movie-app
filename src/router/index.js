import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movie-preview/:id',
    name: 'MoviePreview',
    component: () => import('../views/MoviePreview'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory('vue-movie-app'),
  routes
})

export default router
