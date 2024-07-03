'use client'

import { GridParams } from '@/features/shared/types/position'
import { CLOUD_CATEGORIES, CloudCategory } from '@/features/shared/utils/categories'
import { keyExtractor } from '@/features/shared/utils/lists'
import { useContext } from 'react'
import {
  GalaxyPaginationAnimationStateContext,
  getItemsAnimationClassNames,
  getNextItemsAnimationClassNames,
} from '../../../hooks/GalaxyPaginationAnimationStateProvider'
import { Record } from '../Record/Record'
import { usePositionedRecordsQuery } from './usePositionedRecordsQuery'
import { useSwapCurrentNext } from '../RelatedStories'
import { useLocale } from '@/features/shared/hooks/useLocale'
import { useParams, useSearchParams } from 'next/navigation'

export interface AllRelationTotalsType {
  [CLOUD_CATEGORIES.archives]: number
  [CLOUD_CATEGORIES.people]: number
  [CLOUD_CATEGORIES.publications]: number
  [CLOUD_CATEGORIES.objects]: number
  stories: number
}

interface Props extends GridParams {
  category: CloudCategory
  allRelationTotals?: AllRelationTotalsType
}

export const RelatedCategory: React.FC<Props> = ({
  category,
  allRelationTotals,
  gridRow,
  gridColumn,
}) => {
  const params = useParams()
  const locale = useLocale()
  const searchParams = useSearchParams()
  const page = parseInt(searchParams?.get('page') || '1')
  const id = params?.id as string

  const maxPages = Math.ceil((allRelationTotals?.[category] || 2) / 2)
  const { current, next } = useSwapCurrentNext(page, maxPages)
  const { conditions, animationState } = useContext(GalaxyPaginationAnimationStateContext)
  const { data } = usePositionedRecordsQuery({
    locale,
    page,
    id,
    maxPages,
    current,
    category,
  })
  const { data: nextData } = usePositionedRecordsQuery({
    locale,
    page: page + 1,
    id,
    maxPages,
    current: next,
    category,
  })
  const positionedRecords = data || []
  const nextPositionedRecords = nextData || []

  return (
    <>
      <div className=" text-white" style={{ gridRow, gridColumn }}>
        <div className="grid h-full grid-cols-2 grid-rows-2">
          {nextPositionedRecords.map((record, index) => (
            <Record
              className={getNextItemsAnimationClassNames(
                animationState,
                conditions,
                nextPositionedRecords.length > 0
              )}
              key={keyExtractor(record.id, index, positionedRecords)}
              record={record}
              tabIndex={-1}
            />
          ))}
        </div>
      </div>
      <div className="text-white" color={'white'} style={{ gridRow, gridColumn }}>
        <div className="grid h-full grid-cols-2 grid-rows-2">
          {positionedRecords.map((record, index) => (
            <Record
              className={getItemsAnimationClassNames(animationState, conditions)}
              key={keyExtractor(record.id, index, positionedRecords)}
              record={record}
            />
          ))}
        </div>
      </div>
    </>
  )
}
