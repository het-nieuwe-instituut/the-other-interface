import {
  CATEGORIES,
  CATEGORIES_TO_ENTITY_MAPPER,
  Category,
  // isStoryCategory,
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

    // if (isStoryCategory(type)) {
    //   return await api?.StoriesRelations({ id, lang: locale })
    // } else {
    // return await configByType?.relationsCount?.({
    //   id,
    //   type: CATEGORIES_TO_ENTITY_MAPPER[type],
    //   lang: locale,
    // })
    // }

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

    try {
      const storyCount = await api?.StoriesRelations({ id, page: 1, lang: locale })
      console.log(storyCount)
    } catch (e) {
      console.log('wtf')
    }
    const maxCount = Math.max(
      parseInt(peopleCount?.peopleRecordRelationsCount?.[0]?.total ?? '1'),
      parseInt(publicationsCount?.publicationsRecordRelationsCount?.[0]?.total ?? '1'),
      parseInt(objectsCount?.objectRecordRelationsCount?.[0]?.total ?? '1'),
      parseInt(archivesCount?.archivesRecordRelationsCount?.[0]?.total ?? '1')
    )
    return maxCount
  } catch (e) {
    console.log(e, 'Error accured in zoom level 3 task')
  }
}
