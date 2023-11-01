import { State } from '@/features/shared/configs/store'
import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { useZoom2SearchResult } from '@/features/shared/hooks/queries/useZoom2SearchResult'
import { useZoom2SearchResultAmount } from '@/features/shared/hooks/queries/useZoom2SearchResultAmount'
import { CloudCategory } from '@/features/shared/utils/categories'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useSelector } from 'react-redux'

const MAX_RECORDS_PER_PAGE = 12

export const usePresenter = () => {
  const router = useRouter()
  const pathname = usePathname()
  const isSearchModeActive = useSelector((state: State) => state.shared.isSearchModeActive)

  const searchParams = useSearchParams()
  const category = searchParams?.get('category') as CloudCategory
  const page = Number(searchParams?.get('page') as string) || 1
  const searchParam = searchParams?.get('search') || ''
  const lang = searchParams?.get('lang')

  const { data: resultAmount, isLoading: isResultAmountLoading } =
    useZoom2SearchResultAmount(category)

  const searchResultAmount = Number(resultAmount?.zoomLevel2Amount?.total) || 0

  const pageAmount = searchResultAmount ? Math.ceil(searchResultAmount / MAX_RECORDS_PER_PAGE) : 0

  const { data: results } = useZoom2SearchResult({ category, pageAmount, page })

  const paginate = (pageNumber: number) => {
    const search = searchParam ? `&search=${searchParam}` : ''
    let url = pathname + `?category=${category}${search}&page=${pageNumber}`
    url = addLocaleToUrl(url, lang)

    router.push(url)
  }

  const increasePageNumber = () => {
    if (page < pageAmount) {
      paginate(page + 1)
    }
  }

  const decreasePageNumber = () => {
    if (page > 1) {
      paginate(page - 1)
    }
  }

  return {
    isSearchModeActive,
    isResultAmountLoading,
    currentPageNumber: page,
    pageAmount,
    searchResult: results,
    increasePageNumber,
    decreasePageNumber,
  }
}
