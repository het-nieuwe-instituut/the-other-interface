import { PageHeader } from '@/features/editorial/components/PageHeader/PageHeader'
import { Category } from '@/features/shared/utils/categories'
import {
  ThumbnailCarousel,
  ThumbnailCarouselItem,
} from '@/features/ui/components/thumbnail-carousel/ThumbnailCarousel'
import { useParams } from 'next/navigation'
import { useRecordDetailQuery } from '../../hooks/useRecordDetailQuery'

export const RecordHeader = () => {
  const params = useParams()
  const category = params?.category as Category
  const id = params?.id as string

  const { data: record } = useRecordDetailQuery({
    type: category,
    id,
    options: { refetchOnWindowFocus: false, suspense: true },
  })

  console.log(record)

  return (
    <div className="flex flex-col gap-4">
      <PageHeader
        title={record?.title ?? undefined}
        preface={record?.description ?? undefined}
        constrainPreface={true}
      ></PageHeader>

      {record?.thumbnail ? (
        <ThumbnailCarousel>
          {record?.thumbnail.map((item, index) => (
            <ThumbnailCarouselItem
              key={index}
              index={index}
              src={item}
              alt={`${record.title} image #${index + 1}` ?? ''}
            />
          ))}
        </ThumbnailCarousel>
      ) : (
        <p>fooo</p>
      )}
    </div>
  )
}
