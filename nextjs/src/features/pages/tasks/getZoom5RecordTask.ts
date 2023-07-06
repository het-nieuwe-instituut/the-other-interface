import { extractSlugAndId } from '@/features/galaxyInterface/utils/extractors'

import { SupportedQuerys, zoom5Config } from './zoom5Config'

export async function getZoom5RecordTask(record: string) {
  try {
    const { id, slug } = extractSlugAndId(record)

    if (slug === SupportedQuerys.stories) {
      return
    }
    const configByType = zoom5Config[slug]

    const detailQuery = await configByType.zoomLevelQuery?.({ id: id })

    return {
      zoom5detail: configByType.accesor(detailQuery) ?? null,
      type: slug,
    }
  } catch (e) {
    console.log(e, 'Error accured in zoom level 5 task')
  }
}
