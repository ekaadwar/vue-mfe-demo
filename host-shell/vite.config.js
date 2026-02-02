import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'host',
      remotes: {
        hotels: 'http://127.0.0.1:5001/assets/remoteEntry.js',
        coliving: 'http://127.0.0.1:5002/assets/remoteEntry.js'
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
  optimizeDeps: {
    exclude: ['hotels', 'coliving']
  },
  server: {
    host: '127.0.0.1',
    port: 5000,
    strictPort: true,
    cors: true
  }
})
