import { useRef } from 'react'
import { useIsImagePortrait } from '../../hooks/useIsImagePortrait'

export const usePresenter = (src: string | null, disableRightClick = false) => {
  const fallbackImageRef = useRef<string | null>(null)

  if (!fallbackImageRef.current) {
    fallbackImageRef.current = `/images/fallbacks/${Math.floor(Math.random() * 9) + 1}.svg`
  }

  const { isSuccessfullyLoaded } = useIsImagePortrait(src)

  const handleRightClick = (event: React.MouseEvent) => {
    if (disableRightClick) {
      event.preventDefault()
    }
  }

  const showFallbackImage = !isSuccessfullyLoaded || !src
  return {
    fallbackImage: fallbackImageRef.current,
    isSuccessfullyLoaded: !showFallbackImage && isSuccessfullyLoaded,
    handleRightClick,
  }
}
