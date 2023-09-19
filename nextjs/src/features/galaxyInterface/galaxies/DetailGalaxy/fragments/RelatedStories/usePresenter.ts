import { useMemo } from 'react'
import { CATEGORIES } from '@/features/shared/utils/categories'

import { PositioningTemplate, Record, PositionedRecord } from '../types'

const positioningTemplate: PositioningTemplate[] = [
  {
    position: {
      left: '10%',
      bottom: 0,
    },
    grid: {
      gridRow: '1 / 2',
      gridColumn: '2 / 3',
    },
  },
  {
    position: {
      top: '10%',
      left: 0,
    },
    grid: {
      gridRow: '4 / 5',
      gridColumn: '1 / 2',
    },
  },
]

export const usePresenter = (records: Record[]) => {
  const positionedStories = useMemo(() => {
    const positionedStories: PositionedRecord[] = []

    positioningTemplate.forEach((template, index) => {
      const record = records[index]

      if (record) {
        positionedStories.push({
          ...record,
          position: template.position,
          grid: template.grid,
          category: CATEGORIES.stories,
        })
      }
    })

    return positionedStories
  }, [records])

  return {
    positionedStories,
  }
}
