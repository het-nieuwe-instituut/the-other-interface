export const CLOUD_CATEGORIES = {
  archives: 'archives',
  publications: 'publications',
  objects: 'objects',
  people: 'people',
} as const

export const CATEGORIES = { ...CLOUD_CATEGORIES, stories: 'stories' } as const

export type CloudCategory = (typeof CLOUD_CATEGORIES)[keyof typeof CLOUD_CATEGORIES]
export type Category = (typeof CATEGORIES)[keyof typeof CATEGORIES]
