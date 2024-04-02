export function modifyImageURL(src: string | null) {
  if (!src || !src.includes('hdl.handle.net')) {
    return src
  }

  // see HNIT-1428 for the reasoning behind the requirements
  const maxWidth = 1200
  const maxHeight = 1000

  return `${src}?urlappend=/previews/maxWidth_${maxWidth}_maxHeight_${maxHeight}.jpg`
}
