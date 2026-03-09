<template>
  <div class="page-stack">
    <section class="hero-card">
      <div>
        <p class="hero-card__eyebrow">Dedicated Route</p>
        <h2>Halaman Hotel</h2>
        <p>
          Route ini menampilkan remote hotel dari project <strong>mfe-hotel</strong> yang dibangun
          menggunakan Vite.
        </p>
      </div>
    </section>

    <RemoteContainer title="Hotel Page" badge="hotels/HotelApp">
      <HotelApp />
    </RemoteContainer>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import RemoteContainer from '@/components/RemoteContainer.vue'

const HotelApp = defineAsyncComponent({
  loader: () => import('hotels/HotelApp'),
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
  name: 'HotelPage',
  components: {
    RemoteContainer,
    HotelApp
  }
}
</script>
