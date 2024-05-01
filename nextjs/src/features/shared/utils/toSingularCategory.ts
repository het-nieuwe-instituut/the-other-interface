import { SearchCategory } from './categories'

export function toSingularCategory(plural: SearchCategory) {
  const pluralToSingular = {
    objects: 'object',
    archives: 'archive',
    people: 'person',
    publications: 'publication',
    stories: 'story',
    all: 'all',
  }

  return pluralToSingular[plural]
}
