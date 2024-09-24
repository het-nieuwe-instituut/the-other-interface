'use client'

import {
  useIsFetchingRecordDetails,
  useZoomLevel3Queries,
} from '@/features/record/hooks/useZoomLevel3Query'
import { useLocale } from '@/features/shared/hooks/useLocale'
import { GridParams } from '@/features/shared/types/position'
import { CloudCategory, CLOUD_CATEGORIES } from '@/features/shared/utils/categories'
import { keyExtractor } from '@/features/shared/utils/lists'
import { cn } from '@/features/ui/utils/cn'
import { useParams, useSearchParams } from 'next/navigation'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Locale } from 'src/generated/graphql'
import {
  GalaxyPaginationAnimationStateContext,
  getItemsAnimationClassNames,
  getItemsCssProperties,
  getNextItemsAnimationClassNames,
  getNextItemsCssProperties,
} from '../../../hooks/GalaxyPaginationAnimationStateProvider'
import {
  GalaxyZoomAnimationStateContext,
  getScaleAnimationClassName,
} from '../../../hooks/GalaxyZoomAnimationStateProvider'
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
  className?: string
}

export const RelatedCategory: React.FC<Props> = React.memo(props => {
  const { allRelationTotals, category, gridColumn, gridRow, className } = props
  const searchParams = useSearchParams()
  const page = parseInt(searchParams?.get('page') || '1')
  const maxPages = Math.ceil((allRelationTotals?.[category] || 2) / 2)
  const { current, next } = useSwapCurrentNext(page, maxPages)
  const params = useParams()
  const locale = useLocale()
  const recordCategory = params?.category as CloudCategory
  const id = params?.id as string
  const [complete, setComplete] = useState(false)
  const [nextComplete, setNextComplete] = useState(false)
  const { conditions, animationState } = useContext(GalaxyPaginationAnimationStateContext)

  return (
    <>
      {complete && (
        <div
          style={{ gridRow, gridColumn, ...getNextItemsCssProperties('50') }}
          className={
            nextComplete
              ? cn(getNextItemsAnimationClassNames(animationState, conditions, true), className)
              : 'hidden'
          }
        >
          <div className="pointer-events-none grid h-full grid-cols-2 grid-rows-2 text-ivory-100">
            <NextPositionedRecords
              next={next}
              id={id}
              locale={locale}
              page={page}
              maxPages={maxPages}
              category={category}
              recordCategory={recordCategory}
              onComplete={() => setNextComplete(true)}
            />
          </div>
        </div>
      )}

      <div
        color={'white'}
        style={{ gridRow, gridColumn, ...getItemsCssProperties('50') }}
        className={
          complete
            ? cn(getItemsAnimationClassNames(animationState, conditions), className)
            : 'hidden'
        }
      >
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
          page,
        }
      }) ?? [],
  })
  const animations = useMemo(() => {
    const config = [
      cn('animate-[zoomFirstRender_300ms_both_100ms]'),
      cn('animate-[zoomFirstRender_325ms_both_125ms]'),
      cn('animate-[zoomFirstRender_350ms_both_150ms]'),
      cn('animate-[zoomFirstRender_375ms_both_175ms]'),
      cn('animate-[zoomFirstRender_400ms_both_200ms]'),
      cn('animate-[zoomFirstRender_425ms_both_225ms]'),
      cn('animate-[zoomFirstRender_450ms_both_250ms]'),
      cn('animate-[zoomFirstRender_475ms_both_275ms]'),
      cn('animate-[zoomFirstRender_500ms_both_300ms]'),
      cn('animate-[zoomFirstRender_525ms_both_325ms]'),
      cn('animate-[zoomFirstRender_550ms_both_350ms]'),
      cn('animate-[zoomFirstRender_575ms_both_375ms]'),
    ]
    // shuffle the array
    return config.sort(() => Math.random() - 0.5)
  }, [])

  const allFinished = results.every(query => !query.isLoading)

  useEffect(() => {
    if (allFinished && !isPositionsedRecordLoading && !isFetchingingRecords) {
      // all the queries have executed successfully
      onComplete()
    }
  }, [allFinished, isFetchingingRecords, isPositionsedRecordLoading, onComplete])

  const {
    conditions: galaxyPaginationAnimationConditions,
    animationState: galaxyPaginationAnimationState,
  } = useContext(GalaxyPaginationAnimationStateContext)
  const { conditions: galaxyZoomAnimationConditions, animationState: galaxyZoomAnimationState } =
    useContext(GalaxyZoomAnimationStateContext)

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
              key={keyExtractor(positionedRecord.id, index, positionedRecords)}
              record={positionedRecord}
              recordDetails={data}
              positionClassName={getScaleAnimationClassName({
                allLoaded: allFinished,
                animation: animations[index],
                galaxyZoomAnimationConditions: galaxyZoomAnimationConditions,
                galaxyPaginationAnimationConditions: galaxyPaginationAnimationConditions,
                galaxyZoomAnimationState: galaxyZoomAnimationState,
                galaxyPaginationAnimationState: galaxyPaginationAnimationState,
              })}
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
  onComplete,
}: {
  next?: number
  locale: Locale
  page: number
  category: CloudCategory
  id: string
  maxPages: number
  recordCategory: CloudCategory
  onComplete: () => void
}) => {
  const lang = useLocale()

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
  const isFetchingingRecords = useIsFetchingRecordDetails()
  const results = useZoomLevel3Queries({
    data:
      nextPositionedRecords?.map(({ category, id }) => {
        return {
          type: category,
          id,
          locale: lang,
          options: { refetchOnWindowFocus: false },
          small: true,
          page: page + 1,
        }
      }) ?? [],
  })

  const allFinished = results.every(query => !query.isLoading)

  useEffect(() => {
    if (allFinished && !isNextPositionedRecordLoading && !isFetchingingRecords) {
      // all the queries have executed successfully
      onComplete()
    }
  }, [allFinished, isFetchingingRecords, isNextPositionedRecordLoading, onComplete])

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
