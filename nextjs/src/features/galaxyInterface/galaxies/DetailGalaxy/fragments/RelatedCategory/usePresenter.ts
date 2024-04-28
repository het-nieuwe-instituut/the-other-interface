import { useMemo } from 'react'
import { CloudCategory } from '@/features/shared/utils/categories'

import { PositionedRecord } from '../types'
import { positioningTemplate } from './positioningTemplates'
import { useRecordRelations } from '@/features/record/hooks/useRecordRelations'
import { useParams, useSearchParams } from 'next/navigation'
import { AllRelationTotalsType } from './RelatedCategory'

export const usePresenter = (
  category: CloudCategory,
  allRelationTotals?: AllRelationTotalsType
) => {
  const params = useParams()
  const searchParams = useSearchParams()
  const page = parseInt(searchParams?.get('page') || '1')
  const id = params?.id as string
  const recordCategory = params?.category as CloudCategory
  const maxPages = Math.ceil((allRelationTotals?.[category] || 2) / 2)

  const { data } = useRecordRelations(recordCategory, id, maxPages)

  const positionedRecords = useMemo(() => {
    if (!data?.currentData?.relations) return []

    const positionedRecords: PositionedRecord[] = []
    const categoryPositioningTemplate =
      positioningTemplate[category][page > maxPages ? 0 : page % 2 === 0 ? 1 : 0]
    const categoryRelations = data?.currentData?.relations.find(
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
  }, [data?.currentData?.relations, category, page])

  const nextPositionedRecords = useMemo(() => {
    if (!data?.nextData?.relations) return []

    const positionedRecords: PositionedRecord[] = []
    const categoryPositioningTemplate = positioningTemplate[category][page % 2 === 0 ? 0 : 1]
    const categoryRelations = data?.nextData?.relations.find(
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
  }, [data?.nextData?.relations, category, page])

  return {
    positionedRecords,
    nextPositionedRecords,
  }
}
