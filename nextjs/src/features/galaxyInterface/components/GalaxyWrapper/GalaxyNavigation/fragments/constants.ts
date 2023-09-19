import { CloudCategory } from '@/features/shared/utils/categories'

export const galaxyZooms = {
  1: {
    zoom: 1,
    title: 'collection',
    alignItems: 'flex-start',
    link: () => '/',
  },
  2: {
    zoom: 2,
    title: 'category',
    alignItems: 'center',
    link: (category: CloudCategory) => `/landingpage?category=${category}`,
  },
  3: {
    zoom: 3,
    title: 'detail',
    alignItems: 'flex-end',
  },
} as const

export type GalaxyZoom = (typeof galaxyZooms)[keyof typeof galaxyZooms]
