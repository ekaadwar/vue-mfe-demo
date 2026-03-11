<template>
  <div class="page-stack">
    <section class="hero-card">
      <div>
        <p class="hero-card__eyebrow">Webpack 5 Module Federation</p>
        <h2>Dashboard Host yang dibangun dengan Vue CLI</h2>
        <p>
          Halaman ini memuat dua remote sekaligus, yaitu <strong>mfe-kost-v2</strong> dari
          <code>http://127.0.0.1:5003/remoteEntry.js</code> dan <strong>mfe-hotel</strong> dari
          <code>http://127.0.0.1:5001/assets/remoteEntry.js</code>.
        </p>
      </div>
    </section>

    <div class="panel-grid">
      <RemoteContainer title="Kost Micro App" badge="kost/KostApp">
        <KostApp />
      </RemoteContainer>

      <RemoteContainer title="Hotel Micro App" badge="hotels/HotelApp">
        <HotelApp />
      </RemoteContainer>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import RemoteContainer from '@/components/RemoteContainer.vue'

const KostApp = defineAsyncComponent({
  loader: () => import('kost/KostApp'),
  delay: 200,
  timeout: 20000,
  onError(error, retry, fail, attempts) {
    if (attempts <= 2) {
      retry()
      return
    }

    fail(error)
  }
})

const HotelApp = defineAsyncComponent({
  loader: async () => {
    try {
      const mod = await import('hotels/HotelApp')
      console.log('hotels/HotelApp loaded:', mod)
      return mod
    } catch (error) {
      console.error('Failed loading hotels/HotelApp:', error)
      throw error
    }
  },
  delay: 200,
  timeout: 20000
})

export default {
  name: 'DashboardPage',
  components: {
    RemoteContainer,
    KostApp,
    HotelApp
  }
}
</script>
