<template>
  <div class="page-stack">
    <section class="hero-card">
      <div>
        <p class="hero-card__eyebrow">Dedicated Route</p>
        <h2>Detail Hotel</h2>
        <p>
          Route ini dipakai ketika user menekan tombol <strong>Detail</strong> dari remote hotel.
        </p>
      </div>
    </section>

    <RemoteContainer title="Hotel Detail" badge="hotels/HotelDetail">
      <HotelDetail />
    </RemoteContainer>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import RemoteContainer from '@/components/RemoteContainer.vue'

const HotelDetail = defineAsyncComponent({
  loader: () => import('hotels/HotelDetail'),
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
  name: 'HotelDetailPage',
  components: {
    RemoteContainer,
    HotelDetail
  }
}
</script>
