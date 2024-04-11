import {
  CATEGORIES,
  CATEGORIES_TO_ENTITY_MAPPER,
  CLOUD_CATEGORIES,
  Category,
} from '@/features/shared/utils/categories'
import {
  ArchivesRecordRelationsCountQuery,
  ArchivesRelationsQuery,
  ObjectRecordRelationsCountQuery,
  PeopleRecordRelationsCountQuery,
  PublicationsRecordRelationsCountQuery,
  Sdk,
} from 'src/generated/graphql'
import { getZoom3CountQueries } from './Zoom3CountConfig'

export type Zoom3Relations = ArchivesRelationsQuery['relations']

export async function getZoom3CountsTask({
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
    const configByTypeObjects = getZoom3CountQueries(CATEGORIES.objects, api)
    const configByTypePeople = getZoom3CountQueries(CATEGORIES.people, api)
    const configByTypePublications = getZoom3CountQueries(CATEGORIES.publications, api)
    const configByTypeArchives = getZoom3CountQueries(CATEGORIES.archives, api)

    const allCounts = await Promise.all([
      configByTypePeople?.relationsCount?.({
        id,
        type: CATEGORIES_TO_ENTITY_MAPPER[type],
        lang: locale,
      }) as PeopleRecordRelationsCountQuery,
      configByTypePublications?.relationsCount?.({
        id,
        type: CATEGORIES_TO_ENTITY_MAPPER[type],
        lang: locale,
      }) as PublicationsRecordRelationsCountQuery,
      configByTypeObjects?.relationsCount?.({
        id,
        type: CATEGORIES_TO_ENTITY_MAPPER[type],
        lang: locale,
      }) as ObjectRecordRelationsCountQuery,
      configByTypeArchives?.relationsCount?.({
        id,
        type: CATEGORIES_TO_ENTITY_MAPPER[type],
        lang: locale,
      }) as ArchivesRecordRelationsCountQuery,
      api?.StoriesRelationForRecord({
        id,
        type: CATEGORIES_TO_ENTITY_MAPPER[type],
        lang: locale,
      }),
    ])

    const totalPages = Math.max(
      parseInt(allCounts[0]?.peopleRecordRelationsCount?.[0]?.total ?? '1'),
      parseInt(allCounts[1]?.publicationsRecordRelationsCount?.[0]?.total ?? '1'),
      parseInt(allCounts[2]?.objectRecordRelationsCount?.[0]?.total ?? '1'),
      parseInt(allCounts[3]?.archivesRecordRelationsCount?.[0]?.total ?? '1'),
      allCounts[4]?.zoomLevel3StoriesRelationsForRecord?.total ?? 1
    )

    const allRelationTotals = {
      [CLOUD_CATEGORIES.people]: parseInt(
        allCounts[0]?.peopleRecordRelationsCount?.[0]?.total ?? '0'
      ),
      [CLOUD_CATEGORIES.publications]: parseInt(
        allCounts[1]?.publicationsRecordRelationsCount?.[0]?.total ?? '0'
      ),
      [CLOUD_CATEGORIES.objects]: parseInt(
        allCounts[2]?.objectRecordRelationsCount?.[0]?.total ?? '0'
      ),
      [CLOUD_CATEGORIES.archives]: parseInt(
        allCounts[3]?.archivesRecordRelationsCount?.[0]?.total ?? '0'
      ),
      [CATEGORIES.stories]: allCounts[4]?.zoomLevel3StoriesRelationsForRecord?.total ?? 0,
    }
    return { totalPages, allRelationTotals }
  } catch (e) {
    console.log(e, 'Error accured in zoom level 3 task')
  }
}
