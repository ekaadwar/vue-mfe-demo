import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import HotelPage from './views/HotelPage.vue'
import ColivingPage from './views/ColivingPage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Dashboard },
    { path: '/hotel', component: HotelPage },
    { path: '/coliving', component: ColivingPage }
  ]
})
