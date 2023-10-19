export const addLocaleToUrl = (url: string, lang?: string | null) => {
  if (!lang) {
    return url
  }

  // If the URL already has a query string, append with '&', otherwise use '?'
  const separator = url.includes('?') ? '&' : '?'
  return `${url}${separator}lang=${lang}`
}
