import { useLocale } from '@/features/shared/hooks/useLocale'
import { CATEGORIES, CloudCategory } from '@/features/shared/utils/categories'
import { useParams, useSearchParams } from 'next/navigation'
import { useContext, useMemo } from 'react'
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

export const RelatedStories: React.FC<Props> = ({ allRelationTotals }) => {
  const params = useParams()
  const locale = useLocale()
  const searchParams = useSearchParams()
  const page = parseInt(searchParams?.get('page') || '1')
  const id = params?.id as string
  const recordCategory = params?.category as CloudCategory
  const maxPages = Math.ceil((allRelationTotals?.[CATEGORIES.stories] || 2) / 2)
  const { current, next } = useSwapCurrentNext(page, maxPages)
  const { data, isLoading: isRelatedStoriesLoading } = useRelatedStoriesQuery({
    maxPages,
    page,
    id,
    locale,
    category: recordCategory,
    current: current ?? 0,
  })
  const { data: nextData, isLoading: isNextRelatedStoriesLoading } = useRelatedStoriesQuery({
    maxPages,
    page: page + 1,
    id,
    locale,
    category: recordCategory,
    current: next ?? 0,
  })
  const { conditions, animationState } = useContext(GalaxyPaginationAnimationStateContext)
  const positionedStories = data || []
  const nextPositionedStories = nextData || []

  return (
    <>
      <div className="pointer-events-none col-start-2 col-end-2 row-start-1 row-end-3 text-white">
        <div className="grid h-full grid-cols-2 grid-rows-4">
          {!isNextRelatedStoriesLoading &&
            nextPositionedStories.map(story => (
              <Record
                className={getNextItemsAnimationClassNames(
                  animationState,
                  conditions,
                  nextPositionedStories.length > 0
                )}
                key={story.id}
                record={story}
                tabIndex={-1}
              />
            ))}

          <DetailedRecord />
        </div>
      </div>

      <div className="col-start-2 col-end-2 row-start-1 row-end-3 text-white">
        <div className="grid h-full grid-cols-2 grid-rows-4">
          {!isRelatedStoriesLoading &&
            positionedStories.map(story => (
              <Record
                className={getItemsAnimationClassNames(animationState, conditions)}
                key={story.id}
                record={story}
              />
            ))}

          <DetailedRecord />
        </div>
      </div>
    </>
  )
}
