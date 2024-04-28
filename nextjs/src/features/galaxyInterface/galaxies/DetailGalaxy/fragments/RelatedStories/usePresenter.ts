import { useMemo } from 'react'
import { CATEGORIES, CloudCategory, isStoryCategory } from '@/features/shared/utils/categories'
import { PositioningTemplate } from '@/features/shared/types/position'
import { useParams, useSearchParams } from 'next/navigation'

import { useRecordRelations } from '@/features/record/hooks/useRecordRelations'
import { PositionedRecord } from '../types'
import { AllRelationTotalsType } from '../RelatedCategory'

const positioningTemplate: PositioningTemplate[][] = [
  [
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
  ],
  [
    {
      position: {
        left: '-70%',
        bottom: '50%',
      },
      grid: {
        gridRow: '1 / 2',
        gridColumn: '2 / 3',
      },
    },
    {
      position: {
        top: '10%',
        left: '90%',
      },
      grid: {
        gridRow: '4 / 5',
        gridColumn: '1 / 2',
      },
    },
  ],
]

export const usePresenter = (allRelationTotals?: AllRelationTotalsType) => {
  const params = useParams()
  const searchParams = useSearchParams()
  const page = parseInt(searchParams?.get('page') || '1')
  const id = params?.id as string
  const recordCategory = params?.category as CloudCategory
  const maxPages = Math.ceil((allRelationTotals?.[CATEGORIES.stories] || 2) / 2)

  const { data } = useRecordRelations(recordCategory, id, maxPages)

  const positionedStories = useMemo(() => {
    if (!data?.currentData?.relations) return []

    const storiesRelations = data?.currentData?.relations.find(relation =>
      isStoryCategory(relation.type?.toLocaleLowerCase())
    )?.paginatedRelations

    if (!storiesRelations) return []

    const positionedStories: PositionedRecord[] = []

    positioningTemplate[page % 2 === 0 ? 1 : 0].forEach((template, index) => {
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
  }, [data?.currentData?.relations, page])

  const nextPositionedStories = useMemo(() => {
    if (!data?.nextData?.relations) return []

    const storiesRelations = data?.nextData?.relations.find(relation =>
      isStoryCategory(relation.type?.toLocaleLowerCase())
    )?.paginatedRelations

    if (!storiesRelations) return []

    const positionedStories: PositionedRecord[] = []

    positioningTemplate[page % 2 === 0 ? 0 : 1].forEach((template, index) => {
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
  }, [data?.nextData?.relations, page])

  return {
    positionedStories,
    nextPositionedStories,
  }
}
