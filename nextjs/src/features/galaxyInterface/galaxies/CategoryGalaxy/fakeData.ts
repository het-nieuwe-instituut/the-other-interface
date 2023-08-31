import { CloudCategory } from '@/features/shared/types/categories'

export const fakeData = [
  {
    id: 1,
    title: 'Only Surviving Model',
    image: 'https://picsum.photos/500/500',
  },
  {
    id: 12,
    title: 'Monument on the Dam',
    image: 'https://picsum.photos/104/160',
  },
  {
    id: 15,
    title: 'The minimum dwelling',
    image: 'https://picsum.photos/104/160',
  },
  {
    id: 11,
    title: 'Collecting Other Types Types',
    image: 'https://picsum.photos/250/100',
  },
  {
    id: 17,
    title: 'Architect Portrait',
    image: 'https://picsum.photos/104/160',
  },
  {
    id: 19,
    title: 'The rolled-up model',
    image: 'https://picsum.photos/500/500',
  },
  {
    id: 21,
    title: 'Monument on the Dam Types',
    image: 'https://picsum.photos/104/160',
  },
  {
    id: 31,
    title: 'The minimum dwelling',
    image: 'https://picsum.photos/104/160',
  },
  {
    id: 41,
    title: 'Collecting Other Types',
    image: 'https://picsum.photos/150/100',
  },
  {
    id: 51,
    title: 'Architect Portrait',
    image: 'https://picsum.photos/104/160',
  },
  {
    id: 61,
    title: 'Van Nellefabriek',
    image: 'https://picsum.photos/500/500',
  },
  {
    id: 101,
    title: 'Architect Portrait Types',
    image: 'https://picsum.photos/215/136',
  },
]

export const fakePublications: ((typeof fakeData)[number] & {
  categoryType: CloudCategory
})[] = fakeData.map(record => ({ ...record, categoryType: 'publications' }))
