export const CLOUD_CATEGORIES = ['archives', 'publications', 'objects', 'people'] as const
export const CATEGORIES = [...CLOUD_CATEGORIES, 'stories'] as const

export type CloudCategory = (typeof CLOUD_CATEGORIES)[number]
export type Category = (typeof CATEGORIES)[number]
