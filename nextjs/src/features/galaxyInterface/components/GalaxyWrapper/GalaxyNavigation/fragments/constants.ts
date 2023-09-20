export const galaxyZooms = [
  {
    zoom: 1,
    title: 'collection',
    alignItems: 'flex-start',
  },
  {
    zoom: 2,
    title: 'category',
    alignItems: 'center',
  },
  {
    zoom: 3,
    title: 'detail',
    alignItems: 'flex-end',
  },
] as const

export type GalaxyZoom = (typeof galaxyZooms)[number]
