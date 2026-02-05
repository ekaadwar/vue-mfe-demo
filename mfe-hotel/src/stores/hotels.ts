import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export interface HotelRaw {
  name: string
  city: string
  rating: number
  price: number
  description: string
}

export interface Hotel extends HotelRaw {
  id: string
}

export type HotelsType = {
  hotels: Hotel[]
}

const seedHotels: Hotel[] = [
  {
    id: '1b55d2b0-f86c-469b-9998-2c2831be2590',
    name: 'Grand Nusantara',
    city: 'Jakarta',
    rating: 4.6,
    price: 850000,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur nibh pharetra odio fermentum, eget ullamcorper orci placerat. Cras sit amet euismod quam. Nunc hendrerit facilisis tempor. Donec et libero a ex venenatis cursus. Ut eu massa nibh. Ut lobortis mauris non quam gravida luctus. Nunc finibus posuere arcu vitae interdum. Sed faucibus pretium elit porttitor egestas. Aliquam in sapien ornare, aliquam augue at, accumsan ligula. Proin lacinia dignissim augue sit amet pharetra. Aliquam elementum ex eu dolor tempus scelerisque. Vivamus gravida egestas urna, nec condimentum turpis sollicitudin a. Ut quis dolor id turpis tempus pretium sed eget mi. Sed vel diam est. Donec sapien eros, sodales at gravida at, vestibulum at arcu. Phasellus ut felis nisl.'
  },
  {
    id: '67e16336-3168-4471-a730-096b04aa1551',
    name: 'Ocean View Resort',
    city: 'Bali',
    rating: 4.8,
    price: 1750000,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur nibh pharetra odio fermentum, eget ullamcorper orci placerat. Cras sit amet euismod quam. Nunc hendrerit facilisis tempor. Donec et libero a ex venenatis cursus. Ut eu massa nibh. Ut lobortis mauris non quam gravida luctus. Nunc finibus posuere arcu vitae interdum. Sed faucibus pretium elit porttitor egestas. Aliquam in sapien ornare, aliquam augue at, accumsan ligula. Proin lacinia dignissim augue sit amet pharetra. Aliquam elementum ex eu dolor tempus scelerisque. Vivamus gravida egestas urna, nec condimentum turpis sollicitudin a. Ut quis dolor id turpis tempus pretium sed eget mi. Sed vel diam est. Donec sapien eros, sodales at gravida at, vestibulum at arcu. Phasellus ut felis nisl.'
  },
  {
    id: '0eff2821-824c-44ef-89b3-3fc9c8a4eb9c',
    name: 'Bandung City Stay',
    city: 'Bandung',
    rating: 4.3,
    price: 620000,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur nibh pharetra odio fermentum, eget ullamcorper orci placerat. Cras sit amet euismod quam. Nunc hendrerit facilisis tempor. Donec et libero a ex venenatis cursus. Ut eu massa nibh. Ut lobortis mauris non quam gravida luctus. Nunc finibus posuere arcu vitae interdum. Sed faucibus pretium elit porttitor egestas. Aliquam in sapien ornare, aliquam augue at, accumsan ligula. Proin lacinia dignissim augue sit amet pharetra. Aliquam elementum ex eu dolor tempus scelerisque. Vivamus gravida egestas urna, nec condimentum turpis sollicitudin a. Ut quis dolor id turpis tempus pretium sed eget mi. Sed vel diam est. Donec sapien eros, sodales at gravida at, vestibulum at arcu. Phasellus ut felis nisl.'
  },
  {
    id: 'fc24afcc-65c4-49b3-92c1-e64cec8caac5',
    name: 'Surabaya Business Hotel',
    city: 'Surabaya',
    rating: 4.2,
    price: 540000,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur nibh pharetra odio fermentum, eget ullamcorper orci placerat. Cras sit amet euismod quam. Nunc hendrerit facilisis tempor. Donec et libero a ex venenatis cursus. Ut eu massa nibh. Ut lobortis mauris non quam gravida luctus. Nunc finibus posuere arcu vitae interdum. Sed faucibus pretium elit porttitor egestas. Aliquam in sapien ornare, aliquam augue at, accumsan ligula. Proin lacinia dignissim augue sit amet pharetra. Aliquam elementum ex eu dolor tempus scelerisque. Vivamus gravida egestas urna, nec condimentum turpis sollicitudin a. Ut quis dolor id turpis tempus pretium sed eget mi. Sed vel diam est. Donec sapien eros, sodales at gravida at, vestibulum at arcu. Phasellus ut felis nisl.'
  }
]

export const useHotelsStore = defineStore('hotelsStore', {
  state: (): HotelsType => ({
    hotels: seedHotels
  }),
  actions: {
    createHotel(params: HotelRaw) {
      const input: Hotel = {
        id: uuidv4(),
        ...params
      }
      this.hotels.push(input)
      console.log({ input })
    }
  }
})
