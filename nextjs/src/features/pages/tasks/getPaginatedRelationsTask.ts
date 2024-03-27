import { ArchivesRelationsQuery, Sdk } from 'src/generated/graphql'
import { getZoom3PaginatedQueries } from './zoom3PaginatedConfig'
import {
  CATEGORIES,
  CATEGORIES_TO_ENTITY_MAPPER,
  Category,
} from '@/features/shared/utils/categories'
import { PaginationPagesTypes } from '@/features/shared/components/Record/RecordTable/usePresenter'

export type Zoom3Relations = ArchivesRelationsQuery['relations']

export async function getPaginatedRelationsTask({
  type,
  id,
  locale,
  api,
  pages,
}: {
  type: Category
  id: string
  locale: string
  api: Sdk
  pages: PaginationPagesTypes
}) {
  console.log('getPaginatedRelationsTask', pages)
  try {
    const configByTypeObjects = getZoom3PaginatedQueries(CATEGORIES.objects, api)
    const configByTypePeople = getZoom3PaginatedQueries(CATEGORIES.people, api)
    const configByTypePublications = getZoom3PaginatedQueries(CATEGORIES.publications, api)
    const configByTypeArchives = getZoom3PaginatedQueries(CATEGORIES.archives, api)

    const people = await configByTypePeople?.paginatedRelationsQuery?.({
      id,
      type: CATEGORIES_TO_ENTITY_MAPPER[type],
      lang: locale,
      page: pages.people,
      pageSize: 5,
    })
    const objects = await configByTypeObjects?.paginatedRelationsQuery?.({
      id,
      type: CATEGORIES_TO_ENTITY_MAPPER[type],
      lang: locale,
      page: pages.objects,
      pageSize: 5,
    })
    const publications = await configByTypePublications?.paginatedRelationsQuery?.({
      id,
      type: CATEGORIES_TO_ENTITY_MAPPER[type],
      lang: locale,
      page: pages.publications,
      pageSize: 5,
    })
    const archives = await configByTypeArchives?.paginatedRelationsQuery?.({
      id,
      type: CATEGORIES_TO_ENTITY_MAPPER[type],
      lang: locale,
      page: pages.archives,
      pageSize: 5,
    })
    return [people, objects, publications, archives] // return | but would be better with &
  } catch (e) {
    console.log(e, 'Error accured in zoom level 3 task')
  }
}
