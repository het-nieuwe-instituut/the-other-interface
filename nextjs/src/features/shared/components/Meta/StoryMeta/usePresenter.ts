import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { formatDate } from '@/features/shared/utils/dates'

export const usePresenter = () => {
  const commonT = useTypeSafeTranslation('common')
  const storiesT = useTypeSafeTranslation('stories')

  // function formatPublicationDate(
  //   type?: EnumComponentcorepublicationdateDisplaytype | null,
  //   date?: string | null
  // ) {
  //   if (date && type === EnumComponentcorepublicationdateDisplaytype.Year) {
  //     return formatDate(date, 'YYYY')
  //   }

  //   if (date && type === EnumComponentcorepublicationdateDisplaytype.Date) {
  //     return formatDate(date, 'DD/MM/YYYY')
  //   }

  //   return undefined
  // }

  return {
    commonT,
    storiesT,
  }
}
