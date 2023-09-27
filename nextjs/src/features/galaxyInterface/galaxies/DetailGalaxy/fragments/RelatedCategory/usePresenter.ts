import { useMemo } from 'react'
import { CloudCategory } from '@/features/shared/utils/categories'

import { PositionedRecord, Relation } from '../types'
import { positioningTemplate } from './positioningTemplates'

export const usePresenter = (category: CloudCategory, relations: Relation[]) => {
  const positionedRecords = useMemo(() => {
    const positionedRecords: PositionedRecord[] = []
    const categoryPositioningTemplate = positioningTemplate[category]
    const categoryRelations = relations.find(
      relation => relation.type.toLocaleLowerCase() === category
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
  }, [relations, category])

  return {
    positionedRecords,
  }
}
