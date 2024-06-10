import { getZoomRecordHoverQueries } from './ZoomRecordHoverConfig'
import { Sdk, Locale, EntityNames } from 'src/generated/graphql'
import { zoomRecordHoverQueryTooltipDataMapper } from '@/features/galaxyInterface/galaxies/CategoryGalaxy/fragments/Record/zoomRecordHoverQueryTooltipDataMapper'
import { zoomStoryHoverQueryTooltipDataMapper } from '@/features/galaxyInterface/galaxies/CategoryGalaxy/fragments/Record/zoomStoryHoverQueryTooltipDataMapper'
import { CATEGORIES, Category } from '@/features/shared/utils/categories'

export async function getZoomRecordHoverTask({
  id,
  category,
  api,
  locale,
}: {
  id?: string | null
  category?: Category | EntityNames | null
  api: Sdk
  locale: Locale
}) {
  if (!id || !category) {
    throw new Error('id and category are required')
  }

  if (category === CATEGORIES.stories || category === EntityNames.Stories) {
    const storyData = await api.StoryHoverRecordRelations({ id, locale })
    const mappedResult = zoomStoryHoverQueryTooltipDataMapper(storyData)
    return mappedResult
  }

  const hoverConfig = getZoomRecordHoverQueries(api, category)

  const result = await hoverConfig?.hoverData({ id, locale })

  const mappedResult = zoomRecordHoverQueryTooltipDataMapper(result)

  return mappedResult
}
