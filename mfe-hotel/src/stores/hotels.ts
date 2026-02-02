import { defineStore } from 'pinia'

export type Hotel = {
  id: number
  name: string
  city: string
  rating: number
  price: number
}

export type HotelsType = {
  hotels: Hotel[]
}

export const useHotelsStore = defineStore('hotelsStore', {
  state: (): HotelsType => ({
    hotels: [
      { id: 1, name: 'Grand Nusantara', city: 'Jakarta', rating: 4.6, price: 850000 },
      { id: 2, name: 'Ocean View Resort', city: 'Bali', rating: 4.8, price: 1750000 },
      { id: 3, name: 'Bandung City Stay', city: 'Bandung', rating: 4.3, price: 620000 },
      { id: 4, name: 'Surabaya Business Hotel', city: 'Surabaya', rating: 4.2, price: 540000 }
    ]
  })
})
