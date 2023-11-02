import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeViewAdmin.vue'
import {routes} from "@/router/RouterList";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...routes,
    {
      meta: {
        title: 'Dashboard'
      },
      path: '/dashboard',
          name: 'dashboard',
        component: Home
    },
    {
      meta: {
        title: 'Cities'
      },
      path: '/cities',
      name: 'cities',
      component: () => import('@/views/Cities.vue')
    },
    {
      meta: {
        title: 'Hotels'
      },
      path: '/hotels',
      name: 'hotels',
      component: () => import('@/views/Hotels.vue')
    },
    {
      meta: {
        title: 'users'
      },
      path: '/users',
          name: 'users',
        component: () => import('@/views/TablesView.vue')
    },
    {
      meta: {
        title: 'Forms'
      },
      path: '/forms',
          name: 'forms',
        component: () => import('@/views/FormsView.vue')
    },
    {
      meta: {
        title: 'Profile'
      },
      path: '/profile',
          name: 'profile',
        component: () => import('@/views/ProfileView.vue')
    },
    {
      meta: {
        title: 'Login'
      },
      path: '/login',
          name: 'login',
        component: () => import('@/views/LoginView.vue')
    },
    // Ruta de captura para redirigir al inicio de sesión
    {
      path: '/:catchAll(.*)',
      redirect: '/login' // Redirige a la página de inicio de sesión
    },
  ]
})

export default router
