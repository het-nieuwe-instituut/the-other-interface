import { useRecordDetailQuery } from '@/features/record/hooks/useRecordDetailQuery'
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

  const { data: record, isLoading } = useRecordDetailQuery({
    type: category,
    id,
    options: { refetchOnWindowFocus: false, suspense: true },
  })

  return {
    record,
    isLoading,
    handleScrollToContentClick,
  }
}
