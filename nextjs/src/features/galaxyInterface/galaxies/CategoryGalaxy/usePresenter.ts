import { State } from '@/features/shared/configs/store'
import { useZoom2SearchResult } from '@/features/shared/hooks/queries/useZoom2SearchResult'
import { CloudCategory } from '@/features/shared/utils/categories'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { sharedActions } from '@/features/shared/stores/shared.store'
import { useDispatch, useSelector } from 'react-redux'

const MAX_RECORDS_PER_PAGE = 12

export const usePresenter = () => {
  const router = useRouter()
  const pathname = usePathname()
  const dispatch = useDispatch()
  const { isSearchModeActive, searchPageNumber } = useSelector((state: State) => state.shared)

  const searchParams = useSearchParams()
  const category = searchParams?.get('category') as CloudCategory

  const { data, isLoading } = useZoom2SearchResult(category, searchPageNumber)

  useEffect(() => {
    const pageNumber = Number(searchParams?.get('page')) || 1

    dispatch(sharedActions.searchPageNumber({ searchPageNumber: pageNumber }))
  }, [searchParams, dispatch])

  const searchResultAmount = Number(data?.zoomLevel2?.total) || 0

  const pagesAmount = searchResultAmount
    ? Math.ceil(Number(data?.zoomLevel2?.total) / MAX_RECORDS_PER_PAGE)
    : 0

  const paginate = (pageNumber: number) => {
    const url = pathname + `?category=${category}&page=${pageNumber}`
    router.push(url)
  }

  // const paginate = (pageNumber: number) => {
  //   // Spread current query params
  //   const updatedQuery = {
  //     ...router.query,
  //     page: pageNumber,
  //   };

  //   // Navigate using updated query parameters
  //   router.push({
  //     pathname: pathname,
  //     query: updatedQuery,
  //   });
  // }

  const increasePageNumber = () => {
    if (searchPageNumber < pagesAmount) {
      paginate(searchPageNumber + 1)
    }
  }

  const decreasePageNumber = () => {
    if (searchPageNumber > 1) {
      paginate(searchPageNumber - 1)
    }
  }

  return {
    isSearchModeActive,
    isLoading: false,
    currentPageNumber: searchPageNumber,
    pagesAmount,
    searchResult: data,
    increasePageNumber,
    decreasePageNumber,
  }
}
