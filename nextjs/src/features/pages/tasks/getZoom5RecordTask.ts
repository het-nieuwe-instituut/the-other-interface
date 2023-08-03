import { extractSlugAndId } from '@/features/galaxyInterface/utils/extractors'

import { SupportedQuerys, zoom5Config } from './zoom5Config'
import { type ApiClientType } from '@/features/graphql/api'

export async function getZoom5RecordTask(record: string, api: ApiClientType) {
  try {
    const { id, slug } = extractSlugAndId(record)

    if (slug === SupportedQuerys.stories) {
      return
    }
    const configByType = zoom5Config(api)[slug]

    const detailQuery = await configByType.zoomLevelQuery?.({ id: id })

    return {
      zoom5detail: configByType.accesor(detailQuery) ?? null,
      type: slug,
    }
  } catch (e) {
    console.log(e, 'Error accured in zoom level 5 task')
  }
}
