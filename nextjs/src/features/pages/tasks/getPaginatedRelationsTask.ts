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
  pagination,
}: {
  type: Category
  id: string
  locale: string
  api: Sdk
  pagination: PaginationPagesTypes
}) {
  try {
    const configByTypeObjects = getZoom3PaginatedQueries(CATEGORIES.objects, api)
    const configByTypePeople = getZoom3PaginatedQueries(CATEGORIES.people, api)
    const configByTypePublications = getZoom3PaginatedQueries(CATEGORIES.publications, api)
    const configByTypeArchives = getZoom3PaginatedQueries(CATEGORIES.archives, api)

    const people = await configByTypePeople?.paginatedRelationsQuery?.({
      id,
      type: CATEGORIES_TO_ENTITY_MAPPER[type],
      lang: locale,
      page: pagination.people,
      pageSize: 5,
    })
    const objects = await configByTypeObjects?.paginatedRelationsQuery?.({
      id,
      type: CATEGORIES_TO_ENTITY_MAPPER[type],
      lang: locale,
      page: pagination.objects,
      pageSize: 5,
    })
    const publications = await configByTypePublications?.paginatedRelationsQuery?.({
      id,
      type: CATEGORIES_TO_ENTITY_MAPPER[type],
      lang: locale,
      page: pagination.publications,
      pageSize: 5,
    })
    const archives = await configByTypeArchives?.paginatedRelationsQuery?.({
      id,
      type: CATEGORIES_TO_ENTITY_MAPPER[type],
      lang: locale,
      page: pagination.archives,
      pageSize: 5,
    })

    const peopleCount = await configByTypePeople?.relationsCount?.({
      id,
      type: CATEGORIES_TO_ENTITY_MAPPER[type],
      lang: locale,
    })
    const publicationsCount = await configByTypePublications?.relationsCount?.({
      id,
      type: CATEGORIES_TO_ENTITY_MAPPER[type],
      lang: locale,
    })
    const objectsCount = await configByTypeObjects?.relationsCount?.({
      id,
      type: CATEGORIES_TO_ENTITY_MAPPER[type],
      lang: locale,
    })
    const archivesCount = await configByTypeArchives?.relationsCount?.({
      id,
      type: CATEGORIES_TO_ENTITY_MAPPER[type],
      lang: locale,
    })

    console.log('peopleCount', peopleCount)
    console.log('objectsCount', objectsCount)
    console.log('publicationsCount', publicationsCount)
    console.log('archivesCount', archivesCount)

    return [people, objects, publications, archives] // return | but would be better with &
  } catch (e) {
    console.log(e, 'Error accured in zoom level 3 task')
  }
}
