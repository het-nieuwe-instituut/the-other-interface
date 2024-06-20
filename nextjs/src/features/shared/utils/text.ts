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

export const convertToCurlyQuotes = (text: string) => {
  return (
    text
      // Handle double quotes
      .replace(/"([^"]*)"/g, '“$1”')
      // Handle single quotes
      .replace(/'([^']*)'/g, '‘$1’')
      // Handle remaining single straight quotes
      .replace(/(\W|^)'/g, '$1‘')
      .replace(/'(\W|$)/g, '’$1')
      // Handle remaining double straight quotes
      .replace(/(\W|^)"([^"]*)"/g, '$1“$2”')
      .replace(/"(\W|$)/g, '”$1')
  )
}
