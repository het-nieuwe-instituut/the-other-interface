import { EntityNames } from 'src/generated/graphql'

export function mapCategoryToTriplyEnum(type: string): EntityNames {
  const normalizedType = type.toLowerCase()

  switch (normalizedType) {
    case 'archives':
      return EntityNames.Archives
    case 'publications':
      return EntityNames.Publications
    case 'objects':
      return EntityNames.Objects
    case 'people':
      return EntityNames.People
    default:
      throw new Error(`Unsupported category type: ${type}`)
  }
}
