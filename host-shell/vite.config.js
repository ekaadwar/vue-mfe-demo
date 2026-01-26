import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'host',
      remotes: {
        hotel: 'http://localhost:5001/assets/remoteEntry.js',
        coliving: 'http://localhost:5002/assets/remoteEntry.js'
      },
      shared: ['vue']
    })
  ],
  build: {
    target: 'esnext'
  },
  optimizeDeps: {
    exclude: ['hotel', 'coliving']
  },
  server: {
    port: 5000,
    strictPort: true,
    cors: true
  }
})
