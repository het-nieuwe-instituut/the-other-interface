import { useMemo } from 'react'
import { CATEGORIES, CloudCategory, isStoryCategory } from '@/features/shared/utils/categories'
import { PositioningTemplate } from '@/features/shared/types/position'
import { useParams } from 'next/navigation'

import { useRecordRelations } from '@/features/shared/hooks/queries/useRecordRelations'
import { PositionedRecord } from '../types'
import { AllRelationTotalsType } from '../RelatedCategory'

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

export const usePresenter = (allRelationTotals?: AllRelationTotalsType) => {
  const params = useParams()
  const id = params?.id as string
  const recordCategory = params?.category as CloudCategory
  const maxPages = Math.ceil((allRelationTotals?.[CATEGORIES.stories] || 2) / 2)

  const { data } = useRecordRelations(recordCategory, id, maxPages)

  const positionedStories = useMemo(() => {
    if (!data?.relations) return []

    const storiesRelations = data?.relations.find(relation =>
      isStoryCategory(relation.type?.toLocaleLowerCase())
    )?.paginatedRelations

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
  }, [data?.relations])

  return {
    positionedStories,
  }
}
