import { PositioningTemplate } from '@/features/shared/types/position'
import { CATEGORIES, CloudCategory, isStoryCategory } from '@/features/shared/utils/categories'

import { getZoom3RelationsTask } from '@/features/pages/tasks/getZoom3Relations'
import initApiClientService from '@/features/shared/utils/initApiClientService'
import { useQuery } from '@tanstack/react-query'
import { Locale, ZoomLevel3RelationsType } from 'src/generated/graphql'
import { GALAXY_QUERIES_STALE_TIME } from '../../../galaxies.constants'
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

export const getRelatedStoryKey = ({
  id,
  category,
  page,
  locale,
}: {
  id: string
  category: CloudCategory
  page: number
  locale: Locale
}) => ['related-stories', id, category, page, locale]

export const useRelatedStoriesQuery = ({
  maxPages,
  page,
  id,
  locale,
  category,
  current,
}: {
  maxPages: number
  page: number
  id: string
  locale: Locale
  category: CloudCategory
  current: number
}) => {
  const api = initApiClientService()

  const queryFn = async () => {
    const res = await getZoom3RelationsTask({
      type: category,
      id,
      page,
      locale,
      api,
      maxPages,
    })

    return getPositionedStories(res?.currentData?.relations, current)
  }

  return useQuery({
    queryKey: getRelatedStoryKey({ id, category, page, locale }),
    queryFn,
    staleTime: GALAXY_QUERIES_STALE_TIME,
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
