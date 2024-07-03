import { CloudCategory } from '@/features/shared/utils/categories'
import { useEffect, useRef } from 'react'

import { getZoom3RelationsTask } from '@/features/pages/tasks/getZoom3Relations'
import { useLocale } from '@/features/shared/hooks/useLocale'
import initApiClientService from '@/features/shared/utils/initApiClientService'
import { useQuery } from '@tanstack/react-query'
import { useParams, useSearchParams } from 'next/navigation'
import { ZoomLevel3RelationsType } from 'src/generated/graphql'
import { PositionedRecord } from '../types'
import { AllRelationTotalsType } from './RelatedCategory'
import { positioningTemplate } from './positioningTemplates'

export const usePositionedRecordsQuery = (
  category: CloudCategory,
  allRelationTotals?: AllRelationTotalsType
) => {
  const params = useParams()
  const locale = useLocale()
  const searchParams = useSearchParams()
  const page = parseInt(searchParams?.get('page') || '1')
  const id = params?.id as string
  const maxPages = Math.ceil((allRelationTotals?.[category] || 2) / 2)
  const current = useRef(0)
  const next = useRef(1)
  const api = initApiClientService()

  useEffect(() => {
    if (page <= maxPages) {
      if (page % 2 === 0) {
        current.current = 1
        next.current = 0
      } else {
        current.current = 0
        next.current = 1
      }
    }
  }, [page, maxPages])

  const queryFn = async () => {
    const data = await getZoom3RelationsTask({ type: category, id, page, locale, api, maxPages })

    return {
      positionedRecords: getPositionedRecords(data?.currentData?.relations, category, current),
      nextPositionedRecords: getPositionedRecords(data?.nextData?.relations, category, next),
    }
  }

  return useQuery({
    queryKey: ['record-relations', category, id, page, locale, maxPages],
    queryFn,
    refetchOnWindowFocus: false,
  })
}

function getPositionedRecords(
  relations: ZoomLevel3RelationsType[] | null | undefined,
  category: CloudCategory,
  current: { current: number }
) {
  if (!relations) return []

  const positionedRecords: PositionedRecord[] = []
  const categoryPositioningTemplate = positioningTemplate[category][current.current]
  const categoryRelations = relations.find(
    relation => relation.type?.toLocaleLowerCase() === category
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
