import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import DetailView from '../views/DetailView.vue'
import PricingView from '../views/PricingView.vue'
import SuccessView from '../views/SuccessView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/product',
    name: 'product',
    component: DetailView
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: PricingView
  },
  {
    path: '/success',
    name: 'success',
    component: SuccessView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
