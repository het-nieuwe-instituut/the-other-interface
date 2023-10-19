export const addLocaleToUrl = (url: string, lang?: string | null) => {
  if (lang) {
    url += `&lang=${lang}`
  }
  return url
}
