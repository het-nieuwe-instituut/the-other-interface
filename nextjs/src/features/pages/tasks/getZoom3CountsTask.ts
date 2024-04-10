import {
  CATEGORIES,
  CATEGORIES_TO_ENTITY_MAPPER,
  CLOUD_CATEGORIES,
  Category,
  isStoryCategory,
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
    if (isStoryCategory(type)) {
      const triplyRecordsCount = await api.StoryRelationsCount({ id })

      const totalPages = Math.max(
        triplyRecordsCount.storyRelationsCount?.linkedTriplyRecords ?? 1,
        10
      )

      return {
        totalPages,
        allRelationTotals: {
          archives: 4,
          people: 4,
          publications: 4,
          objects: 4,
          stories: 0,
        },
      }
    } else {
      const configByTypeObjects = getZoom3CountQueries(CATEGORIES.objects, api)
      const configByTypePeople = getZoom3CountQueries(CATEGORIES.people, api)
      const configByTypePublications = getZoom3CountQueries(CATEGORIES.publications, api)
      const configByTypeArchives = getZoom3CountQueries(CATEGORIES.archives, api)

      const peopleCount = (await configByTypePeople?.relationsCount?.({
        id,
        type: CATEGORIES_TO_ENTITY_MAPPER[type],
        lang: locale,
      })) as PeopleRecordRelationsCountQuery
      const publicationsCount = (await configByTypePublications?.relationsCount?.({
        id,
        type: CATEGORIES_TO_ENTITY_MAPPER[type],
        lang: locale,
      })) as PublicationsRecordRelationsCountQuery
      const objectsCount = (await configByTypeObjects?.relationsCount?.({
        id,
        type: CATEGORIES_TO_ENTITY_MAPPER[type],
        lang: locale,
      })) as ObjectRecordRelationsCountQuery
      const archivesCount = (await configByTypeArchives?.relationsCount?.({
        id,
        type: CATEGORIES_TO_ENTITY_MAPPER[type],
        lang: locale,
      })) as ArchivesRecordRelationsCountQuery

      const storyCount = await api?.StoriesRelationForRecord({
        id,
        type: CATEGORIES_TO_ENTITY_MAPPER[type],
        lang: locale,
      })

      const totalPages = Math.max(
        parseInt(peopleCount?.peopleRecordRelationsCount?.[0]?.total ?? '1'),
        parseInt(publicationsCount?.publicationsRecordRelationsCount?.[0]?.total ?? '1'),
        parseInt(objectsCount?.objectRecordRelationsCount?.[0]?.total ?? '1'),
        parseInt(archivesCount?.archivesRecordRelationsCount?.[0]?.total ?? '1'),
        storyCount?.zoomLevel3StoriesRelationsForRecord?.total ?? 1
      )

      const allRelationTotals = {
        [CLOUD_CATEGORIES.archives]: parseInt(
          archivesCount?.archivesRecordRelationsCount?.[0]?.total ?? '0'
        ),
        [CLOUD_CATEGORIES.people]: parseInt(
          peopleCount?.peopleRecordRelationsCount?.[0]?.total ?? '0'
        ),
        [CLOUD_CATEGORIES.publications]: parseInt(
          publicationsCount?.publicationsRecordRelationsCount?.[0]?.total ?? '0'
        ),
        [CLOUD_CATEGORIES.objects]: parseInt(
          objectsCount?.objectRecordRelationsCount?.[0]?.total ?? '0'
        ),
        [CATEGORIES.stories]: storyCount?.zoomLevel3StoriesRelationsForRecord?.total ?? 0,
      }
      return { totalPages, allRelationTotals }
    }
  } catch (e) {
    console.log(e, 'Error accured in zoom level 3 task')
  }
}
