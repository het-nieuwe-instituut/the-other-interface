import { Locale } from 'src/generated/graphql'

export const addLocaleToUrl = (path: string, lang?: Locale | null) => {
  if (!lang) {
    return path
  }

  const parsedUrl = new URL(path, process.env.parsed.NEXT_PUBLIC_URL)
  parsedUrl.searchParams.set('lang', lang)

  return parsedUrl.toString()
}
