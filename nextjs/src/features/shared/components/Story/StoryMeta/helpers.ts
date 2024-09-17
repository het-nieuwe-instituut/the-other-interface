import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { DateService } from '@/features/shared/services/dates'
import { capitalizeFirstLetter, joinNullableStrings } from '@/features/shared/utils/text'
import {
  AuthorEntity,
  AuthorEntityResponseCollection,
  ComponentCoreTimeframe,
  EnumComponentcorepublicationdateDisplaytype,
  Locale,
} from 'src/generated/graphql'

export function formatPublicationDate(
  locale: Locale,
  displayType?: EnumComponentcorepublicationdateDisplaytype | null,
  publicationDate?: string | null
) {
  if (!publicationDate) return undefined
  switch (displayType) {
    case EnumComponentcorepublicationdateDisplaytype.Year:
      return DateService.formatDateString({ date: publicationDate, format: 'YYYY', locale })
    case EnumComponentcorepublicationdateDisplaytype.Date:
      return DateService.formatDateString({
        date: publicationDate,
        format: 'DD/MM/YYYY',
        locale,
      })
    default:
      return undefined
  }
}

export function formatAuthor(author?: AuthorEntity['attributes'] | null) {
  if (!author) return undefined

  const firstName = author.firstName ? capitalizeFirstLetter(author.firstName) : ''
  const insertion = author.insertion ? ' ' + author.insertion : ''
  const lastName = author.lastName ? ' ' + capitalizeFirstLetter(author.lastName) : ''

  return joinNullableStrings(' ', firstName, insertion, lastName)
}

export function formatAuthors(
  authors?: Omit<AuthorEntityResponseCollection, 'meta'> | null | undefined
) {
  if (!authors || authors.data.length === 0) return undefined

  const formattedAuthors = authors.data
    .map(author => {
      const firstName = author.attributes?.firstName
        ? capitalizeFirstLetter(author.attributes?.firstName)
        : ''
      const insertion = author.attributes?.insertion ? ' ' + author.attributes?.insertion : ''
      const lastName = author.attributes?.lastName
        ? ' ' + capitalizeFirstLetter(author.attributes?.lastName)
        : ''

      return joinNullableStrings(' ', firstName, insertion, lastName)
    })
    .join(', ')

  return formattedAuthors
}

export function formatTimeframe(timeframe?: ComponentCoreTimeframe | null) {
  if (!timeframe) return null

  return [timeframe.yearStart, timeframe.yearEnd].filter(item => !!item).join(' - ')
}

export function getPeopleUrl(id: string, lang?: Locale | null) {
  let url = `/detail/people/${id}`
  url = addLocaleToUrl(url, lang)

  return url
}
