import { createRouter, createWebHistory } from 'vue-router'

import ClientsManagementView from '@/modules/clients-management/views/ClientManagementView.vue'
import { authGuard } from '@auth0/auth0-vue'

const UserLoginView = () => import('@/modules/auth/views/UserLoginView.vue')
const ClientCreateView = () =>
  import('@/modules/clients-management/views/ClientCreateView.vue')
const EndpointsManagementView = () =>
  import('@/modules/endpoints-management/views/EndpointManagementView.vue')
const CallbackView = () => import('@/core/views/CallbackView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: 'clients-management',
    },
    {
      path: '/login',
      name: 'login',
      component: UserLoginView,
    },
    {
      path: '/clients-management',
      name: 'clients-management',
      component: ClientsManagementView,
      beforeEnter: authGuard,
    },
    {
      path: '/clients-management/create',
      name: 'client-create',
      component: ClientCreateView,
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
