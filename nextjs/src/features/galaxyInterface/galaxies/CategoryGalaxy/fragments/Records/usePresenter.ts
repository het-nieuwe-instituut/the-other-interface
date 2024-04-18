import { useMemo } from 'react'
import { SearchCategory } from '@/features/shared/utils/categories'
import { PositioningTemplate, positioningTemplates } from './positioningTemplates'
import { usePositioningTemplates } from '@/features/shared/hooks/usePositioningTemplates'
import { usePageNumber } from '@/features/shared/hooks/usePageNumber'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { useZoom2SearchResult } from '@/features/shared/hooks/queries/useZoom2SearchResult'
import { useZoom2Params } from '@/features/shared/hooks/useZoom2Params'
import { RecordType } from '../types'

const getPositionedRecords = ({
  records,
  pageNumber,
  category,
  currentTemplate,
}: {
  records: RecordType[] | null
  pageNumber: number
  category: SearchCategory
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
      category,
    })
    lastStoryIndex++
  }

  return positionedRecords
}

export const usePresenter = (pageAmount: number) => {
  const { t } = useTypeSafeTranslation('category')

  const { category, search } = useZoom2Params()
  const { pageNumber } = usePageNumber()
  const { currentTemplate, nextTemplate } = usePositioningTemplates(
    positioningTemplates,
    pageNumber
  )

  const isLastPage = pageNumber === pageAmount
  const nextPage = pageNumber + 1

  const { data: currentResults, isLoading: isResultLoading } = useZoom2SearchResult({
    category,
    text: search,
    page: pageNumber,
  })

  const { data: nextResults } = useZoom2SearchResult({
    category,
    text: search,
    page: nextPage,
    enabled: !isLastPage,
  })

  const currentRecords = useMemo(() => currentResults || [], [currentResults])
  const nextRecords = useMemo(() => nextResults || [], [nextResults])

  const currentPositionedRecords = useMemo(() => {
    return getPositionedRecords({
      records: currentRecords,
      pageNumber,
      category,
      currentTemplate,
    })
  }, [currentRecords, category, currentTemplate, pageNumber])

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
    currentPositionedRecords,
    nextPositionedRecords,
    isCurrentRecordsEmpty: currentRecords.length === 0,
    isNextRecordsEmpty: nextRecords.length === 0,
    t,
  }
}
