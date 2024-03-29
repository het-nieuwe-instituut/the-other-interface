export function modifyImageURL(src: string | null) {
  if (!src) return src
  const maxWidth = 1600
  const maxHeight = 1600
  if (src.includes('hdl.handle.net')) {
    return `${src}?urlappend=/previews/maxWidth_${maxWidth}_maxHeight_${maxHeight}.jpg`
  }
  return src
}
