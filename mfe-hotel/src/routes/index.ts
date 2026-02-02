import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import Hotels from '../components/pages/hotels/Index.vue'
import HotelsDetail from '../components/pages/hotels/Detail.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', component: Hotels },
  { path: '/detail', component: HotelsDetail }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
