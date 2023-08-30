import { EntityNames } from 'src/generated/graphql'
import { CloudCategory } from '../shared/types/categories'

export const CategoryToEntityName: Record<CloudCategory, EntityNames> = {
  publications: EntityNames.Publications,
  people: EntityNames.People,
  objects: EntityNames.Objects,
  archives: EntityNames.Archives,
}
