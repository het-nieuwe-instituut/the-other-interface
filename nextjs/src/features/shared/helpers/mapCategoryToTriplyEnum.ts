import { EnumTriplyrecordType } from 'src/generated/graphql'

export function mapCategoryToTriplyEnum(type: string): EnumTriplyrecordType {
  const normalizedType = type.toLowerCase()

  switch (normalizedType) {
    case 'archives':
      return EnumTriplyrecordType.Archive
    case 'publications':
      return EnumTriplyrecordType.Publication
    case 'objects':
      return EnumTriplyrecordType.Object
    case 'people':
      return EnumTriplyrecordType.People
    default:
      throw new Error(`Unsupported category type: ${type}`)
  }
}
