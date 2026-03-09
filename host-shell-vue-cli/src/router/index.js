import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from '@/views/DashboardPage.vue'
import KostPage from '@/views/KostPage.vue'
import HotelPage from '@/views/HotelPage.vue'
import HotelDetailPage from '@/views/HotelDetailPage.vue'

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
  },
  {
    path: '/hotel',
    name: 'hotel',
    component: HotelPage
  },
  {
    path: '/hotel/:id',
    name: 'hotel-detail',
    component: HotelDetailPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
