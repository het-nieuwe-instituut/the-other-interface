import {
  CloudCategory,
  getCloudCategoryByZoomLevel3RelationType,
} from '@/features/shared/utils/categories'

import { getZoom3RelationsTask } from '@/features/pages/tasks/getZoom3Relations'
import initApiClientService from '@/features/shared/utils/initApiClientService'
import { useQuery } from '@tanstack/react-query'

import { Locale, ZoomLevel3RelationsType } from 'src/generated/graphql'
import { PositionedRecord } from '../types'
import { positioningTemplate } from './positioningTemplates'
import { GALAXY_QUERIES_STALE_TIME } from '../../../galaxies.constants'

export const usePositionedRecordsQuery = ({
  maxPages,
  id,
  locale,
  page,
  recordCategory,
  category,
  current,
}: {
  id: string
  locale: Locale
  page: number
  maxPages: number
  recordCategory: CloudCategory
  category: CloudCategory
  current?: number
}) => {
  const api = initApiClientService()

  const queryFn = async () => {
    const data = await getZoom3RelationsTask({
      type: recordCategory,
      id,
      page,
      locale,
      api,
      maxPages,
    })
    return getPositionedRecords(data?.currentData?.relations, category, current)
  }

  return useQuery({
    queryKey: ['record-relations-positons', category, id, page, locale, maxPages],
    queryFn,
    staleTime: GALAXY_QUERIES_STALE_TIME,
    refetchOnWindowFocus: false,
  })
}

function getPositionedRecords(
  relations: ZoomLevel3RelationsType[] | null | undefined,
  category: CloudCategory,
  current?: number
) {
  if (!relations || current === undefined) return []

  const positionedRecords: PositionedRecord[] = []
  const categoryPositioningTemplate = positioningTemplate[category][current]
  const categoryRelations = relations.find(
    relation => getCloudCategoryByZoomLevel3RelationType(relation) === category
  )?.paginatedRelations

  if (!categoryPositioningTemplate || !categoryRelations) return []

  categoryPositioningTemplate.forEach((template, index) => {
    const record = categoryRelations[index]

    if (record) {
      positionedRecords.push({
        id: record,
        position: template.position,
        grid: template.grid,
        category,
      })
    }
  })

  return positionedRecords
}
