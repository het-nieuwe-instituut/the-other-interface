import { useSearchParams } from 'next/navigation'
import { Locale } from 'src/generated/graphql'

export function useLocale(): Locale {
  const locale = useSearchParams()?.get('lang')

  switch (locale) {
    case 'en':
      return Locale.En
    case 'nl':
    default:
      return Locale.Nl
  }
}
