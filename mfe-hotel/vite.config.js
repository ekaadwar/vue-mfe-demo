import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'hotel',
      filename: 'remoteEntry.js',
      exposes: {
        './HotelApp': './src/HotelApp.vue'
      },
      shared: ['vue']
    })
  ],
  build: {
    target: 'esnext'
  },
  server: {
    port: 5001,
    strictPort: true,
    cors: true
  }
})
