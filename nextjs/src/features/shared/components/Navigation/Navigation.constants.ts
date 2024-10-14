import { CLOUD_CATEGORIES } from '../../utils/categories'

export const categories = [
  { name: 'archives', translationKey: 'archives', category: CLOUD_CATEGORIES.archives },
  { name: 'objects', translationKey: 'objects', category: CLOUD_CATEGORIES.objects },
  { name: 'people', translationKey: 'people', category: CLOUD_CATEGORIES.people },
  { name: 'publications', translationKey: 'publications', category: CLOUD_CATEGORIES.publications },
  { name: 'stories', translationKey: 'stories', category: 'stories' as const },
]

export enum Fonts {
  Times = 'times',
  Impact = 'impact',
}
