<template>
  <div class="page-stack">
    <section class="hero-card">
      <div>
        <p class="hero-card__eyebrow">Webpack 5 Module Federation</p>
        <h2>Dashboard Host yang dibangun dengan Vue CLI</h2>
        <p>
          Halaman ini memuat remote <strong>mfe-kost-v2</strong> dari URL
          <code>http://127.0.0.1:5003/remoteEntry.js</code> menggunakan host berbasis Vue CLI.
        </p>
      </div>
    </section>

    <RemoteContainer title="Kost Micro App" badge="kost/KostApp">
      <KostApp />
    </RemoteContainer>
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

export default {
  name: 'DashboardPage',
  components: {
    RemoteContainer,
    KostApp
  }
}
</script>
