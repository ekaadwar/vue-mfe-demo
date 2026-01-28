<template>
  <div class="grid">
    <section class="panel">
      <h3 class="title">Hotel Micro App</h3>
      <HotelApp />
    </section>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

const HotelApp = defineAsyncComponent(() => import('hotels/HotelApp'))

// const HotelApp = defineAsyncComponent({
//   loader: () =>
//     new Promise((resolve) => {
//       resolve(import('hotels/HotelApp.js'))
//     }, 2000),
//   onError: (error, retry, fail, attempts) => {
//     console.log('-- Failed to load component : ', error)
//     console.log('-- Attempts : ', attempts)

//     if (attempts >= 3) {
//       return fail()
//     }

//     return retry()
//   }
// })
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
  color: slategray;
}
@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
