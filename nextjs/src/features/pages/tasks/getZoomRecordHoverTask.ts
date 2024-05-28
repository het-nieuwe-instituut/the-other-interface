import { Category } from '@/features/shared/utils/categories'
import { getZoomRecordHoverQueries } from './ZoomRecordHoverConfig'
import { Locale, Sdk } from 'src/generated/graphql'
import { zoomRecordHoverQueryTooltipDataMapper } from '@/features/galaxyInterface/galaxies/CategoryGalaxy/fragments/Record/zoomRecordHoverQueryTooltipDataMapper'
import { zoomStoryHoverQueryTooltipDataMapper } from '@/features/galaxyInterface/galaxies/CategoryGalaxy/fragments/Record/zoomStoryHoverQueryTooltipDataMapper'

export async function getZoomRecordHoverTask({
  id,
  category,
  api,
  locale,
}: {
  id?: string | null
  category?: Category | null
  api: Sdk
  locale: Locale
}) {
  if (!id || !category) {
    throw new Error('id and category are required')
  }

  if (category === 'stories') {
    const storyData = await api.StoryHoverRecordRelations({ id, locale })
    const mappedResult = zoomStoryHoverQueryTooltipDataMapper(storyData)
    return mappedResult
  }

  const hoverConfig = getZoomRecordHoverQueries(api, category)

  const result = await hoverConfig?.hoverData({ id, locale })

  const mappedResult = zoomRecordHoverQueryTooltipDataMapper(result)

  return mappedResult
}
