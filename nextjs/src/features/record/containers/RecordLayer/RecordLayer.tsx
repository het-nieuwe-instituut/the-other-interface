'use client'
import { PageHeader } from '@/features/editorial/components/PageHeader/PageHeader'
import { RecordDescription } from '@/features/editorial/components/RecordDescription/RecordDescription'
import ErrorBox from '@/features/shared/components/Error/ErrorBox'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { useLocale } from '@/features/shared/hooks/useLocale'
import { Category } from '@/features/shared/utils/categories'
import { AudioPlayer } from '@/features/ui/components/audio/AudioPlayer'
import {
  AsteriskAnnotationGroup,
  AsteriskAnnotationItem,
} from '@/features/ui/components/Sources/AsteriskAnnotations'
import {
  ThumbnailCarousel,
  ThumbnailCarouselItem,
} from '@/features/ui/components/thumbnail-carousel/ThumbnailCarousel'
import { VideoPlayer } from '@/features/ui/components/video/VideoPlayer'
import { useParams } from 'next/navigation'
import {
  ArchivesRecordZoomLevel3Type,
  PublicationZoomLevel3DetailType,
} from 'src/generated/graphql'
import { LayerWrapper } from '../../../shared/components/Layers/LayerWrapper'
import { RecordMeta } from '../../components/RecordMeta/RecordMeta'
import { OmitEnrichedData } from '../../configs/recordMetaFieldOrderConfig'
import { useZoomLevel3Query } from '../../hooks/useZoomLevel3Query'
import { useZoomLevel3RecordQuery } from '../../hooks/useZoomLevel3RecordQuery'
import { RecordBottomContent } from '../RecordBottomContent/RecordBottomContent'

function getEnrichedSources(data: ReturnType<typeof useZoomLevel3Query>['data']) {
  if (!data) return []
  if (
    data?.__typename === 'ArchiveZoomLevel3DetailType' &&
    (data?.enrichedSources?.length ?? 0) > 0
  )
    return data.enrichedSources
  if (
    data?.__typename === 'ObjectsZoomLevel3DetailType' &&
    (data?.enrichedSources?.length ?? 0) > 0
  )
    return data.enrichedSources
  if (data?.__typename === 'PeopleZoomLevel3DetailType' && (data?.enrichedSources?.length ?? 0) > 0)
    return data.enrichedSources
  if (
    data?.__typename === 'PublicationZoomLevel3DetailType' &&
    (data?.enrichedSources?.length ?? 0) > 0
  )
    return data.enrichedSources
  return []
}

export const RecordLayer = () => {
  const { t } = useTypeSafeTranslation('common')
  const params = useParams()
  const category = params?.category as Category
  const locale = useLocale()

  const id = params?.id as string
  const {
    data: zoomLevel3Record,
    isLoading,
    isError: isMetaError,
  } = useZoomLevel3RecordQuery(category, id)
  const { data: zoomLevel3, isError: isRecordError } = useZoomLevel3Query({
    type: category,
    id,
    options: { refetchOnWindowFocus: false, suspense: false },
    locale,
  })
  const enrichedSources = getEnrichedSources(zoomLevel3)
  const enrichedTitles = enrichedSources?.filter(v => !!v.title)
  const enrichedDescriptions = enrichedSources?.filter(v => !!v.description)
  const enrichedThumbnails = enrichedSources?.filter(v => !!v.thumbnail)

  return (
    <LayerWrapper
      LeftContent={
        isRecordError ? (
          <ErrorBox />
        ) : (
          <>
            <div className="flex flex-col gap-4">
              <PageHeader
                title={zoomLevel3?.title ?? undefined}
                preface={zoomLevel3?.description ?? undefined}
                constrainPreface={true}
                splitByHtmlBreaks
                enrichedTitles={enrichedTitles}
                enrichedDescriptions={enrichedDescriptions}
              ></PageHeader>

              {zoomLevel3?.__typename === 'ArchiveZoomLevel3DetailType' &&
              (zoomLevel3?.asteriskSuggestions?.length ?? 0) > 0 ? (
                <AsteriskAnnotationGroup count={zoomLevel3.asteriskSuggestions?.length ?? 0}>
                  {zoomLevel3.asteriskSuggestions?.map((suggestion, index) => {
                    const name = suggestion.asterisk_name_title ?? suggestion.asterisk_name_title
                    const date =
                      suggestion.asterisk_date_title ?? suggestion.asterisk_date_description
                    const subject =
                      suggestion.asterisk_subject_title ?? suggestion.asterisk_subject_description

                    return (
                      <AsteriskAnnotationItem
                        key={index}
                        title={t('asteriskMeta', { author: name, date: date })}
                      >
                        {subject ?? ''}
                      </AsteriskAnnotationItem>
                    )
                  })}
                </AsteriskAnnotationGroup>
              ) : null}

              {zoomLevel3?.__typename === 'ObjectsZoomLevel3DetailType' &&
              (zoomLevel3?.asteriskSuggestions?.length ?? 0) > 0 ? (
                <AsteriskAnnotationGroup count={zoomLevel3.asteriskSuggestions?.length ?? 0}>
                  {zoomLevel3.asteriskSuggestions?.map((suggestion, index) => {
                    const date = suggestion.asterisk_date_title ?? ''
                    const name = suggestion.asterisk_name_title ?? ''
                    const subject = suggestion.asterisk_subject_title ?? ''

                    return (
                      <AsteriskAnnotationItem
                        title={t('asteriskMeta', { author: name, date })}
                        key={index}
                      >
                        {subject ?? ''}
                      </AsteriskAnnotationItem>
                    )
                  })}
                </AsteriskAnnotationGroup>
              ) : null}

              {zoomLevel3?.__typename === 'PeopleZoomLevel3DetailType' &&
              (zoomLevel3?.asteriskSuggestions?.length ?? 0) > 0 ? (
                <AsteriskAnnotationGroup count={zoomLevel3.asteriskSuggestions?.length ?? 0}>
                  {zoomLevel3.asteriskSuggestions?.map((suggestion, index) => {
                    const date = suggestion.asterisk_date_description ?? ''
                    const name = suggestion.asterisk_name_description ?? ''
                    const subject = suggestion.asterisk_subject_description ?? ''

                    return (
                      <AsteriskAnnotationItem
                        title={t('asteriskMeta', { author: name, date })}
                        key={index}
                      >
                        {subject ?? ''}
                      </AsteriskAnnotationItem>
                    )
                  })}
                </AsteriskAnnotationGroup>
              ) : null}

              {zoomLevel3 && 'mediaReference' in zoomLevel3 && 'mediaType' in zoomLevel3 && (
                <MediaPlayer
                  mediaReference={zoomLevel3?.mediaReference}
                  mediaType={zoomLevel3?.mediaType}
                />
              )}

              {zoomLevel3?.thumbnail && (
                <ThumbnailCarousel>
                  {zoomLevel3?.thumbnail.map((item, index) => (
                    <ThumbnailCarouselItem
                      key={index}
                      index={index}
                      src={item}
                      alt={`${zoomLevel3.title} image #${index + 1}` ?? ''}
                      enrichedSource={enrichedThumbnails?.at(index)}
                    />
                  ))}
                </ThumbnailCarousel>
              )}

              {zoomLevel3Record?.__typename === 'ArchivesRecordZoomLevel3Type' ? (
                <ArchivesDescriptions meta={zoomLevel3Record} />
              ) : null}
              {zoomLevel3?.__typename === 'PublicationZoomLevel3DetailType' ? (
                <PublicationsDescriptions data={zoomLevel3} />
              ) : null}
            </div>
          </>
        )
      }
      RightContent={
        isMetaError ? (
          <ErrorBox />
        ) : (
          <RecordMeta data={zoomLevel3Record} isLoading={isLoading} category={category} />
        )
      }
      BottomContent={<RecordBottomContent />}
    />
  )
}

interface MediaPlayerProps {
  mediaType?: string | null
  mediaReference?: string | null
}

const MediaPlayer = ({ mediaReference, mediaType }: MediaPlayerProps) => {
  if (!mediaReference || !mediaType) return null

  if (mediaType.startsWith('video')) {
    return <VideoPlayer src={mediaReference} type={mediaType} />
  }

  if (mediaType.startsWith('audio')) {
    return <AudioPlayer src={mediaReference} type={mediaType} />
  }

  return null
}

interface ArchiveMetaDescriptionProps {
  meta: OmitEnrichedData<ArchivesRecordZoomLevel3Type>
}

const ArchivesDescriptions = ({ meta }: ArchiveMetaDescriptionProps) => {
  const { t: recordMetaT } = useTypeSafeTranslation('recordMeta')
  const keys = [
    'custodialHistory',
    'systemOfArrangement',
    'sources',
    'existence',
    'existenceLocation',
  ] as const

  return (
    <div className="mt-10 flex flex-col gap-10 empty:mt-0">
      {keys.map((k, i) => {
        const title = recordMetaT(k)
        const preface = meta[k] ?? undefined

        if (!title || !preface) {
          return null
        }

        return <Description key={i} title={title} preface={preface}></Description>
      })}
    </div>
  )
}

interface PublicationsMetaDescriptionProps {
  data: OmitEnrichedData<PublicationZoomLevel3DetailType>
}

const PublicationsDescriptions = ({ data }: PublicationsMetaDescriptionProps) => {
  type DescriptionKey = keyof Omit<
    PublicationsMetaDescriptionProps['data'],
    '__typename' | 'title' | 'thumbnail' | 'yearOfPublication' | 'mediaReference' | 'mediaType'
  >

  const { t: recordMetaT } = useTypeSafeTranslation('recordMeta')
  const keys: DescriptionKey[] = ['holding', 'historyNotes', 'annotation']

  return (
    <div className="mt-10 flex flex-col gap-10 empty:mt-0">
      {keys.map((k, i) => {
        const title = recordMetaT(k)
        const preface = data[k] ?? undefined
        if (!title || !preface) {
          return null
        }
        return <Description key={i} title={title} preface={preface}></Description>
      })}
    </div>
  )
}

const Description = ({ title, preface }: { title?: string; preface?: string | null }) => {
  if (!preface) return null
  return (
    <RecordDescription
      title={title}
      preface={preface ?? undefined}
      constrainPreface={true}
      splitByHtmlBreaks
    ></RecordDescription>
  )
}
