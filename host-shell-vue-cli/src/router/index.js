import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from '@/views/DashboardPage.vue'
import KostPage from '@/views/KostPage.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardPage
  },
  {
    path: '/kost',
    name: 'kost',
    component: KostPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
