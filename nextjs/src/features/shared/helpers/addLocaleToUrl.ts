import { Locale } from 'src/generated/graphql'

export const addLocaleToUrl = (path: string, lang?: Locale | null) => {
  if (!lang) {
    return path
  }

  const parsedUrl = new URL(path, window.location.origin)
  parsedUrl.searchParams.set('lang', lang)

  return parsedUrl.toString()
}
