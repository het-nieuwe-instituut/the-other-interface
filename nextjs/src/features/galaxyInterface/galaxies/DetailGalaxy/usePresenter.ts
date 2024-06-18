import { State } from '@/features/shared/configs/store'
import { useRecordRelationsCount } from '@/features/shared/hooks/queries/useRecordRelationsCount'
import { usePagination } from '@/features/shared/hooks/usePagination'
import { Category } from '@/features/shared/utils/categories'
import { useParams } from 'next/navigation'
import { useSelector } from 'react-redux'

export const usePresenter = () => {
  const params = useParams()
  const category = params?.category as Category
  const id = params?.id as string
  const isSearchModeActive = useSelector((state: State) => state.shared.isSearchModeActive)
  const { data } = useRecordRelationsCount(category, id)

  const { page, pageAmount, increasePageNumber, decreasePageNumber } = usePagination(
    data?.totalPages ?? 0,
    false,
    isSearchModeActive
  )

  return {
    category,
    id,
    isSearchModeActive,
    currentPageNumber: page,
    pageAmount,
    increasePageNumber,
    decreasePageNumber,
    allRelationTotals: data?.allRelationTotals,
  }
}
