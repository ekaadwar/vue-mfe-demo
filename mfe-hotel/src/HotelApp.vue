<template>
  <section class="wrap">
    <header class="head">
      <h2>🏨 Show Hotel</h2>
      <input v-model.trim="q" placeholder="Cari hotel..." />
    </header>

    <div class="grid">
      <article v-for="h in filtered" :key="h.id" class="card">
        <div class="title">{{ h.name }}</div>
        <div class="meta">{{ h.city }} • ⭐ {{ h.rating }}</div>
        <div class="price">Rp {{ h.price.toLocaleString('id-ID') }}/malam</div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const q = ref('')

const hotels = ref([
  { id: 1, name: 'Grand Nusantara', city: 'Jakarta', rating: 4.6, price: 850000 },
  { id: 2, name: 'Ocean View Resort', city: 'Bali', rating: 4.8, price: 1750000 },
  { id: 3, name: 'Bandung City Stay', city: 'Bandung', rating: 4.3, price: 620000 },
  { id: 4, name: 'Surabaya Business Hotel', city: 'Surabaya', rating: 4.2, price: 540000 }
])

const filtered = computed(() => {
  const needle = q.value.toLowerCase()
  if (!needle) return hotels.value
  return hotels.value.filter((x) => `${x.name} ${x.city}`.toLowerCase().includes(needle))
})
</script>

<style scoped>
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
