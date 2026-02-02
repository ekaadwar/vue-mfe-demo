import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'hotels',
      filename: 'remoteEntry.js',
      exposes: {
        './HotelApp': './src/HotelApp.vue',
      },
      shared: {
        vue: { singleton: true, requiredVersion: '^3.5.24' },
        pinia: { singleton: true, requiredVersion: '^3.0.4' }
      }
    })
  ],
  build: {
    target: 'esnext'
  },
  preview: {
    host: '127.0.0.1',
    port: 5001,
    strictPort: true,
    cors: true
  }
})
