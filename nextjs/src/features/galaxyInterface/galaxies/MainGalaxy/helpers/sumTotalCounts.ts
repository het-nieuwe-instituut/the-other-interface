import { TotalCounterQuery } from 'src/generated/graphql'

export function sumTotalCounts(response: TotalCounterQuery): number {
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

  return totalSum
}
