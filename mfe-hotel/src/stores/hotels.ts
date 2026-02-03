import { defineStore } from 'pinia'

export type HotelDetail = {
  area: number
  bedType: string
  smoke: boolean
  shower: boolean
  seatingArea: boolean
  bathup: boolean
  view: string
}

export type Hotel = {
  id: string
  name: string
  city: string
  rating: number
  price: number
  detail: HotelDetail
  description: string
}

export type HotelsType = {
  hotels: Hotel[]
}

export const useHotelsStore = defineStore('hotelsStore', {
  state: (): HotelsType => ({
    hotels: [
      {
        id: 'JK-001',
        name: 'Grand Nusantara',
        city: 'Jakarta',
        rating: 4.6,
        price: 850000,
        detail: {
          area: 24,
          bedType: 'big single bed',
          smoke: false,
          shower: true,
          seatingArea: true,
          bathup: true,
          view: 'Monas'
        },
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur nibh pharetra odio fermentum, eget ullamcorper orci placerat. Cras sit amet euismod quam. Nunc hendrerit facilisis tempor. Donec et libero a ex venenatis cursus. Ut eu massa nibh. Ut lobortis mauris non quam gravida luctus. Nunc finibus posuere arcu vitae interdum. Sed faucibus pretium elit porttitor egestas. Aliquam in sapien ornare, aliquam augue at, accumsan ligula. Proin lacinia dignissim augue sit amet pharetra. Aliquam elementum ex eu dolor tempus scelerisque. Vivamus gravida egestas urna, nec condimentum turpis sollicitudin a. Ut quis dolor id turpis tempus pretium sed eget mi. Sed vel diam est. Donec sapien eros, sodales at gravida at, vestibulum at arcu. Phasellus ut felis nisl.'
      },
      {
        id: 'JK-002',
        name: 'Ocean View Resort',
        city: 'Bali',
        rating: 4.8,
        price: 1750000,
        detail: {
          area: 24,
          bedType: 'big single bed',
          smoke: false,
          shower: true,
          seatingArea: true,
          bathup: true,
          view: 'Hindia Ocean'
        },
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur nibh pharetra odio fermentum, eget ullamcorper orci placerat. Cras sit amet euismod quam. Nunc hendrerit facilisis tempor. Donec et libero a ex venenatis cursus. Ut eu massa nibh. Ut lobortis mauris non quam gravida luctus. Nunc finibus posuere arcu vitae interdum. Sed faucibus pretium elit porttitor egestas. Aliquam in sapien ornare, aliquam augue at, accumsan ligula. Proin lacinia dignissim augue sit amet pharetra. Aliquam elementum ex eu dolor tempus scelerisque. Vivamus gravida egestas urna, nec condimentum turpis sollicitudin a. Ut quis dolor id turpis tempus pretium sed eget mi. Sed vel diam est. Donec sapien eros, sodales at gravida at, vestibulum at arcu. Phasellus ut felis nisl.'
      },
      {
        id: 'JK-003',
        name: 'Bandung City Stay',
        city: 'Bandung',
        rating: 4.3,
        price: 620000,
        detail: {
          area: 24,
          bedType: 'big single bed',
          smoke: false,
          shower: true,
          seatingArea: true,
          bathup: true,
          view: 'Bandung City'
        },
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur nibh pharetra odio fermentum, eget ullamcorper orci placerat. Cras sit amet euismod quam. Nunc hendrerit facilisis tempor. Donec et libero a ex venenatis cursus. Ut eu massa nibh. Ut lobortis mauris non quam gravida luctus. Nunc finibus posuere arcu vitae interdum. Sed faucibus pretium elit porttitor egestas. Aliquam in sapien ornare, aliquam augue at, accumsan ligula. Proin lacinia dignissim augue sit amet pharetra. Aliquam elementum ex eu dolor tempus scelerisque. Vivamus gravida egestas urna, nec condimentum turpis sollicitudin a. Ut quis dolor id turpis tempus pretium sed eget mi. Sed vel diam est. Donec sapien eros, sodales at gravida at, vestibulum at arcu. Phasellus ut felis nisl.'
      },
      {
        id: 'JK-004',
        name: 'Surabaya Business Hotel',
        city: 'Surabaya',
        rating: 4.2,
        price: 540000,
        detail: {
          area: 24,
          bedType: 'big single bed',
          smoke: false,
          shower: true,
          seatingArea: true,
          bathup: true,
          view: 'Suramadu Bridge'
        },
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur nibh pharetra odio fermentum, eget ullamcorper orci placerat. Cras sit amet euismod quam. Nunc hendrerit facilisis tempor. Donec et libero a ex venenatis cursus. Ut eu massa nibh. Ut lobortis mauris non quam gravida luctus. Nunc finibus posuere arcu vitae interdum. Sed faucibus pretium elit porttitor egestas. Aliquam in sapien ornare, aliquam augue at, accumsan ligula. Proin lacinia dignissim augue sit amet pharetra. Aliquam elementum ex eu dolor tempus scelerisque. Vivamus gravida egestas urna, nec condimentum turpis sollicitudin a. Ut quis dolor id turpis tempus pretium sed eget mi. Sed vel diam est. Donec sapien eros, sodales at gravida at, vestibulum at arcu. Phasellus ut felis nisl.'
      }
    ]
  })
})
