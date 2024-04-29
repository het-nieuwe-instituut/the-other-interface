import {
  ArchivesRecordRelationsCountQuery,
  ArchivesRelationsQuery,
  ObjectRecordRelationsCountQuery,
  PeopleRecordRelationsCountQuery,
  PublicationsRecordRelationsCountQuery,
  Sdk,
} from 'src/generated/graphql'
import { getZoom3PaginatedQueries } from './zoom3PaginatedConfig'
import {
  CATEGORIES,
  CATEGORIES_TO_ENTITY_MAPPER,
  Category,
} from '@/features/shared/utils/categories'

export type Zoom3Relations = ArchivesRelationsQuery['relations']

export async function getPaginatedRelationsTask({
  type,
  id,
  locale,
  api,
  page,
  category,
}: {
  type: Category
  id: string
  locale: string
  api: Sdk
  page: number
  category: Category
}) {
  try {
    if (category === CATEGORIES.publications) {
      const configByTypePublications = getZoom3PaginatedQueries(CATEGORIES.publications, api)
      const publications = await configByTypePublications?.paginatedRelationsQuery?.({
        id,
        type: CATEGORIES_TO_ENTITY_MAPPER[type],
        lang: locale,
        page,
        pageSize: 5,
      })
      const publicationsCount = (await configByTypePublications?.relationsCount?.({
        id,
        type: CATEGORIES_TO_ENTITY_MAPPER[type],
        lang: locale,
      })) as PublicationsRecordRelationsCountQuery
      return {
        ...publications,
        total: publicationsCount?.publicationsRecordRelationsCount?.[0].total ?? '0',
      }
    }
    if (category === CATEGORIES.people) {
      const configByTypePeople = getZoom3PaginatedQueries(CATEGORIES.people, api)
      const people = await configByTypePeople?.paginatedRelationsQuery?.({
        id,
        type: CATEGORIES_TO_ENTITY_MAPPER[type],
        lang: locale,
        page,
        pageSize: 5,
      })
      const peopleCount = (await configByTypePeople?.relationsCount?.({
        id,
        type: CATEGORIES_TO_ENTITY_MAPPER[type],
        lang: locale,
      })) as PeopleRecordRelationsCountQuery
      return { ...people, total: peopleCount?.peopleRecordRelationsCount?.[0].total ?? '0' }
    }
    if (category === CATEGORIES.objects) {
      const configByTypeObjects = getZoom3PaginatedQueries(CATEGORIES.objects, api)
      const objects = await configByTypeObjects?.paginatedRelationsQuery?.({
        id,
        type: CATEGORIES_TO_ENTITY_MAPPER[type],
        lang: locale,
        page,
        pageSize: 5,
      })
      const objectsCount = (await configByTypeObjects?.relationsCount?.({
        id,
        type: CATEGORIES_TO_ENTITY_MAPPER[type],
        lang: locale,
      })) as ObjectRecordRelationsCountQuery
      return { ...objects, total: objectsCount?.objectRecordRelationsCount?.[0].total ?? '0' }
    }

    if (category === CATEGORIES.archives) {
      const configByTypeArchives = getZoom3PaginatedQueries(CATEGORIES.archives, api)
      const archives = await configByTypeArchives?.paginatedRelationsQuery?.({
        id,
        type: CATEGORIES_TO_ENTITY_MAPPER[type],
        lang: locale,
        page,
        pageSize: 5,
      })
      const archivesCount = (await configByTypeArchives?.relationsCount?.({
        id,
        type: CATEGORIES_TO_ENTITY_MAPPER[type],
        lang: locale,
      })) as ArchivesRecordRelationsCountQuery
      return { ...archives, total: archivesCount?.archivesRecordRelationsCount?.[0].total ?? '0' }
    }
  } catch (e) {
    console.log(e, 'Error accured in zoom level 3 task')
  }
}
