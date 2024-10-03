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
import { useParams, useSearchParams } from 'next/navigation'
import {
  ArchiveZoomLevel3DetailType,
  EnrichedBaseArchiveZoomLevel3DetailType,
  EnrichedBaseObjectsZoomLevel3DetailType,
  EnrichedBasePeopleZoomLevel3DetailType,
  EnrichedBasePublicationZoomLevel3DetailType,
  PublicationZoomLevel3DetailType,
} from 'src/generated/graphql'
import { LayerWrapper } from '../../../shared/components/Layers/LayerWrapper'
import { RecordMeta } from '../../components/RecordMeta/RecordMeta'
import { OmitEnrichedData } from '../../configs/recordMetaFieldOrderConfig'
import { useZoomLevel3Query } from '../../hooks/useZoomLevel3Query'
import { useZoomLevel3RecordQuery } from '../../hooks/useZoomLevel3RecordQuery'
import { RecordBottomContent } from '../RecordBottomContent/RecordBottomContent'

function getEnrichedSources(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
): (
  | NonNullable<EnrichedBaseArchiveZoomLevel3DetailType>
  | NonNullable<EnrichedBasePeopleZoomLevel3DetailType>
  | NonNullable<EnrichedBaseObjectsZoomLevel3DetailType>
  | NonNullable<EnrichedBasePublicationZoomLevel3DetailType>
)[] {
  if (
    data?.__typename === 'PublicationZoomLevel3DetailType' ||
    data?.__typename === 'PeopleZoomLevel3DetailType' ||
    data?.__typename === 'ObjectsZoomLevel3DetailType' ||
    data?.__typename === 'ArchiveZoomLevel3DetailType'
  ) {
    const enrichedSources = data?.enrichedSources || []
    return (data?.enrichedSources?.length ?? 0) > 0 ? enrichedSources : []
  }
  return []
}

export const RecordLayer = () => {
  const { t } = useTypeSafeTranslation('common')
  const params = useParams()
  const searchParams = useSearchParams()
  const category = params?.category as Category
  const locale = useLocale()
  const page = Number(searchParams?.get('page') ?? '1')

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
    page,
  })

  const enrichedSources = getEnrichedSources(zoomLevel3) ?? []
  const enrichedTitles = enrichedSources?.filter(v => 'title' in v && !!v.title)
  const enrichedDescriptions = enrichedSources?.filter(v => !!v.description)
  const [asteriskTitleData, asteriskDescriptionData] = getAsteriskHeaderData(zoomLevel3)

  return (
    <LayerWrapper
      suspense={true}
      LeftContent={
        isRecordError ? (
          <ErrorBox />
        ) : (
          <>
            <div className="flex flex-col">
              <div className="pb-20">
                <PageHeader
                  title={zoomLevel3?.title ?? undefined}
                  preface={zoomLevel3?.description ?? undefined}
                  constrainPreface={true}
                  splitByHtmlBreaks
                  enrichedTitles={enrichedTitles}
                  enrichedDescriptions={enrichedDescriptions}
                  asteriskTitle={asteriskTitleData}
                ></PageHeader>
              </div>

              {zoomLevel3?.__typename === 'ArchiveZoomLevel3DetailType' &&
              (asteriskDescriptionData?.length ?? 0) > 0 ? (
                <AsteriskAnnotationGroup count={asteriskDescriptionData?.length ?? 0}>
                  {asteriskDescriptionData?.map((suggestion, index) => {
                    const name = suggestion.asterisk_name_description ?? ''
                    const date = suggestion.asterisk_date_description ?? ''
                    const subject = suggestion.asterisk_subject_description ?? ''

                    return (
                      <AsteriskAnnotationItem
                        key={index}
                        title={
                          name && date ? t('asteriskMeta', { author: name, date: date }) : null
                        }
                      >
                        {subject ?? ''}
                      </AsteriskAnnotationItem>
                    )
                  })}
                </AsteriskAnnotationGroup>
              ) : null}

              {zoomLevel3?.__typename === 'ObjectsZoomLevel3DetailType' &&
              (asteriskDescriptionData?.length ?? 0) > 0 ? (
                <AsteriskAnnotationGroup count={asteriskDescriptionData?.length ?? 0}>
                  {asteriskDescriptionData?.map((suggestion, index) => {
                    const date = suggestion.asterisk_date_description ?? ''
                    const name = suggestion.asterisk_name_description ?? ''
                    const subject = suggestion.asterisk_subject_description ?? ''

                    return (
                      <AsteriskAnnotationItem
                        title={
                          name && date ? t('asteriskMeta', { author: name, date: date }) : null
                        }
                        key={index}
                      >
                        {subject ?? ''}
                      </AsteriskAnnotationItem>
                    )
                  })}
                </AsteriskAnnotationGroup>
              ) : null}

              {zoomLevel3?.__typename === 'PeopleZoomLevel3DetailType' && // might need to fix
              (asteriskDescriptionData?.length ?? 0) > 0 ? (
                <AsteriskAnnotationGroup count={asteriskDescriptionData?.length ?? 0}>
                  {asteriskDescriptionData?.map((suggestion, index) => {
                    const date = suggestion.asterisk_date_description ?? ''
                    const name = suggestion.asterisk_name_description ?? ''
                    const subject = suggestion.asterisk_subject_description ?? ''

                    return (
                      <AsteriskAnnotationItem
                        title={
                          name && date ? t('asteriskMeta', { author: name, date: date }) : null
                        }
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
                      src={item || ''}
                      alt={`${zoomLevel3.title} image #${index + 1}` ?? ''}
                      enrichedSource={enrichedSources?.at(index)}
                    />
                  ))}
                </ThumbnailCarousel>
              )}

              {zoomLevel3 && zoomLevel3.__typename === 'ArchiveZoomLevel3DetailType' ? (
                <ArchivesDescriptions data={zoomLevel3} />
              ) : null}
              {zoomLevel3 && zoomLevel3.__typename === 'PublicationZoomLevel3DetailType' ? (
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

interface AsterickProps {
  __typename?: string | null
  asteriskSuggestions?:
    | {
        asterisk_date_description?: string | null
        asterisk_date_title?: string | null
        asterisk_name_description?: string | null
        asterisk_name_title?: string | null
        asterisk_subject_description?: string | null
        asterisk_subject_title?: string | null
      }[]
    | null
}

type AsteriskHeaderDataType =
  | [
      {
        asterisk_date_title: string | null
        asterisk_name_title: string | null
        asterisk_subject_title: string | null
      },
      {
        asterisk_date_description: string | null
        asterisk_name_description: string | null
        asterisk_subject_description: string | null
      }[]
    ]
  | [null, null]

interface AsteriskTitle {
  asterisk_date_title: string | null
  asterisk_name_title: string | null
  asterisk_subject_title: string | null
}

interface AsteriskDescription {
  asterisk_date_description: string | null
  asterisk_name_description: string | null
  asterisk_subject_description: string | null
}

function getAsteriskHeaderData(asteriskData?: AsterickProps | null): AsteriskHeaderDataType {
  if (
    (asteriskData?.__typename === 'ObjectsZoomLevel3DetailType' ||
      asteriskData?.__typename === 'ArchiveZoomLevel3DetailType' ||
      asteriskData?.__typename === 'PeopleZoomLevel3DetailType') &&
    asteriskData?.asteriskSuggestions
  ) {
    const asteriskTitle = asteriskData.asteriskSuggestions.reduce(
      (acc: any, curr: any) => {
        if (curr.asterisk_subject_title && curr.asterisk_subject_title.endsWith(' (huidig)')) {
          return {
            asterisk_date_title: curr.asterisk_date_title,
            asterisk_name_title: curr.asterisk_name_title,
            asterisk_subject_title: curr.asterisk_subject_title.replace(' (huidig)', ''),
          }
        }
        return acc
      },
      {
        asterisk_date_title: null,
        asterisk_name_title: null,
        asterisk_subject_title: null,
      } as AsteriskTitle
    )

    const asteriskDescription = asteriskData.asteriskSuggestions.reduce((acc: any, curr: any) => {
      if (curr.asterisk_subject_description) {
        acc.push({
          asterisk_date_description: curr.asterisk_date_description,
          asterisk_name_description: curr.asterisk_name_description,
          asterisk_subject_description: curr.asterisk_subject_description,
        })
        return acc
      }
      return acc
    }, [] as AsteriskDescription[])
    return [asteriskTitle, asteriskDescription]
  }

  return [null, null]
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
  data: OmitEnrichedData<ArchiveZoomLevel3DetailType>
}

const ArchivesDescriptions = ({ data }: ArchiveMetaDescriptionProps) => {
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
        const preface = data[k] ?? undefined

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
