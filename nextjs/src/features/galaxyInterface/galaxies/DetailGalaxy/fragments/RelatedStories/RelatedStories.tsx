import {
  useIsFetchingRecordDetails,
  useZoomLevel3Queries,
} from '@/features/record/hooks/useZoomLevel3Query'
import { useLocale } from '@/features/shared/hooks/useLocale'
import { CATEGORIES, CloudCategory } from '@/features/shared/utils/categories'
import { keyExtractor } from '@/features/shared/utils/lists'
import { useParams, useSearchParams } from 'next/navigation'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Locale } from 'src/generated/graphql'
import {
  GalaxyPaginationAnimationStateContext,
  getItemsAnimationClassNames,
  getNextItemsAnimationClassNames,
} from '../../../hooks/GalaxyPaginationAnimationStateProvider'
import { DetailedRecord } from '../DetailedRecord'
import { Record } from '../Record/Record'
import { AllRelationTotalsType } from '../RelatedCategory'
import { useRelatedStoriesQuery } from './useRelatedStoriesQuery'

interface Props {
  allRelationTotals?: AllRelationTotalsType
  isFetchingEditorial?: boolean
}

export function useSwapCurrentNext(currentIndex: number, max: number) {
  return useMemo(() => {
    if (currentIndex <= max) {
      if (currentIndex % 2 === 0) {
        return {
          current: 1,
          next: 0,
        }
      } else {
        return {
          current: 0,
          next: 1,
        }
      }
    }
    return {
      current: undefined,
      next: undefined,
    }
  }, [currentIndex, max])
}

export const RelatedStories: React.FC<Props> = ({
  allRelationTotals,
  isFetchingEditorial = false,
}) => {
  const params = useParams()
  const locale = useLocale()
  const searchParams = useSearchParams()
  const page = parseInt(searchParams?.get('page') || '1')
  const id = params?.id as string
  const recordCategory = params?.category as CloudCategory
  const maxPages = Math.ceil((allRelationTotals?.[CATEGORIES.stories] || 2) / 2)
  const { current, next } = useSwapCurrentNext(page, maxPages)
  const [complete, setComplete] = useState(false)

  return (
    <>
      <div className="pointer-events-none col-start-2 col-end-2 row-start-1 row-end-3 text-ivory-100">
        <div className="grid h-full grid-cols-2 grid-rows-4">
          {!isFetchingEditorial && complete && (
            <NextPositionedRecords
              next={next}
              id={id}
              locale={locale}
              page={page}
              maxPages={maxPages}
              recordCategory={recordCategory}
            />
          )}
        </div>
      </div>
      <div className="col-start-2 col-end-2 row-start-1 row-end-3 text-ivory-100">
        <div className="grid h-full grid-cols-2 grid-rows-4">
          {!isFetchingEditorial && (
            <PositionedRecords
              onComplete={() => setComplete(true)}
              current={current}
              id={id}
              locale={locale}
              page={page}
              maxPages={maxPages}
              recordCategory={recordCategory}
            />
          )}

          <DetailedRecord />
        </div>
      </div>
    </>
  )
}

const PositionedRecords = ({
  id,
  maxPages,
  locale,
  page,
  recordCategory,
  current,
  onComplete,
}: {
  current?: number
  locale: Locale
  page: number
  id: string
  maxPages: number
  recordCategory: CloudCategory
  onComplete: () => void
}) => {
  const lang = useLocale()
  const { conditions, animationState } = useContext(GalaxyPaginationAnimationStateContext)
  const { data, isLoading: isRelatedStoriesLoading } = useRelatedStoriesQuery({
    maxPages,
    page,
    id,
    locale,
    category: recordCategory,
    current: current ?? 0,
  })
  const positionedStories = data || []

  const results = useZoomLevel3Queries({
    data:
      positionedStories?.map(({ category, id }) => {
        return {
          type: category,
          id,
          locale: lang,
          small: true,
        }
      }) ?? [],
  })

  const isFetchingingRecords = useIsFetchingRecordDetails()

  const allFinished = results.every(query => query.isSuccess)

  useEffect(() => {
    if (allFinished && !isFetchingingRecords && !isRelatedStoriesLoading) {
      // all the queries have either succeeded or errored
      onComplete()
    }
  }, [allFinished])

  return (
    <>
      {!isRelatedStoriesLoading &&
        results.map((result, index) => {
          const { isLoading, isError, data } = result
          if (isLoading) {
            return null
          }

          if (isError) {
            return null
          }

          const positionedRecord = positionedStories.find(v => v.id === data?.id)

          if (!positionedRecord) {
            return null
          }

          return (
            <Record
              className={getItemsAnimationClassNames(animationState, conditions)}
              key={keyExtractor(positionedRecord.id, index, positionedStories)}
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
  next,
}: {
  next?: number
  locale: Locale
  page: number
  id: string
  maxPages: number
  recordCategory: CloudCategory
}) => {
  const lang = useLocale()
  const { conditions, animationState } = useContext(GalaxyPaginationAnimationStateContext)

  const { data: nextData, isLoading: isNextRelatedStoriesLoading } = useRelatedStoriesQuery({
    maxPages,
    page: page + 1,
    id,
    locale,
    category: recordCategory,
    current: next ?? 0,
  })
  const nextPositionedStories = nextData || []

  const results = useZoomLevel3Queries({
    data:
      nextPositionedStories?.map(({ category, id }) => {
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
      {!isNextRelatedStoriesLoading &&
        results.map((result, index) => {
          const { isLoading, isError, data } = result
          if (isLoading) {
            return null
          }

          if (isError) {
            return null
          }

          const positionedRecord = nextPositionedStories.find(v => v.id === data?.id)

          if (!positionedRecord) {
            return null
          }

          return (
            <Record
              className={getNextItemsAnimationClassNames(
                animationState,
                conditions,
                nextPositionedStories.length > 0
              )}
              key={keyExtractor(positionedRecord.id, index, nextPositionedStories)}
              record={positionedRecord}
              recordDetails={data}
              tabIndex={-1}
            />
          )
        })}
    </>
  )
}
