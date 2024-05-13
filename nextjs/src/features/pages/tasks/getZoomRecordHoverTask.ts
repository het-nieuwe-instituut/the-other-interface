import { getZoomRecordHoverQueries } from './ZoomRecordHoverConfig'
import { EntityNames, Sdk } from 'src/generated/graphql'
import { zoomRecordHoverQueryTooltipDataMapper } from '@/features/galaxyInterface/galaxies/CategoryGalaxy/fragments/Record/zoomRecordHoverQueryTooltipDataMapper'
import { zoomStoryHoverQueryTooltipDataMapper } from '@/features/galaxyInterface/galaxies/CategoryGalaxy/fragments/Record/zoomStoryHoverQueryTooltipDataMapper'

export async function getZoomRecordHoverTask({
  id,
  category,
  api,
}: {
  id?: string | null
  category?: EntityNames | null
  api: Sdk
  lang?: string | null
}) {
  if (!id || !category) {
    throw new Error('id and category are required')
  }

  if (category === EntityNames.Stories) {
    const storyData = await api.StoryHoverRecordRelations({ id })
    const mappedResult = zoomStoryHoverQueryTooltipDataMapper(storyData)
    return mappedResult
  }

  const hoverConfig = getZoomRecordHoverQueries(api, category)

  const result = await hoverConfig?.hoverData({ id })

  const mappedResult = zoomRecordHoverQueryTooltipDataMapper(result)

  return mappedResult
}
