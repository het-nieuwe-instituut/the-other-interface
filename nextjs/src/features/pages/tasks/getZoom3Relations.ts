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
    //return await api?.StoriesRelations({ id, lang: locale, page })
    // const configByTypeStrapi = getZoom3StrapiQueries(type, api)

    if (isStoryCategory(type)) {
      // return await configByTypeStrapi?.relationsQuery({ id, lang: locale, page }) // add a config here to do 4 queries instead of 1 - one for

      return await api?.StoriesRelations({ id, lang: locale, page })
      // const configByTypeObjects = getZoom3CountQueries(CATEGORIES.objects, api)
      // const configByTypePeople = getZoom3CountQueries(CATEGORIES.people, api)
      // const configByTypePublications = getZoom3CountQueries(CATEGORIES.publications, api)
      // const configByTypeArchives = getZoom3CountQueries(CATEGORIES.archives, api)
    } else {
      return await configByType?.relationsQuery?.({ id, lang: locale, page })
    }
  } catch (e) {
    console.log(e, 'Error accured in zoom level 3 task')
  }
}
