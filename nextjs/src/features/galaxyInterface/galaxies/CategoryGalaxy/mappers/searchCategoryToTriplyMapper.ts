import { EnumTriplyrecordType } from 'src/generated/graphql'
import { SEARCH_CATEGORIES, SearchCategory } from '../../../../shared/utils/categories'

export function searchCategoryToTriplyCategory(
  category: SearchCategory
): EnumTriplyrecordType | undefined {
  switch (category) {
    case SEARCH_CATEGORIES.all:
      return undefined
    case SEARCH_CATEGORIES.stories:
      return undefined
    case SEARCH_CATEGORIES.people:
      return EnumTriplyrecordType.People
    case SEARCH_CATEGORIES.objects:
      return EnumTriplyrecordType.Object
    case SEARCH_CATEGORIES.archives:
      return EnumTriplyrecordType.Archive
    case SEARCH_CATEGORIES.publications:
      return EnumTriplyrecordType.Publication
    default:
      return undefined
  }
}
