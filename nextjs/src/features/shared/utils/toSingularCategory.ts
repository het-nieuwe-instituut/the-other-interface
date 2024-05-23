import { Category } from './categories'

export function toSingularCategory(plural: Category) {
  const pluralToSingular = {
    objects: 'object',
    archives: 'archive',
    people: 'person',
    publications: 'publication',
    stories: 'story',
  }

  return pluralToSingular[plural]
}
