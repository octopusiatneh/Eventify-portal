import { createRouter, createWebHistory } from 'vue-router'
import ClientsManagementView from '@/modules/clients-management/views/AccountsManagementView.vue'

const CallbackView = () => import('@/core/views/CallbackView.vue')
const EndpointsManagementView = () =>
  import('@/modules/endpoints-management/views/EndpointsManagementView.vue')
const UserLoginView = () => import('./modules/auth/views/UserLoginView.vue')

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
      redirect: 'clients-management',
    },
    {
      path: '/clients-management',
      name: 'clients-management',
      component: ClientsManagementView,
    },
    {
      path: '/endpoints-management',
      name: 'endpoints-management',
      component: EndpointsManagementView,
    },
    {
      path: '/callback',
      name: 'callback',
      component: CallbackView,
    },
  ],
})

export default router
