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
        coliving: 'http://127.0.0.1:5002/assets/remoteEntry.js',
        kost: {
          external: 'http://localhost:5003/remoteEntry.js',
          from: 'webpack',
          format: 'var' // atau 'esm' tergantung output remote webpack Anda
        }
      },
      // shared: {
      //   vue: { singleton: true, eager: true, requiredVersion: deps['vue-router'] },
      //   pinia: { singleton: true, requiredVersion: '^3.0.4' },
      //   'vue-router': { singleton: true },
      //   vuex: { singleton: true, eager: true, requiredVersion: deps.vuex }
      // }
      sharef: ['vue']
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
