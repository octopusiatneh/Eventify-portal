import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/modules/dashboard/views/HomeView.vue'
import UserLoginView from './modules/auth/views/UserLoginView.vue'

const CallbackPage = () => import('@/core/views/CallbackView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: UserLoginView,
    },
    {
      path: '/',
      name: '',
      component: HomeView,
    },
    {
      path: '/callback',
      name: 'callback',
      component: CallbackPage,
    },
  ],
})

export default router
