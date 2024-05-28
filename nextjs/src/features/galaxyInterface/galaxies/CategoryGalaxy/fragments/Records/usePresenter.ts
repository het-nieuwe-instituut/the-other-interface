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
export const usePresenter = (pageAmount: number, records: SearchResultItemType[] | null) => {
  const { category, search, filters } = useZoom2Params()

  const { pageNumber } = usePageNumber()
  const { currentTemplate, nextTemplate } = usePositioningTemplates(
    positioningTemplates,
    pageNumber
  )

  const isLastPage = pageNumber === pageAmount
  const nextPage = pageNumber + 1

  const { data: nextResults } = useSearchByCategoryQuery({
    category,
    filters, // added
    text: search,
    page: nextPage,
    enabled: !isLastPage,
  })

  const nextRecords = useMemo(() => nextResults?.items || [], [nextResults?.items])

  const currentPositionedRecords = useMemo(() => {
    return getPositionedRecords({
      records,
      pageNumber,
      currentTemplate,
    })
  }, [records, category, currentTemplate, pageNumber])

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
    isCurrentRecordsEmpty: records?.length === 0,
    isNextRecordsEmpty: nextRecords.length === 0,
  }
}
