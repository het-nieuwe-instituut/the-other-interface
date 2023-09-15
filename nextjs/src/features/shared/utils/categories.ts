import { ObjectValues } from '../types/transformations'

export const CLOUD_CATEGORIES = {
  people: 'people',
  objects: 'objects',
  publications: 'publications',
  archives: 'archives',
} as const

export const CATEGORIES = { ...CLOUD_CATEGORIES, stories: 'stories' } as const

export type CloudCategory = ObjectValues<typeof CLOUD_CATEGORIES>
export type Category = (typeof CATEGORIES)[keyof typeof CATEGORIES]
