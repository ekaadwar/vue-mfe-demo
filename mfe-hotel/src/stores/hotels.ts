import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export interface HotelRaw {
  name: string
  city: string
  star: number
  description: string
}

export type RoomTypeRaw = {
  name: string
  rating: number
  fasilities: string[]
  price: number
}

export type RoomType = {
  id: string
  name: string
  rating: number
  fasilities: string[]
  price: number
}

export interface Hotel extends HotelRaw {
  id: string
  roomType: RoomType[] | null
}

export type HotelsType = {
  hotels: Hotel[]
}

const seedHotels: Hotel[] = [
  {
    id: '1b55d2b0-f86c-469b-9998-2c2831be2590',
    name: 'Aviary Bintaro',
    star: 4,
    city: 'Tangerang',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur nibh pharetra odio fermentum, eget ullamcorper orci placerat. Cras sit amet euismod quam. Nunc hendrerit facilisis tempor. Donec et libero a ex venenatis cursus. Ut eu massa nibh. Ut lobortis mauris non quam gravida luctus. Nunc finibus posuere arcu vitae interdum. Sed faucibus pretium elit porttitor egestas. Aliquam in sapien ornare, aliquam augue at, accumsan ligula. Proin lacinia dignissim augue sit amet pharetra. Aliquam elementum ex eu dolor tempus scelerisque. Vivamus gravida egestas urna, nec condimentum turpis sollicitudin a. Ut quis dolor id turpis tempus pretium sed eget mi. Sed vel diam est. Donec sapien eros, sodales at gravida at, vestibulum at arcu. Phasellus ut felis nisl.',
    roomType: [
      {
        id: '1b55d2b0-f86c-469b-9998-2c2831be2591',
        name: 'Deluxe Twin',
        rating: 5,
        fasilities: ['Area Tempat Duduk', 'Shower', 'Air Panas', 'AC', 'Free Wifi'],
        price: 657361
      },
      {
        id: '1b55d2b0-f86c-469b-9998-2c2831be2592',
        name: 'Luxury Suite',
        rating: 5,
        fasilities: ['1 Double Bed', 'Area Tempat Duduk', 'Shower', 'Air Panas', 'AC', 'Free Wifi'],
        price: 2000000
      }
    ]
  },
  {
    id: '67e16336-3168-4471-a730-096b04aa1551',
    name: 'Ocean View Resort',
    star: 4,
    city: 'Bali',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur nibh pharetra odio fermentum, eget ullamcorper orci placerat. Cras sit amet euismod quam. Nunc hendrerit facilisis tempor. Donec et libero a ex venenatis cursus. Ut eu massa nibh. Ut lobortis mauris non quam gravida luctus. Nunc finibus posuere arcu vitae interdum. Sed faucibus pretium elit porttitor egestas. Aliquam in sapien ornare, aliquam augue at, accumsan ligula. Proin lacinia dignissim augue sit amet pharetra. Aliquam elementum ex eu dolor tempus scelerisque. Vivamus gravida egestas urna, nec condimentum turpis sollicitudin a. Ut quis dolor id turpis tempus pretium sed eget mi. Sed vel diam est. Donec sapien eros, sodales at gravida at, vestibulum at arcu. Phasellus ut felis nisl.',
    roomType: [
      {
        id: '1b55d2b0-f86c-469b-9999-2c2831be2591',
        name: 'Deluxe Twin',
        rating: 5,
        fasilities: ['Area Tempat Duduk', 'Shower', 'Air Panas', 'AC', 'Free Wifi'],
        price: 657361
      },
      {
        id: '1b55d2b0-f86c-469b-9999-2c2831be2592',
        name: 'Luxury Suite',
        rating: 5,
        fasilities: ['1 Double Bed', 'Area Tempat Duduk', 'Shower', 'Air Panas', 'AC', 'Free Wifi'],
        price: 2000000
      }
    ]
  },
  {
    id: '0eff2821-824c-44ef-89b3-3fc9c8a4eb9c',
    name: 'Bandung City Stay',
    star: 4,
    city: 'Bandung',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur nibh pharetra odio fermentum, eget ullamcorper orci placerat. Cras sit amet euismod quam. Nunc hendrerit facilisis tempor. Donec et libero a ex venenatis cursus. Ut eu massa nibh. Ut lobortis mauris non quam gravida luctus. Nunc finibus posuere arcu vitae interdum. Sed faucibus pretium elit porttitor egestas. Aliquam in sapien ornare, aliquam augue at, accumsan ligula. Proin lacinia dignissim augue sit amet pharetra. Aliquam elementum ex eu dolor tempus scelerisque. Vivamus gravida egestas urna, nec condimentum turpis sollicitudin a. Ut quis dolor id turpis tempus pretium sed eget mi. Sed vel diam est. Donec sapien eros, sodales at gravida at, vestibulum at arcu. Phasellus ut felis nisl.',
    roomType: [
      {
        id: '1b55d2b0-f86c-469b-a000-2c2831be2591',
        name: 'Deluxe Twin',
        rating: 5,
        fasilities: ['Area Tempat Duduk', 'Shower', 'Air Panas', 'AC', 'Free Wifi'],
        price: 657361
      },
      {
        id: '1b55d2b0-f86c-469b-a000-2c2831be2592',
        name: 'Luxury Suite',
        rating: 5,
        fasilities: ['1 Double Bed', 'Area Tempat Duduk', 'Shower', 'Air Panas', 'AC', 'Free Wifi'],
        price: 2000000
      }
    ]
  },
  {
    id: 'fc24afcc-65c4-49b3-92c1-e64cec8caac5',
    name: 'Surabaya Business Hotel',
    star: 4,
    city: 'Surabaya',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur nibh pharetra odio fermentum, eget ullamcorper orci placerat. Cras sit amet euismod quam. Nunc hendrerit facilisis tempor. Donec et libero a ex venenatis cursus. Ut eu massa nibh. Ut lobortis mauris non quam gravida luctus. Nunc finibus posuere arcu vitae interdum. Sed faucibus pretium elit porttitor egestas. Aliquam in sapien ornare, aliquam augue at, accumsan ligula. Proin lacinia dignissim augue sit amet pharetra. Aliquam elementum ex eu dolor tempus scelerisque. Vivamus gravida egestas urna, nec condimentum turpis sollicitudin a. Ut quis dolor id turpis tempus pretium sed eget mi. Sed vel diam est. Donec sapien eros, sodales at gravida at, vestibulum at arcu. Phasellus ut felis nisl.',
    roomType: [
      {
        id: '1b55d2b0-f86c-469b-a001-2c2831be2591',
        name: 'Deluxe Twin',
        rating: 5,
        fasilities: ['Area Tempat Duduk', 'Shower', 'Air Panas', 'AC', 'Free Wifi'],
        price: 657361
      },
      {
        id: '1b55d2b0-f86c-469b-a001-2c2831be2592',
        name: 'Luxury Suite',
        rating: 5,
        fasilities: ['1 Double Bed', 'Area Tempat Duduk', 'Shower', 'Air Panas', 'AC', 'Free Wifi'],
        price: 2000000
      }
    ]
  }
]

export const useHotelsStore = defineStore('hotelsStore', {
  state: (): HotelsType => ({
    hotels: seedHotels
  }),
  actions: {
    createHotel(params: HotelRaw) {
      const input: Hotel = {
        ...params,
        id: uuidv4(),
        roomType: null
      }
      this.hotels.push(input)
    }
  }
})
