import { SEARCH_CATEGORIES, SearchCategory } from '@/features/shared/utils/categories'
import { TotalCounterQuery } from 'src/generated/graphql'

export function sumTotalCounts(
  response: TotalCounterQuery,
  category: SearchCategory | null
): number {
  const { stories, archives, objects, people, publications } = response

  const parseTotal = (total: string | number | null | undefined): number => {
    if (!total && total !== '0') {
      return 0
    }
    return parseInt(total.toString(), 10)
  }

  const totalSum =
    parseTotal(stories.meta?.pagination?.total) +
    parseTotal(archives.total) +
    parseTotal(objects.total) +
    parseTotal(people.total) +
    parseTotal(publications.total)

  if (!category) return totalSum

  if (category === SEARCH_CATEGORIES.stories) {
    return parseTotal(stories.meta?.pagination?.total)
  }

  if (category === SEARCH_CATEGORIES.archives) {
    return parseTotal(archives.total)
  }

  if (category === SEARCH_CATEGORIES.objects) {
    return parseTotal(objects.total)
  }

  if (category === SEARCH_CATEGORIES.people) {
    return parseTotal(people.total)
  }

  if (category === SEARCH_CATEGORIES.publications) {
    return parseTotal(publications.total)
  }

  return totalSum
}
