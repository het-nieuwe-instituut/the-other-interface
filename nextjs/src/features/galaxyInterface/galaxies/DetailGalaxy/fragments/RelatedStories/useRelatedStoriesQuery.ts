import { PositioningTemplate } from '@/features/shared/types/position'
import { CATEGORIES, CloudCategory, isStoryCategory } from '@/features/shared/utils/categories'
import { useEffect, useRef } from 'react'

import { getZoom3RelationsTask } from '@/features/pages/tasks/getZoom3Relations'
import initApiClientService from '@/features/shared/utils/initApiClientService'
import { useQuery } from '@tanstack/react-query'
import { Locale, ZoomLevel3RelationsType } from 'src/generated/graphql'
import { AllRelationTotalsType } from '../RelatedCategory'
import { PositionedRecord } from '../types'

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
        left: '-40%',
        bottom: '30%',
      },
      grid: {
        gridRow: '1 / 2',
        gridColumn: '2 / 3',
      },
    },
    {
      position: {
        top: '10%',
        left: '50%',
      },
      grid: {
        gridRow: '4 / 5',
        gridColumn: '1 / 2',
      },
    },
  ],
]

export const useRelatedStoriesQuery = ({
  allRelationTotals,
  page,
  id,
  locale,
  category,
}: {
  allRelationTotals?: AllRelationTotalsType
  page: number
  id: string
  locale: Locale
  category: CloudCategory
}) => {
  const maxPages = Math.ceil((allRelationTotals?.[CATEGORIES.stories] || 2) / 2)
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
    const res = await getZoom3RelationsTask({
      type: category,
      id,
      page,
      locale,
      api,
      maxPages,
    })

    return {
      positionedStories: getPositionedStories(res?.currentData?.relations, current.current),
      nextPositionedStories: getPositionedStories(res?.nextData?.relations, next.current),
    }
  }

  return useQuery({
    queryKey: ['record-relations', id, category, page, locale],
    queryFn,
    staleTime: 60000,
    refetchOnWindowFocus: false,
  })
}

function getPositionedStories(
  relations: ZoomLevel3RelationsType[] | null | undefined,
  current: number
) {
  if (!relations) return []

  const storiesRelations = relations.find(relation =>
    isStoryCategory(relation.type?.toLocaleLowerCase())
  )?.paginatedRelations

  if (!storiesRelations) return []

  const positionedStories: PositionedRecord[] = []
  positioningTemplate[current].forEach((template, index) => {
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
}
