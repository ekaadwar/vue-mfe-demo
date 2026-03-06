import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'apartments',
      filename: 'remoteEntry.js',
      exposes: {
        './ApartmentApp': './src/main.tsx'
      }
    })
  ],
  build: {
    target: 'esnext'
  },
  server: {
    host: '127.0.0.1',
    port: 5003,
    strictPort: true,
    cors: true
  },
  preview: {
    host: '127.0.0.1',
    port: 5003,
    strictPort: true,
    cors: true
  }
})
