export function capitalizeFirstLetter(text?: string) {
  if (!text) return ''
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export function prepareTextToUrl(text?: string | null) {
  if (!text) return ''
  return text.replace(/\s+/g, '-').toLowerCase()
}

export function joinNullableStrings(separator: string, ...strings: (string | null | undefined)[]) {
  const s = strings.filter(Boolean)
  if (!s.length) return null

  return s.join(separator)
}
