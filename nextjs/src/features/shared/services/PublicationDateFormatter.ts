import { EnumComponentcorepublicationdateDisplaytype } from 'src/generated/graphql'
import { formatDate } from './dates'

class PublicationDateService {
  public static formatPublicationDate(
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
}
