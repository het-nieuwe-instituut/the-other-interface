import { EntityNames } from 'src/generated/graphql'

export const CLOUD_CATEGORIES = {
  archives: 'archives',
  publications: 'publications',
  objects: 'objects',
  people: 'people',
} as const

export const CLOUD_CATEGORIES_ARRAY = Object.values(CLOUD_CATEGORIES)

export const CATEGORIES = { ...CLOUD_CATEGORIES, stories: 'stories' } as const

export const SEARCH_CATEGORIES = { ...CATEGORIES, all: 'all' } as const

export const SEARCH_CATEGORIES_ARRAY = Object.values(SEARCH_CATEGORIES)

export type SearchCategory = (typeof SEARCH_CATEGORIES)[keyof typeof SEARCH_CATEGORIES]

export type CloudCategory = (typeof CLOUD_CATEGORIES)[keyof typeof CLOUD_CATEGORIES]
export type Category = (typeof CATEGORIES)[keyof typeof CATEGORIES]

export const CATEGORIES_TO_ENTITY_MAPPER = {
  [CATEGORIES.stories]: EntityNames.Stories,
  [CATEGORIES.archives]: EntityNames.Archives,
  [CATEGORIES.publications]: EntityNames.Publications,
  [CATEGORIES.objects]: EntityNames.Objects,
  [CATEGORIES.people]: EntityNames.People,
} as const

export const isStoryCategory = (category?: string) => category === CATEGORIES.stories

export const isCloudCategory = (category?: string) => {
  if (!category) return false

  return (CLOUD_CATEGORIES_ARRAY as string[]).includes(category)
}
