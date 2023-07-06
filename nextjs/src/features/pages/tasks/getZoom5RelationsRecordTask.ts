import { extractSlugAndId, extractType } from '@/features/galaxyInterface/utils/extractors'
import ApiClient from '@/features/graphql/api'

import { SupportedQuerys, zoom5Config } from './zoom5Config'

export async function getZoom5RelationsRecordTask(path: string, record: string) {
  try {
    const { id } = extractSlugAndId(record)
    const type = extractType(path)

    const relations =
      type === SupportedQuerys.stories
        ? await ApiClient?.StoriesRelations({ id })
        : await zoom5Config[type].relationsQuery?.({ id })

    return {
      zoom5relations: relations,
    }
  } catch (e) {
    console.log(e, 'Error accured in zoom level 5 task')
  }
}
