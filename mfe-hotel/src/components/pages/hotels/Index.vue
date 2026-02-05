<template>
  <section class="wrap">
    <header class="head">
      <h2>🏨 Show Hotel</h2>
      <div class="head-action">
        <input v-model.trim="q" placeholder="Cari hotel..." />
        <button @click="toggleCreateForm">Add Hotel</button>
      </div>
    </header>

    <div class="grid">
      <article v-for="item in filtered" :key="item.id" class="card">
        <div class="title">{{ item.name }}</div>
        <div class="meta">{{ item.city }} • ⭐ {{ item.star }}</div>
        <RouterLink :to="`/hotel/${item.id}`">Detail</RouterLink>
      </article>
    </div>

    <Card :show="showCreateForm" @toggle-show="toggleCreateForm">
      <div class="body">
        <div class="input-text">
          <label>Name : </label>
          <input v-model="createFormInput.name" type="text" />
        </div>
        <div class="input-text">
          <label>City : </label>
          <input v-model="createFormInput.city" type="text" />
        </div>
        <div class="input-number">
          <label>Price : </label>
          <input v-model="createFormInput.star" type="number" />
        </div>
        <div class="input-area">
          <label>Description : </label>
          <textarea v-model="createFormInput.description" rows="3"></textarea>
        </div>
        <div class="action">
          <button @click="toggleCreateForm">Cancel</button>
          <button @click="submitCreate">Submit</button>
        </div>
      </div>
    </Card>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useHotelsStore, type Hotel, type HotelRaw } from '../../../stores/hotels'
import { v4 as uuidv4 } from 'uuid'
import Card from '../../units/card/Card.vue'

const hotelStore = useHotelsStore()

const showCreateForm = ref<boolean>(false)
const createFormInput = ref<HotelRaw>({
  name: '',
  star: 0,
  city: '',
  description: ''
})
const { hotels } = storeToRefs(hotelStore)

const q = ref<string>('')

const filtered = computed<Hotel[]>(() => {
  const needle = q.value.toLowerCase()
  if (!needle) return hotels.value
  return hotels.value.filter((x: Hotel) => `${x.name} ${x.city}`.toLowerCase().includes(needle))
})

watch(showCreateForm, (newVal) => {
  if (!newVal) {
    createFormInput.value = {
      name: '',
      star: 0,
      city: '',
      description: ''
    }
  }
})

const toggleCreateForm = () => {
  showCreateForm.value = !showCreateForm.value
}

const submitCreate = () => {
  hotelStore.createHotel(createFormInput.value)
}

onMounted(() => {
  const id: string = uuidv4()
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
.head-action input,
.head-action button {
  padding: 8px 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
}
.head-action input {
  width: 220px;
  margin-right: 10px;
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
.input-text,
.input-number,
.input-area {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.input-text label,
.input-number label,
.input-area label {
  text-align: left;
}
</style>
