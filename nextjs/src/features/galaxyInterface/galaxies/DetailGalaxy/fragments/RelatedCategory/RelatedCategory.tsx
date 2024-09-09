'use client'

import {
  useIsFetchingRecordDetails,
  useZoomLevel3Queries,
} from '@/features/record/hooks/useZoomLevel3Query'
import { useLocale } from '@/features/shared/hooks/useLocale'
import { GridParams } from '@/features/shared/types/position'
import { CLOUD_CATEGORIES, CloudCategory } from '@/features/shared/utils/categories'
import { keyExtractor } from '@/features/shared/utils/lists'
import { useParams, useSearchParams } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import { Locale } from 'src/generated/graphql'
import {
  GalaxyPaginationAnimationStateContext,
  getItemsAnimationClassNames,
  getNextItemsAnimationClassNames,
} from '../../../hooks/GalaxyPaginationAnimationStateProvider'
import { Record } from '../Record/Record'
import { useSwapCurrentNext } from '../RelatedStories'
import { usePositionedRecordsQuery } from './usePositionedRecordsQuery'

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

export const RelatedCategory: React.FC<Props> = React.memo(props => {
  const { allRelationTotals, category, gridColumn, gridRow } = props
  const searchParams = useSearchParams()
  const page = parseInt(searchParams?.get('page') || '1')
  const maxPages = Math.ceil((allRelationTotals?.[category] || 2) / 2)
  const { current, next } = useSwapCurrentNext(page, maxPages)
  const params = useParams()
  const locale = useLocale()
  const recordCategory = params?.category as CloudCategory
  const id = params?.id as string
  const [complete, setComplete] = useState(false)

  return (
    <>
      {complete && (
        <div className="text-ivory-100" style={{ gridRow, gridColumn }}>
          <div className="pointer-events-none grid h-full grid-cols-2 grid-rows-2 ">
            <NextPositionedRecords
              next={next}
              id={id}
              locale={locale}
              page={page}
              maxPages={maxPages}
              category={category}
              recordCategory={recordCategory}
            />
          </div>
        </div>
      )}

      <div className="text-ivory-100" color={'white'} style={{ gridRow, gridColumn }}>
        <div className="grid h-full grid-cols-2 grid-rows-2">
          <PositionedRecords
            onComplete={() => setComplete(true)}
            current={current}
            id={id}
            locale={locale}
            page={page}
            maxPages={maxPages}
            category={category}
            recordCategory={recordCategory}
          />
        </div>
      </div>
    </>
  )
})
RelatedCategory.displayName = 'RelatedCategory'

const PositionedRecords = ({
  id,
  maxPages,
  locale,
  category,
  page,
  recordCategory,
  current,
  onComplete,
}: {
  current?: number
  locale: Locale
  page: number
  id: string
  category: CloudCategory
  maxPages: number
  recordCategory: CloudCategory
  onComplete: () => void
}) => {
  const lang = useLocale()
  const { conditions, animationState } = useContext(GalaxyPaginationAnimationStateContext)
  const { data, isLoading: isPositionsedRecordLoading } = usePositionedRecordsQuery({
    locale,
    page,
    id,
    maxPages,
    current,
    category: category,
    recordCategory: recordCategory,
  })
  const positionedRecords = data || []
  const isFetchingingRecords = useIsFetchingRecordDetails()
  const results = useZoomLevel3Queries({
    data:
      positionedRecords?.map(({ category, id }) => {
        return {
          type: category,
          id,
          locale: lang,
          options: { refetchOnWindowFocus: false },
          small: true,
        }
      }) ?? [],
  })

  const allFinished = results.every(query => !query.isLoading)

  useEffect(() => {
    if (allFinished && !isPositionsedRecordLoading && !isFetchingingRecords) {
      // all the queries have executed successfully
      onComplete()
    }
  }, [allFinished, isFetchingingRecords])

  return (
    <>
      {!isPositionsedRecordLoading &&
        results.map((result, index) => {
          const { isLoading, isError, data } = result
          if (isLoading) {
            return null
          }

          if (isError) {
            return null
          }

          const positionedRecord = positionedRecords.find(v => v.id === data?.id)

          if (!positionedRecord) {
            return null
          }

          return (
            <Record
              className={getItemsAnimationClassNames(animationState, conditions)}
              key={keyExtractor(positionedRecord.id, index, positionedRecords)}
              record={positionedRecord}
              recordDetails={data}
            />
          )
        })}
    </>
  )
}

const NextPositionedRecords = ({
  id,
  maxPages,
  locale,
  page,
  recordCategory,
  category,
  next,
}: {
  next?: number
  locale: Locale
  page: number
  category: CloudCategory
  id: string
  maxPages: number
  recordCategory: CloudCategory
}) => {
  const lang = useLocale()
  const { conditions, animationState } = useContext(GalaxyPaginationAnimationStateContext)

  const { data: nextData, isLoading: isNextPositionedRecordLoading } = usePositionedRecordsQuery({
    locale,
    page: page + 1,
    id,
    maxPages,
    current: next,
    recordCategory: recordCategory,
    category: category,
  })
  const nextPositionedRecords = nextData || []

  const results = useZoomLevel3Queries({
    data:
      nextPositionedRecords?.map(({ category, id }) => {
        return {
          type: category,
          id,
          locale: lang,
          options: { refetchOnWindowFocus: false },
          small: true,
        }
      }) ?? [],
  })

  return (
    <>
      {!isNextPositionedRecordLoading &&
        results.map((result, index) => {
          const { isLoading, isError, data } = result
          if (isLoading) {
            return null
          }

          if (isError) {
            return null
          }

          const positionedRecord = nextPositionedRecords.find(v => v.id === data?.id)

          if (!positionedRecord) {
            return null
          }

          return (
            <Record
              className={getNextItemsAnimationClassNames(
                animationState,
                conditions,
                nextPositionedRecords.length > 0
              )}
              key={keyExtractor(positionedRecord.id, index, nextPositionedRecords)}
              record={positionedRecord}
              recordDetails={data}
              tabIndex={-1}
            />
          )
        })}
    </>
  )
}
