import { createApp } from 'vue'
import { createPinia } from 'pinia'
import HotelApp from './HotelApp.vue'

createApp(HotelApp).use(createPinia()).mount('#app')
