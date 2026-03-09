<template>
  <div class="page-stack">
    <section class="hero-card">
      <div>
        <p class="hero-card__eyebrow">Dedicated Route</p>
        <h2>Halaman Kost</h2>
        <p>
          Route ini menampilkan remote yang sama seperti pada dashboard, tetapi dalam halaman terpisah.
        </p>
      </div>
    </section>

    <RemoteContainer title="Kost Page" badge="Loaded from mfe-kost-v2">
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
  name: 'KostPage',
  components: {
    RemoteContainer,
    KostApp
  }
}
</script>
