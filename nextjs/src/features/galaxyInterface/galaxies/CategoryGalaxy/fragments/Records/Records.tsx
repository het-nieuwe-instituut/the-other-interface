import { Record } from '../Record/Record'

import { useSearchByCategoryQuery } from '@/features/shared/hooks/queries/useSearchByCategoryQuery'
import { useSelectedFilters } from '@/features/shared/hooks/search/useFilters'
import { usePageNumber } from '@/features/shared/hooks/usePageNumber'
import { useZoom2Params } from '@/features/shared/hooks/useZoom2Params'
import { cn } from '@/features/ui/utils/cn'
import { useContext, useMemo } from 'react'
import { SearchResultItemType } from 'src/generated/graphql'
import {
  GalaxyPaginationAnimationStateContext,
  getItemsAnimationClassNames,
  getNextItemsAnimationClassNames,
} from '../../../hooks/GalaxyPaginationAnimationStateProvider'
import { GalaxyZoomAnimationStateContext } from '../../../hooks/GalaxyZoomAnimationStateProvider'
import { CategoryGalaxyTemplateContext } from '../../CategoryGalaxy'
import { PositioningTemplate, positioningTemplates } from './positioningTemplates'

type Props = {
  pageAmount: number
  records: SearchResultItemType[] | null
}
const getPositionedRecords = ({
  records,
  pageNumber,
  currentTemplate,
}: {
  records: SearchResultItemType[] | null
  pageNumber: number
  currentTemplate: PositioningTemplate
}) => {
  let lastStoryIndex = 0
  const positionedRecords = []

  if (!records) return

  for (const position of Object.values(currentTemplate)) {
    const record = records[lastStoryIndex]

    if (!record) break

    positionedRecords.push({
      ...record,
      key: `zoom2-${pageNumber}-${lastStoryIndex}`,
      position,
      category: record.type,
    })
    lastStoryIndex++
  }

  return positionedRecords
}

export const Records: React.FC<Props> = ({ pageAmount, records }) => {
  const { category, search } = useZoom2Params()
  const { currentTemplate, nextTemplate } = useContext(CategoryGalaxyTemplateContext)
  const {
    conditions: galaxyPaginationAnimationConditions,
    animationState: galaxyPaginationAnimationState,
  } = useContext(GalaxyPaginationAnimationStateContext)
  const { animationState: galaxyZoomAnimationState } = useContext(GalaxyZoomAnimationStateContext)
  const { pageNumber } = usePageNumber()
  const selectedFilters = useSelectedFilters()

  const isLastPage = pageNumber === pageAmount
  const nextPage = pageNumber + 1

  const { data: nextResults } = useSearchByCategoryQuery({
    category,
    text: search,
    page: nextPage,
    enabled: !isLastPage,
    selectedFilters,
  })

  const nextRecords = useMemo(() => nextResults?.items || [], [nextResults?.items])

  const currentPositionedRecords = useMemo(() => {
    return getPositionedRecords({
      records,
      pageNumber,
      currentTemplate: currentTemplate ? currentTemplate : positioningTemplates[0],
    })
  }, [records, currentTemplate, pageNumber])

  const nextPositionedRecords = useMemo(() => {
    return getPositionedRecords({
      records: nextRecords,
      pageNumber: nextPage,
      currentTemplate: nextTemplate ? nextTemplate : positioningTemplates[0],
    })
  }, [nextRecords, nextTemplate, nextPage])

  return (
    <div className={'group-hover-blur size-full'}>
      <div
        className={cn(
          'absolute inset-x-[2vw] top-[7%] grid h-[calc(80%-1.7rem-60px)] w-[96vw] max-w-[1382.4px] grid-cols-4 grid-rows-3',
          getNextItemsAnimationClassNames(
            galaxyPaginationAnimationState,
            galaxyPaginationAnimationConditions,
            nextRecords?.length > 0
          ),
          galaxyZoomAnimationState === 'backwards' &&
            'animate-[toBlurAndHide_300ms_ease-in-out_forwards]'
        )}
      >
        {nextPositionedRecords?.map((r, i) => {
          return <Record key={r.key} tooltipPlace={i >= 8 ? 'top' : 'bottom'} record={r} />
        })}
      </div>

      <div className="absolute inset-x-[2vw] top-[7%] h-[calc(80%-1.7rem-60px)] w-[96vw] max-w-[1382.4px]">
        <div className="relative grid size-full grid-cols-4 grid-rows-3">
          {currentPositionedRecords?.map((r, i) => {
            return (
              <Record
                className={cn(
                  getItemsAnimationClassNames(
                    galaxyPaginationAnimationState,
                    galaxyPaginationAnimationConditions
                  ),
                  galaxyZoomAnimationState === 'backwards' &&
                    'animate-[toBlurAndHide_300ms_ease-in-out_forwards]'
                )}
                key={r.key}
                tooltipPlace={i >= 8 ? 'top' : 'bottom'}
                record={r}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
