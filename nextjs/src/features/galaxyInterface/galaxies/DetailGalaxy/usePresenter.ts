import { State } from '@/features/shared/configs/store'
import { Category } from '@/features/shared/utils/categories'
import { useParams } from 'next/navigation'
import { useSelector } from 'react-redux'

export const usePresenter = () => {
  const params = useParams()
  const category = params?.category as Category
  const id = params?.id as string
  const isSearchModeActive = useSelector((state: State) => state.shared.isSearchModeActive)
  return {
    category,
    id,
    isSearchModeActive,
  }
}
