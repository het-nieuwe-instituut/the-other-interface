import { CloudCategory, ENTITY_NAMES_TO_CATEGORY } from '@/features/shared/utils/categories'

import { getZoom3RelationsTask } from '@/features/pages/tasks/getZoom3Relations'
import initApiClientService from '@/features/shared/utils/initApiClientService'
import { useQuery } from '@tanstack/react-query'

import { Locale, ZoomLevel3RelationsType } from 'src/generated/graphql'
import { PositionedRecord } from '../types'
import { positioningTemplate } from './positioningTemplates'
import { GALAXY_QUERIES_STALE_TIME } from '../../../galaxies.constants'

export const getPositionedRecordsQueryKey = ({
  maxPages,
  id,
  locale,
  page,
  recordCategory,
  category,
  current,
}: {
  maxPages: number
  id: string
  locale: Locale
  page: number
  recordCategory: CloudCategory
  category: CloudCategory
  current?: number
}) => ['record-relations-positons', maxPages, id, locale, page, recordCategory, category, current]

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
    queryKey: getPositionedRecordsQueryKey({
      maxPages,
      id,
      locale,
      page,
      recordCategory,
      category,
      current,
    }),
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

  const categoryPositioningTemplate = positioningTemplate[category][current]
  const { paginatedRelations } =
    relations.find(r => ENTITY_NAMES_TO_CATEGORY[r.type] === category) || {}

  if (!categoryPositioningTemplate || !paginatedRelations) return []

  const positionedRecords: PositionedRecord[] = []
  categoryPositioningTemplate.forEach((template, index) => {
    const record = paginatedRelations[index]

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
