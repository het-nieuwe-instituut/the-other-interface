import { useRecordDetail } from '@/features/shared/hooks/queries/useRecordDetail'
import { Category } from '@/features/shared/utils/categories'
import { useParams } from 'next/navigation'
import useScroll from '@/features/shared/hooks/useScroll'

export const usePresenter = () => {
  const params = useParams()
  const category = params?.category as Category
  const id = params?.id as string

  const { scrollPosition } = useScroll()

  const { data: record, isLoading } = useRecordDetail(category, id)

  return {
    record,
    isLoading,
    scrollPosition,
  }
}
