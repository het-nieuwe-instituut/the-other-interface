import { RefObject, useEffect, useState } from 'react'

/**
 * line height needs to be set in the css to work
 */
export const useClampDetectionByLineHeight = <T extends HTMLElement>(
  ref: RefObject<T>,
  { lineCount = 8 }
) => {
  const [shouldClamp, setShouldClamp] = useState(false)
  useEffect(() => {
    const checkClamp = () => {
      const element = ref.current
      if (!element) return

      const lineHeight = parseFloat(getComputedStyle(element).lineHeight)

      const maxHeight = lineHeight * lineCount - lineCount
      const elementHeight = element.scrollHeight

      setShouldClamp(elementHeight > maxHeight)
    }

    checkClamp()

    window.addEventListener('resize', checkClamp)
    return () => {
      window.removeEventListener('resize', checkClamp)
    }
  }, [lineCount, ref])

  return shouldClamp
}
