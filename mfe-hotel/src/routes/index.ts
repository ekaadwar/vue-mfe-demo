import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import Hotels from '../components/pages/hotels/Index.vue'

const routes: RouteRecordRaw[] = [{ path: '/', component: Hotels }]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
