import { createApp } from 'vue'
import { createPinia } from 'pinia'
import HotelApp from './HotelApp.vue'
import router from './routes/index'

const app = createApp(HotelApp)

app.use(createPinia())
app.use(router)

app.mount('#app')
