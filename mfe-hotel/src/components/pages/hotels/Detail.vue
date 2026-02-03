<template>
  <h1>{{ detailHotel?.name }}</h1>

  <div v-if="detailHotel">
    <p><b>ID : </b>{{ detailHotel.id }}</p>
  </div>

  <p v-else>Hotel Tidak Ditemukan.</p>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useHotelsStore, type Hotel } from '../../../stores/hotels'

const route = useRoute()

const hotelStore = useHotelsStore()
const { hotels } = storeToRefs(hotelStore)

const hotelId = computed(() => {
  console.log({ route })
  const raw = route.params.id
  return Array.isArray(raw) ? raw[0] : (raw?.toString() ?? '')
})

onMounted(() => {
  console.log('detail hotel')
})

const detailHotel = computed<Hotel | undefined>(() =>
  hotels.value.find((item) => item.id === hotelId.value)
)
</script>
