import { State } from '@/features/shared/configs/store'
import { useZoom2SearchResult } from '@/features/shared/hooks/queries/useZoom2SearchResult'
import { CloudCategory } from '@/features/shared/utils/categories'
import { useSearchParams } from 'next/navigation'
import { useSelector } from 'react-redux'

export const usePresenter = () => {
  const isSearchModeActive = useSelector((state: State) => state.shared.isSearchModeActive)

  const searchParams = useSearchParams()
  const category = searchParams?.get('category') as CloudCategory

  const { data } = useZoom2SearchResult(category)

  return {
    isSearchModeActive,
    searchResult: data,
  }
}
