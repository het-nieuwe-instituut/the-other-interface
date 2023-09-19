import { useMemo } from 'react'
import { CloudCategory } from '@/features/shared/utils/categories'

import { Record, PositionedRecord } from '../types'
import { positioningTemplate } from './positioningTemplates'

export const usePresenter = (category: CloudCategory, records: Record[]) => {
  const positionedStories = useMemo(() => {
    const positionedStories: PositionedRecord[] = []
    const categoryPositioningTemplate = positioningTemplate[category]

    if (!categoryPositioningTemplate) return []

    categoryPositioningTemplate.forEach((template, index) => {
      const record = records[index]

      if (record) {
        positionedStories.push({
          ...record,
          position: template.position,
          grid: template.grid,
          category,
        })
      }
    })

    return positionedStories
  }, [records])

  return {
    positionedStories,
  }
}
