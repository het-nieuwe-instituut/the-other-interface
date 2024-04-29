import { Category, isStoryCategory } from '@/features/shared/utils/categories'
import { getZoom3Queries } from './zoom3Config'
import { ArchivesRelationsQuery, Sdk } from 'src/generated/graphql'

export type Zoom3Relations = ArchivesRelationsQuery['relations']

export async function getZoom3RelationsTask({
  type,
  id,
  page = 1,
  locale,
  api,
  maxPages,
}: {
  type: Category
  id: string
  page: number
  locale: string
  api: Sdk
  maxPages: number
}) {
  try {
    const configByType = getZoom3Queries(type, api)

    if (isStoryCategory(type)) {
      const currentData = await api?.StoriesRelations({ id, lang: locale, page })
      if (page === maxPages) {
        return { currentData, nextData: { relations: [] } }
      }
      const nextPage = page === maxPages ? maxPages : page + 1
      const nextData = await api?.StoriesRelations({ id, lang: locale, page: nextPage })

      return { currentData, nextData }
    } else {
      const currentData = await configByType?.relationsQuery?.({ id, lang: locale, page })
      if (page === maxPages) {
        return { currentData, nextData: { relations: [] } }
      }
      const nextPage = page === maxPages ? maxPages : page + 1
      const nextData = await configByType?.relationsQuery?.({ id, lang: locale, page: nextPage })

      return { currentData, nextData }
    }
  } catch (e) {
    console.log(e, 'Error accured in zoom level 3 task')
  }
}
