import { createApp } from 'vue'
import App from './App.vue'

let app

const mount = (el = '#app') => {
  app = createApp(App)
  app.mount(el)
  return app
}

if (document.querySelector('#app')) {
  mount('#app')
}

export { mount }
