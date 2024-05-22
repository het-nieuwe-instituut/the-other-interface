import { useSearchParams } from 'next/navigation'
import { Locale } from 'src/generated/graphql'

export function useLocale(): Locale {
  return useLocaleWithoutDefaultFallback() || Locale.Nl
}

export function useLocaleWithoutDefaultFallback(): Locale | undefined {
  const locale = useSearchParams()?.get('lang')

  switch (locale) {
    case 'en':
      return Locale.En
    case 'nl':
      return Locale.Nl
  }
}
