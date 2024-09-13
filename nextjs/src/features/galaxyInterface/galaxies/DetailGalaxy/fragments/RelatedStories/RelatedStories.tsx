import {
  useIsFetchingRecordDetails,
  useZoomLevel3Queries,
} from '@/features/record/hooks/useZoomLevel3Query'
import { useLocale } from '@/features/shared/hooks/useLocale'
import { CATEGORIES, CloudCategory } from '@/features/shared/utils/categories'
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
  const [nextComplete, setNextCOmplete] = useState(false)
  const { conditions, animationState } = useContext(GalaxyPaginationAnimationStateContext)

  return (
    <>
      <div
        style={getNextItemsCssProperties('50')}
        className={
          nextComplete
            ? cn(
                getNextItemsAnimationClassNames(animationState, conditions, true),
                'pointer-events-none col-start-2 col-end-2 row-start-1 row-end-3 text-ivory-100'
              )
            : 'hidden'
        }
      >
        <div className="grid h-full grid-cols-2 grid-rows-4">
          {!isFetchingEditorial && complete && (
            <NextPositionedRecords
              onComplete={() => setNextCOmplete(true)}
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
      <div className="col-start-2 col-end-3 row-start-1 row-end-3 flex items-center justify-center ">
        <DetailedRecord className="flex  size-full items-center justify-center" />
      </div>
      <div className="col-start-2 col-end-2 row-start-1 row-end-3 flex items-center justify-center text-ivory-100">
        <div
          style={getItemsCssProperties('50')}
          className={
            complete
              ? cn(
                  getItemsAnimationClassNames(animationState, conditions),
                  'grid h-full w-full grid-cols-2 grid-rows-4'
                )
              : 'hidden'
          }
        >
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
  const {
    conditions: galaxyPaginationAnimationConditions,
    animationState: galaxyPaginationAnimationState,
  } = useContext(GalaxyPaginationAnimationStateContext)
  const { conditions: galaxyZoomAnimationConditions, animationState: galaxyZoomAnimationState } =
    useContext(GalaxyZoomAnimationStateContext)
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
  const allFinished = results.every(query => !query.isLoading)
  useEffect(() => {
    if (allFinished && !isRelatedStoriesLoading && !isFetchingingRecords) {
      // all the queries have executed successfully
      onComplete()
    }
  }, [allFinished, isFetchingingRecords])

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
    //shuffle the array
    return config.sort(() => Math.random() - 0.5)
  }, [])

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
              key={keyExtractor(positionedRecord.id, index, positionedStories)}
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
  next,
  onComplete,
}: {
  next?: number
  locale: Locale
  page: number
  id: string
  maxPages: number
  recordCategory: CloudCategory
  onComplete: () => void
}) => {
  const lang = useLocale()

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

  const isFetchingingRecords = useIsFetchingRecordDetails()
  const allFinished = results.every(query => !query.isLoading)
  useEffect(() => {
    if (allFinished && !isNextRelatedStoriesLoading && !isFetchingingRecords) {
      // all the queries have executed successfully
      onComplete()
    }
  }, [allFinished, isFetchingingRecords])

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
