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
}: {
  type: Category
  id: string
  page: number
  locale: string
  api: Sdk
}) {
  try {
    const configByType = getZoom3Queries(type, api)

    if (isStoryCategory(type)) {
      return await api?.StoriesRelations({ id, lang: locale, page })
    } else {
      return await configByType?.relationsQuery?.({ id, lang: locale, page })
    }
  } catch (e) {
    console.log(e, 'Error accured in zoom level 3 task')
  }
}
