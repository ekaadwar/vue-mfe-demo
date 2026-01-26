<template>
  <section class="wrap">
    <header class="head">
      <h2>🏠 Show Coliving</h2>

      <select v-model="city">
        <option value="">Semua kota</option>
        <option>Jakarta</option>
        <option>Bandung</option>
        <option>Bali</option>
      </select>
    </header>

    <div class="grid">
      <article v-for="c in filtered" :key="c.id" class="card">
        <div class="title">{{ c.name }}</div>
        <div class="meta">{{ c.city }} • {{ c.roomType }}</div>
        <ul class="chips">
          <li v-for="f in c.facilities" :key="f">{{ f }}</li>
        </ul>
        <div class="price">Rp {{ c.monthly.toLocaleString('id-ID') }}/bulan</div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const city = ref('')

const colivings = ref([
  {
    id: 1,
    name: 'CoHaus Kemang',
    city: 'Jakarta',
    roomType: 'Private',
    facilities: ['WiFi', 'Laundry', 'Kitchen'],
    monthly: 3200000
  },
  {
    id: 2,
    name: 'Dago Living Space',
    city: 'Bandung',
    roomType: 'Private',
    facilities: ['WiFi', 'Cowork', 'Gym'],
    monthly: 2800000
  },
  {
    id: 3,
    name: 'Seminyak Co-Live',
    city: 'Bali',
    roomType: 'Shared',
    facilities: ['WiFi', 'Pool', 'Kitchen'],
    monthly: 3500000
  }
])

const filtered = computed(() => {
  if (!city.value) return colivings.value
  return colivings.value.filter((x) => x.city === city.value)
})
</script>

<style scoped>
.wrap {
  padding: 16px;
  font-family: system-ui, Arial;
}
.head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.head select {
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
.chips {
  list-style: none;
  padding: 0;
  margin: 10px 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.chips li {
  font-size: 12px;
  padding: 4px 8px;
  border: 1px solid #eee;
  border-radius: 999px;
}
.price {
  margin-top: 10px;
  font-weight: 700;
}
</style>
