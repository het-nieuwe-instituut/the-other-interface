import { useMemo } from 'react'
import { CATEGORIES } from '@/features/shared/utils/categories'
import { PositioningTemplate } from '@/features/shared/types/position'
import { PositionedRecord, Relation } from '../types'

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

export const usePresenter = (relations: Relation[]) => {
  const positionedStories = useMemo(() => {
    const storiesRelations = relations.find(
      relation => relation.type.toLocaleLowerCase() === CATEGORIES.stories
    )?.randomRelations

    if (!storiesRelations) return []

    const positionedStories: PositionedRecord[] = []

    positioningTemplate.forEach((template, index) => {
      const record = storiesRelations[index]

      if (record) {
        positionedStories.push({
          id: record,
          position: template.position,
          grid: template.grid,
          category: CATEGORIES.stories,
        })
      }
    })

    return positionedStories
  }, [relations])

  return {
    positionedStories,
  }
}
