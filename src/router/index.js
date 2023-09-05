import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'

let router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
        path: '/',
        name: 'inicio',
        component: InicioView
      },
      {
        path: '/favoritos',
        name: 'favoritos',
        component: () => import('../views/FavoritosView.vue')
      }
  ]
})

export default router
