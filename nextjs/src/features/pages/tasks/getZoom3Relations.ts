import { CATEGORIES, Category } from '@/features/shared/utils/categories'
import { getZoom3Queries } from './zoom3Config'
import { ArchivesRelationsQuery, Sdk } from 'src/generated/graphql'

export type Zoom3Relations = ArchivesRelationsQuery['relations']

export async function getZoom3RelationsTask({
  type,
  id,
  locale,
  api,
}: {
  type: Category
  id: string
  locale: string
  api: Sdk
}) {
  try {
    const configByType = getZoom3Queries(type, api)

    if (type === CATEGORIES.stories) {
      return await api?.StoriesRelations({ id, lang: locale })
    } else {
      return await configByType?.relationsQuery?.({ id, lang: locale })
    }
  } catch (e) {
    console.log(e, 'Error accured in zoom level 3 task')
  }
}
