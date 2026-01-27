<template>
  <div class="grid">
    <section class="panel">
      <h3 class="title">Hotel Micro App</h3>
      <component :is="HotelApp" />
    </section>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

const HotelApp = defineAsyncComponent({
  loader: () => import('hotel/HotelApp'),
  timeout: 15000
})
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.panel {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 12px;
}
.title {
  margin: 0 0 10px;
}
@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
