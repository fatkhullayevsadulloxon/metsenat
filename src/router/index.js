import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "../pages/HomePage.vue"
import Login from "../components/Login/Login.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router
