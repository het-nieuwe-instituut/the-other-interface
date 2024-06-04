import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { DateService } from '@/features/shared/services/dates'
import { capitalizeFirstLetter } from '@/features/shared/utils/text'
import {
  AuthorEntity,
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
        format: 'Do of MMMM YYYY',
        locale,
      })
    default:
      return undefined
  }
}

export function formatAuthor(author?: AuthorEntity['attributes'] | null) {
  if (!author) return undefined

  return `${capitalizeFirstLetter(author.firstName)}${
    author.insertion ? ' ' + author.insertion : ''
  }${' ' + capitalizeFirstLetter(author.lastName)}`
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
