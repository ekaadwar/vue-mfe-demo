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
        <div class="meta">{{ item.city }} • ⭐ {{ item.rating }}</div>
        <div class="price">Rp {{ item.price.toLocaleString('id-ID') }}/malam</div>
        <RouterLink :to="`/hotel/${item.id}`">Detail</RouterLink>
      </article>
    </div>

    <div v-if="showCreateForm" class="modal">
      <div @click="toggleCreateForm" class="outer-layer" />
      <div class="inner-layer">
        <div class="head">
          <button @click="toggleCreateForm">x</button>
          <div class="title">Add Hotel</div>
        </div>
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
            <input v-model="createFormInput.price" type="number" />
          </div>
          <div class="input-number">
            <label>Rating : </label>
            <input v-model="createFormInput.rating" type="number" />
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
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useHotelsStore, type Hotel } from '../../../stores/hotels'
import { v4 as uuidv4 } from 'uuid'

type FormType = {
  name: string
  city: string
  rating: number
  price: number
  description: string
}

const hotelStore = useHotelsStore()

const showCreateForm = ref<boolean>(false)
const createFormInput = ref<FormType>({
  name: '',
  city: '',
  rating: 0,
  price: 0,
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
      city: '',
      rating: 0,
      price: 0,
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
  console.log({ id })
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
.modal {
  /* display: none; */
  display: flex;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
}
.modal .outer-layer {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
}
.modal .inner-layer {
  background-color: white;
  min-width: 300px;
  border-radius: 10px;
  z-index: 1;
  box-sizing: border-box;
  overflow: hidden;
}
.modal .inner-layer .head {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;
}
.modal .inner-layer .head button {
  z-index: 1;
  align-self: end;
}

.modal .inner-layer .head .title {
  margin: 0 auto;
  width: 100%;
  text-align: center;
  top: 0;
  box-sizing: border-box;
}
.modal .inner-layer .body {
  padding: 8px 20px 40px 20px;
}
.modal .inner-layer .body .action {
  display: flex;
  justify-content: space-between;
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
