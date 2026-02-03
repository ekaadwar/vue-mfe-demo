<template>
  <section class="wrap">
    <header class="head">
      <h2>🏨 Show Hotel</h2>
      <input v-model.trim="q" placeholder="Cari hotel..." />
    </header>

    <div class="grid">
      <article v-for="item in filtered" :key="item.id" class="card">
        <div class="title">{{ item.name }}</div>
        <div class="meta">{{ item.city }} • ⭐ {{ item.rating }}</div>
        <div class="price">Rp {{ item.price.toLocaleString('id-ID') }}/malam</div>
        <RouterLink :to="`/hotel/${item.id}`">Detail</RouterLink>
      </article>
    </div>
  </section>

  <main class="main">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useHotelsStore, type Hotel } from '../../../stores/hotels'

const hotelStore = useHotelsStore()

const { hotels } = storeToRefs(hotelStore)

const q = ref<string>('')

const filtered = computed<Hotel[]>(() => {
  const needle = q.value.toLowerCase()
  if (!needle) return hotels.value
  return hotels.value.filter((x: Hotel) => `${x.name} ${x.city}`.toLowerCase().includes(needle))
})
</script>

<style scoped>
.main {
  padding: 400px;
}

.wrap {
  padding: 16px;
  font-family: system-ui, Arial;
}
.head {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
}
.head input {
  width: 220px;
  padding: 8px 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
}
.grid {
  margin-top: 12px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
}
.card {
  border: 1px solid #eee;
  border-radius: 14px;
  padding: 12px;
  background: #fff;
  color: #495369;
}
.title {
  font-weight: 700;
}
.meta {
  opacity: 0.75;
  margin-top: 4px;
}
.price {
  margin-top: 10px;
  font-weight: 700;
}
</style>
