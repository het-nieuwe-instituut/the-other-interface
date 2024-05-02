import { Category } from '@/features/shared/utils/categories'
import { getZoom2HoverQueries } from './Zoom2HoverConfig'
import { Sdk } from 'src/generated/graphql'
import { zoom2HoverQueryTooltipDataMapper } from '@/features/galaxyInterface/galaxies/CategoryGalaxy/fragments/Record/zoom2HoverQueryTooltipDataMapper'

export async function getZoom2HoverTask({
  id,
  category,
  api,
}: {
  id?: string | null
  category?: Category | null
  api: Sdk
  lang?: string | null
}) {
  if (!id || !category) {
    throw new Error('id and category are required')
  }
  const hoverConfig = getZoom2HoverQueries(api, category)

  const result = await hoverConfig?.hoverData({ id })

  const mappedResult = zoom2HoverQueryTooltipDataMapper(result)

  return mappedResult
}
