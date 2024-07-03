'use client'
import { PageHeader } from '@/features/editorial/components/PageHeader/PageHeader'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { Category } from '@/features/shared/utils/categories'
import {
  ThumbnailCarousel,
  ThumbnailCarouselItem,
} from '@/features/ui/components/thumbnail-carousel/ThumbnailCarousel'
import { useParams } from 'next/navigation'
import { ArchivesRecordZoomLevel3Type } from 'src/generated/graphql'
import { LayerWrapper } from '../../../shared/components/Layers/LayerWrapper'
import { RecordMeta } from '../../components/RecordMeta/RecordMeta'
import { useRecordDetailQuery } from '../../hooks/useRecordDetailQuery'
import { useRecordMeta } from '../../hooks/useRecordMeta'
import { RecordBottomContent } from '../RecordBottomContent/RecordBottomContent'
import { RecordDescription } from '@/features/editorial/components/RecordDescription/RecordDescription'
import { useLocale } from '@/features/shared/hooks/useLocale'

export const RecordLayer = () => {
  const params = useParams()
  const category = params?.category as Category
  const locale = useLocale()

  const id = params?.id as string
  const { data: meta, isLoading } = useRecordMeta(category, id)
  const { data: record } = useRecordDetailQuery({
    type: category,
    id,
    options: { refetchOnWindowFocus: false, suspense: true },
    locale,
  })

  return (
    <LayerWrapper
      LeftContent={
        <>
          {/* <ErrorBoundaryWrapper> */}
          <div className="flex flex-col gap-4">
            <PageHeader
              title={record?.title ?? undefined}
              preface={record?.description ?? undefined}
              constrainPreface={true}
              splitByHtmlBreaks
            ></PageHeader>

            {record?.thumbnail && (
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
            )}

            {meta?.__typename === 'ArchivesRecordZoomLevel3Type' ? (
              <ArchivesDescriptions meta={meta} />
            ) : null}
          </div>
          {/* </ErrorBoundaryWrapper> */}
        </>
      }
      RightContent={<RecordMeta data={meta} isLoading={isLoading} category={category} />}
      BottomContent={<RecordBottomContent />}
    />
  )
}

const ArchivesDescriptions = ({ meta }: { meta: ArchivesRecordZoomLevel3Type }) => {
  const { t: recordMetaT } = useTypeSafeTranslation('recordMeta')

  return (
    <div className="mt-10 flex flex-col gap-10 empty:mt-0">
      {meta.custodialHistory && (
        <RecordDescription
          title={recordMetaT('custodialHistory')}
          preface={meta.custodialHistory}
          constrainPreface={true}
          splitByHtmlBreaks
        ></RecordDescription>
      )}
      {meta.systemOfArrangement && (
        <RecordDescription
          title={recordMetaT('systemOfArrangement')}
          preface={meta.systemOfArrangement}
          constrainPreface={true}
          splitByHtmlBreaks
        ></RecordDescription>
      )}
      {meta.sources && (
        <RecordDescription
          title={recordMetaT('sources')}
          preface={meta.sources}
          constrainPreface={true}
          splitByHtmlBreaks
        ></RecordDescription>
      )}
      {meta.existence && (
        <RecordDescription
          title={recordMetaT('existence')}
          preface={meta.existence}
          constrainPreface={true}
          splitByHtmlBreaks
        ></RecordDescription>
      )}
      {meta.existenceLocation && (
        <RecordDescription
          title={recordMetaT('existenceLocation')}
          preface={meta.existenceLocation}
          constrainPreface={true}
          splitByHtmlBreaks
        ></RecordDescription>
      )}
    </div>
  )
}
