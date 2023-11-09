import { useMemo } from 'react'

import { CloudCategory } from '@/features/shared/utils/categories'
import { useSearchParams } from 'next/navigation'
import { PositioningTemplate, positioningTemplates } from './positioningTemplates'
import { usePositioningTemplates } from '@/features/shared/hooks/usePositioningTemplates'
import { ZoomLevel2Type } from 'src/generated/graphql'
import { usePageNumber } from '@/features/shared/hooks/usePageNumber'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { useZoom2SearchResult } from '@/features/shared/hooks/queries/useZoom2SearchResult'

const getPositionedRecords = ({
  records,
  pageNumber,
  category,
  currentTemplate,
}: {
  records: ZoomLevel2Type[]
  pageNumber: number
  category: CloudCategory
  currentTemplate: PositioningTemplate
}) => {
  let lastStoryIndex = 0
  const positionedRecords = []

  for (const position of Object.values(currentTemplate)) {
    const record = records[lastStoryIndex]

    if (!record) break

    positionedRecords.push({
      ...record,
      key: `${pageNumber}-${lastStoryIndex}`,
      position,
      category,
    })
    lastStoryIndex++
  }

  return positionedRecords
}

export const usePresenter = (pageAmount: number) => {
  const searchParams = useSearchParams()
  const { t } = useTypeSafeTranslation('category')
  const category = searchParams?.get('category') as CloudCategory
  const { pageNumber } = usePageNumber()

  const isLastPage = pageNumber === pageAmount
  const nextPage = pageNumber + 1

  const { data: results, isLoading: isResultLoading } = useZoom2SearchResult({
    category,
    page: pageNumber,
  })

  const { data: nextResults } = useZoom2SearchResult({
    category,
    page: nextPage,
    enabled: !isLastPage,
  })

  const records = useMemo(() => results?.zoomLevel2?.nodes || [], [results])

  const nextRecords = useMemo(() => nextResults?.zoomLevel2?.nodes || [], [nextResults])

  const { currentTemplate, nextTemplate } = usePositioningTemplates(
    positioningTemplates,
    pageNumber
  )

  const positionedRecords = useMemo(() => {
    return getPositionedRecords({
      records,
      pageNumber,
      category,
      currentTemplate,
    })
  }, [records, category, currentTemplate, pageNumber])

  const nextPositionedRecords = useMemo(() => {
    return getPositionedRecords({
      records: nextRecords,
      pageNumber: nextPage,
      category,
      currentTemplate: nextTemplate,
    })
  }, [nextRecords, category, nextTemplate, nextPage])

  return {
    isResultLoading,
    positionedRecords,
    nextPositionedRecords,
    t,
  }
}
