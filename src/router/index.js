import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
// import ListHotel from '../views/ListHotelView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/ListHotel',
    name: 'ListHotel',
    component: () => import(/* webpackChunkName: "about" */ '../views/ListHotelView.vue')
  },
  {
    path: '/FormHotel',
    name: 'FormHotel',
    component: () => import(/* webpackChunkName: "about" */ '../views/FormView.vue')
  },
  {
    path: '/Detail',
    name: 'DetailView',
    component: () => import(/* webpackChunkName: "about" */ '../views/DetailView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
