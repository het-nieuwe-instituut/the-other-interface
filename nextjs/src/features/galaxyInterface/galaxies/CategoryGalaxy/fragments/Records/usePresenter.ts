import { useMemo } from 'react'
import { PositioningTemplate, positioningTemplates } from './positioningTemplates'
import { usePositioningTemplates } from '@/features/shared/hooks/usePositioningTemplates'
import { usePageNumber } from '@/features/shared/hooks/usePageNumber'
import { useZoom2Params } from '@/features/shared/hooks/useZoom2Params'
import { useSearchByCategoryQuery } from '@/features/shared/hooks/queries/useSearchByCategoryQuery'
import { SearchResultItemType } from 'src/generated/graphql'

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

export const usePresenter = (pageAmount: number) => {
  const { category, search } = useZoom2Params()
  const { pageNumber } = usePageNumber()
  const { currentTemplate, nextTemplate } = usePositioningTemplates(
    positioningTemplates,
    pageNumber
  )

  const isLastPage = pageNumber === pageAmount
  const nextPage = pageNumber + 1

  const { data: currentResults } = useSearchByCategoryQuery({
    category,
    text: search,
    page: pageNumber,
  })

  const { data: nextResults } = useSearchByCategoryQuery({
    category,
    text: search,
    page: nextPage,
    enabled: !isLastPage,
  })

  const currentRecords = useMemo(() => currentResults?.items || [], [currentResults?.items])
  const nextRecords = useMemo(() => nextResults?.items || [], [nextResults?.items])

  const currentPositionedRecords = useMemo(() => {
    return getPositionedRecords({
      records: currentRecords,
      pageNumber,
      currentTemplate,
    })
  }, [currentRecords, category, currentTemplate, pageNumber])

  const nextPositionedRecords = useMemo(() => {
    return getPositionedRecords({
      records: nextRecords,
      pageNumber: nextPage,
      currentTemplate: nextTemplate,
    })
  }, [nextRecords, category, nextTemplate, nextPage])

  return {
    currentPositionedRecords,
    nextPositionedRecords,
    isCurrentRecordsEmpty: currentRecords.length === 0,
    isNextRecordsEmpty: nextRecords.length === 0,
  }
}
