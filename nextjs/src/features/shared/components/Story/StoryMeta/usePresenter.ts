import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { useParams } from 'next/navigation'
import { useStoryMetaByIdQuery } from '@/features/shared/hooks/queries/useStoryMetaByIdQuery'
import { formatDate } from '@/features/shared/utils/dates'
import {
  AuthorEntity,
  ComponentCoreTimeframe,
  EnumComponentcorepublicationdateDisplaytype,
  EnumTriplyrecordType,
  Locale,
  TriplyRecord,
} from 'src/generated/graphql'
import { capitalizeFirstLetter } from '@/features/shared/utils/text'
import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { getUniqueById } from '@/features/shared/utils/get-unique-by-id'
import { useLocale } from '@/features/shared/hooks/useLocale'

function formatPublicationDate(
  displayType?: EnumComponentcorepublicationdateDisplaytype | null,
  publicationDate?: string | null
) {
  if (!publicationDate) return undefined

  switch (displayType) {
    case EnumComponentcorepublicationdateDisplaytype.Year:
      return formatDate(publicationDate, 'YYYY')
    case EnumComponentcorepublicationdateDisplaytype.Date:
      return formatDate(publicationDate, 'DD/MM/YYYY')
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

function getPeopleUrl(id: string, lang?: Locale | null) {
  let url = `/detail/people/${id}`
  url = addLocaleToUrl(url, lang)

  return url
}

export const usePresenter = () => {
  const storiesT = useTypeSafeTranslation('stories')
  const lang = useLocale()

  const params = useParams()
  const id = params?.id as string

  const { data, isLoading } = useStoryMetaByIdQuery({
    id,
    options: { refetchOnWindowFocus: false, suspense: true },
  })
  const story = data?.storyMetaByLocale?.data?.attributes

  const linkedPeopleRecords =
    story?.triplyRecords?.data
      .filter((record): record is { attributes: TriplyRecord } => Boolean(record.attributes))
      .filter(record => record.attributes?.type === EnumTriplyrecordType.People)
      .map(record => ({
        id: record.attributes.recordId,
        title: record.attributes.people?.title,
        url: getPeopleUrl(record.attributes.recordId, lang),
      })) || []

  return {
    storiesT,
    isLoading,
    story: data?.storyMetaByLocale?.data?.attributes,
    publicationDateFormatted: formatPublicationDate(
      story?.publicationDate?.displayType,
      story?.publicationDate?.date
    ),
    authorFormatted: story?.author ? formatAuthor(story?.author?.data?.attributes) : '',
    themes: story?.themes?.data?.map(theme => theme.attributes?.name).join(', '),
    linkedPeopleRecords: getUniqueById(linkedPeopleRecords),
    locations: story?.locations?.data?.map(location => location.attributes?.city).join(', '),
    timeframe: formatTimeframe(story?.timeframe),
    links: story?.storyLinks?.buttons?.map(button => button) || [],
    siblingsRelation: story?.siblings,
    parentRelation: story?.parent_story,
    childrenRelation: story?.child_stories,
    lang,
  }
}
