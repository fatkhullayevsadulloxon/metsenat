import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import Login from '../components/Login/Login.vue'
import LoginLayout from '../layouts/LoginLayout.vue'
import MainLayout from '../layouts/MainLayout.vue'
import Dashboard from "../pages/DashboardPage.vue"
import Partners from "../pages/PartnersPage.vue"
import SinglePartners from "../pages/SinglePartners.vue"
import NotFound from '../components/NotFound/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      name: 'login-layout',
      component: LoginLayout,
      children: [
        {
          path: '/login',
          component: Login,
          name: 'login',
          meta: {
            auth: true
          }
        }
      ]
    },
    {
      path: '/',
      name: 'main-layout',
      component: MainLayout,
      children: [
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: Dashboard,
          meta: {
            auth: true
          }
        },
        {
          path: '/partners',
          name: 'partners',
          component: Partners,
          meta: {
            auth: true
          }
        },
        {
          path: '/partners/:id',
          name: 'single-partners',
          component: SinglePartners,
          meta: {
            auth: true
          }
        },
      ]
    },
    {
      path: '/:catchAll(.*)',
      component: NotFound
    }
  ]
})

export default router
