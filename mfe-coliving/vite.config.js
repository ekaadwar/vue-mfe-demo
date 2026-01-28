import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'coliving',
      filename: 'remoteEntry.js',
      exposes: {
        './ColivingApp': './src/ColivingApp.vue'
      },
      shared: ['vue']
    })
  ],
  build: { target: 'esnext' },
  server: {
    host: '127.0.0.1',
    port: 5002,
    strictPort: true,
    cors: true,
    origin: 'http://127.0.0.1:5002',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
})
