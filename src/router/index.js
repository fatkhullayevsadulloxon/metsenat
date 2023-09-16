import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import Login from '../components/Login/Login.vue'
import LoginLayout from '../layouts/LoginLayout.vue'
import MainLayout from '../layouts/MainLayout.vue'
import Dashboard from '../components/Dashboard/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/auth",
      name: "login-layout",
      component: LoginLayout,
      children: [
        {
          path: "/login",
          component: Login,
          name: "login",
          meta: {
            auth: true
          }
        }
      ]
    },
    {
      path: "/",
      name: "main-layout",
      component: MainLayout,
      children: [
        {
          path: '/',
          name: 'Dashboard',
          component: Dashboard,
          meta: {
            auth: true
          }
        },
      ]
    },
    // {
    //   path: '/:catchAll(.*)', component: NotFound
    // },
  ]
})

export default router
