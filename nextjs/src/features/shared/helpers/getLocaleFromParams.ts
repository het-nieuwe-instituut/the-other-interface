import { Locale } from 'src/generated/graphql'

export function getLocaleFromParams(params: Record<string, string | string[] | undefined>): Locale {
  const lang = params['lang']

  switch (lang) {
    case 'en':
      return Locale.En
    case 'nl':
    default:
      return Locale.Nl
  }
}
