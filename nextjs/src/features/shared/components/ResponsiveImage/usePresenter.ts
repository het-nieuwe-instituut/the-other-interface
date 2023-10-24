import { useRef } from 'react'
import { useIsImagePortrait } from '../../hooks/useIsImagePortrait'

export const usePresenter = (src: string | null) => {
  const fallbackImageRef = useRef<string | null>(null)

  if (!fallbackImageRef.current) {
    fallbackImageRef.current = `url('/images/fallbacks/${Math.floor(Math.random() * 9) + 1}.svg')`
  }

  const { isPortrait } = useIsImagePortrait(src)

  return {
    isPortrait,
    fallbackImage: fallbackImageRef.current,
  }
}
