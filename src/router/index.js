import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeViewAdmin.vue'
import {routes} from "@/router/RouterList";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...routes,
    {
      // Document title tag
      // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
      meta: {
        title: 'Dashboard'
      },
      path: '/dashboard',
          name: 'dashboard',
        component: Home
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
  ]
})

export default router
