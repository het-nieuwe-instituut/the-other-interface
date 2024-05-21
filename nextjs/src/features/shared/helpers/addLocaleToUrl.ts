import { Locale } from 'src/generated/graphql'

export const addLocaleToUrl = (url: string, lang?: Locale | null) => {
  if (!lang) {
    return url
  }

  const parsedUrl = new URL(url)
  parsedUrl.searchParams.set('lang', lang)

  return parsedUrl.toString()
}
