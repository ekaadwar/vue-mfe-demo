import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import Hotels from '../components/pages/hotels/Index.vue'
import HotelsDetail from '../components/pages/hotels/Detail.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/hotel' },
  { path: '/hotel/', component: Hotels },
  { path: '/hotel/:id', component: HotelsDetail }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
