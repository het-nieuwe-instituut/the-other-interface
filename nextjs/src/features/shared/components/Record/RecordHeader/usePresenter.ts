import { useRecordDetail } from '@/features/shared/hooks/queries/useRecordDetail'
import { Category } from '@/features/shared/utils/categories'
import { useParams } from 'next/navigation'
import { ScrollToContent } from '@/features/pages/utils/utils'

export const usePresenter = () => {
  const params = useParams()
  const category = params?.category as Category
  const id = params?.id as string

  const handleScrollToContentClick = () => {
    ScrollToContent()
  }

  const { data: record, isLoading } = useRecordDetail(category, id)

  return {
    record,
    isLoading,
    handleScrollToContentClick,
  }
}
