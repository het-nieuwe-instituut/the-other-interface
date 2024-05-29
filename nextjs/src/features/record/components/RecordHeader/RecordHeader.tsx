import { PageHeader } from '@/features/shared/components/PageHeader/PageHeader'
import { Category } from '@/features/shared/utils/categories'
import { useParams } from 'next/navigation'
import { useRecordDetailQuery } from '../../hooks/useRecordDetailQuery'
import RecordCarousel from '../RecordCarousel/RecordCarousel'

export const RecordHeader = () => {
  const params = useParams()
  const category = params?.category as Category
  const id = params?.id as string

  const { data: record } = useRecordDetailQuery({
    type: category,
    id,
    options: { refetchOnWindowFocus: false, suspense: true },
  })

  return (
    <div>
      <PageHeader
        title={record?.title ?? undefined}
        preface={record?.description ?? undefined}
        constrainPreface={true}
      ></PageHeader>
      {record?.thumbnail && record?.thumbnail.length > 0 && (
        <RecordCarousel imageUrls={record?.thumbnail ?? []} />
      )}
    </div>
  )
}
