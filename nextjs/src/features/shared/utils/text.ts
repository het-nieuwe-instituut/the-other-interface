export function capitalizeFirstLetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export function prepareTextToUrl(text?: string | null) {
  if (!text) return ''
  return text.replace(/\s+/g, '-').toLowerCase()
}
