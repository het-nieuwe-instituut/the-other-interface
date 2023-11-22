import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { useParams, useSearchParams } from 'next/navigation'
import { useStoryMetaById } from '@/features/shared/hooks/queries/useStoryMetaById'
import { formatDate } from '@/features/shared/utils/dates'
import {
  AuthorEntity,
  ComponentCoreTimeframe,
  EnumComponentcorepublicationdateDisplaytype,
  EnumTriplyrecordType,
  TriplyRecord,
} from 'src/generated/graphql'
import { capitalizeFirstLetter } from '@/features/shared/utils/text'
import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'

function formatPublicationDate(
  displayType?: EnumComponentcorepublicationdateDisplaytype | null,
  publicationDate?: string | null
) {
  switch (displayType) {
    case EnumComponentcorepublicationdateDisplaytype.Year:
      return publicationDate ? formatDate(publicationDate, 'YYYY') : undefined
    case EnumComponentcorepublicationdateDisplaytype.Date:
      return publicationDate ? formatDate(publicationDate, 'DD/MM/YYYY') : undefined
    default:
      return undefined
  }
}

function formatAuthor(author?: AuthorEntity['attributes'] | null) {
  if (!author) return undefined

  return `${capitalizeFirstLetter(author.firstName)}${
    author.insertion ? ' ' + author.insertion : ''
  }${' ' + capitalizeFirstLetter(author.lastName)}`
}

function formatTimeframe(timeframe?: ComponentCoreTimeframe | null) {
  if (!timeframe) return null

  return [timeframe.yearStart, timeframe.yearEnd].filter(item => !!item).join(' - ')
}

function getPeopleUrl(id: string, lang?: string | null) {
  let url = `/detail/people/${id}`
  url = addLocaleToUrl(url, lang)

  return url
}

export const usePresenter = () => {
  const storiesT = useTypeSafeTranslation('stories')
  const searchParams = useSearchParams()
  const lang = searchParams?.get('lang')

  const params = useParams()
  const id = params?.id as string

  const { data, isLoading } = useStoryMetaById(id)

  const story = data?.storyMetaByLocale?.data?.attributes

  const publicationDateFormatted = story?.publicationDate
    ? formatPublicationDate(story?.publicationDate.displayType, story?.publicationDate.date)
    : formatPublicationDate(EnumComponentcorepublicationdateDisplaytype.Year, story?.publishedAt)

  const linkedPeopleRecords =
    story?.triplyRecords?.data
      .filter((record): record is { attributes: TriplyRecord } => Boolean(record.attributes))
      .filter(record => record.attributes?.type === EnumTriplyrecordType.People)
      .map(record => ({
        recordId: record.attributes.recordId,
        title: record.attributes.people?.title,
        url: getPeopleUrl(record.attributes.recordId, lang),
      })) || []

  return {
    storiesT,
    isLoading,
    story: data?.storyMetaByLocale?.data?.attributes,
    publicationDateFormatted,
    authorFormatted: story?.author ? formatAuthor(story?.author?.data?.attributes) : '',
    themes: story?.themes?.data?.map(theme => theme.attributes?.name).join(', '),
    linkedPeopleRecords,
    locations: story?.locations?.data?.map(location => location.attributes?.city).join(', '),
    timeframe: formatTimeframe(story?.timeframe),
    links: story?.storyLinks?.buttons?.map(button => button) || [],
  }
}
