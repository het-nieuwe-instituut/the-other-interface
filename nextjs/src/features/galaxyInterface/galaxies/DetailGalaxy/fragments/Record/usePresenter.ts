import { useRouter } from 'next/navigation'

import { useRecordDetail } from '@/features/shared/hooks/queries/useRecordDetail'
import { Category } from '@/features/shared/utils/categories'

export const usePresenter = (id: string, category: Category) => {
  const { data, isLoading } = useRecordDetail(category, id)
  const router = useRouter()

  const handleClick = () => {
    router.push(`/detail/${category}/${id}`)
  }

  return {
    recordDetails: data,
    isLoading,
    handleClick,
  }
}
