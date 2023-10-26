import { useZoom2SearchResult } from '@/features/shared/hooks/queries/useZoom2SearchResult'
import { usePageCategory } from '@/features/shared/hooks/usePageCategory'

export const usePresenter = () => {
  const { pageCategory } = usePageCategory()

  const { data, isLoading } = useZoom2SearchResult(pageCategory)

  const recordsPerPage = 12
  const searchResultAmount = Number(data?.zoomLevel2?.total) || 0

  return {
    pagesAmount: searchResultAmount ? Math.ceil(searchResultAmount / recordsPerPage) : 0,
    isLoading,
    page: 1,
  }
}
