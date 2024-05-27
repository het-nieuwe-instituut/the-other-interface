import { ScrollToContent } from '@/features/pages/utils/utils'
import { Category } from '@/features/shared/utils/categories'
import { useParams } from 'next/navigation'
import { RecordDescription } from '../../fragments/RecordDescription'
import { RecordTitle } from '../../fragments/RecordTitle'
import { useRecordDetailQuery } from '../../hooks/useRecordDetailQuery'
import RecordCarousel from '../RecordCarousel/RecordCarousel'

export const RecordHeader = () => {
  const params = useParams()
  const category = params?.category as Category
  const id = params?.id as string

  const handleScrollToContentClick = () => {
    ScrollToContent()
  }

  const { data: record } = useRecordDetailQuery({
    type: category,
    id,
    options: { refetchOnWindowFocus: false, suspense: true },
  })

  return (
    <div>
      <RecordTitle
        title={record?.title ?? ''}
        handleScrollToContentClick={handleScrollToContentClick}
      />
      <RecordDescription description={record?.description ?? ''} />
      {record?.thumbnail && record?.thumbnail.length > 0 && (
        <RecordCarousel imageUrls={record?.thumbnail ?? []} />
      )}
    </div>
  )
}
