import { useMemo } from 'react'
import { CloudCategory } from '@/features/shared/utils/categories'

import { PositionedRecord } from '../types'
import { positioningTemplate } from './positioningTemplates'
import { useRecordRelations } from '@/features/record/hooks/useRecordRelations'
import { useParams } from 'next/navigation'

export const usePresenter = (category: CloudCategory) => {
  const params = useParams()
  const id = params?.id as string
  const recordCategory = params?.category as CloudCategory
  const { data } = useRecordRelations(recordCategory, id)

  const positionedRecords = useMemo(() => {
    if (!data?.relations) return []

    const positionedRecords: PositionedRecord[] = []
    const categoryPositioningTemplate = positioningTemplate[category]
    const categoryRelations = data?.relations.find(
      relation => relation.type?.toLocaleLowerCase() === category
    )?.randomRelations

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
  }, [data?.relations, category])

  return {
    positionedRecords,
  }
}
