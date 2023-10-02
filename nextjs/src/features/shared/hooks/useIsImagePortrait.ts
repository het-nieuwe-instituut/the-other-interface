import { useEffect, useRef, useState } from 'react'

export const useIsImagePortrait = (src: string | null) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isPortrait, setIsPortrait] = useState<boolean | null>(null)

  const fallbackImageRef = useRef<string | null>(null)

  if (!fallbackImageRef.current) {
    fallbackImageRef.current = `url('/images/fallbacks/${Math.floor(Math.random() * 5) + 1}.svg')`
  }

  useEffect(() => {
    if (typeof window === 'undefined' || !src) return

    setIsLoading(true)

    const img = new window.Image()
    img.src = src

    img.onload = function () {
      setIsPortrait(img.height > img.width)
      setIsLoading(false)
    }

    img.onerror = function () {
      console.error(`Failed to load image: ${src}`)
      setIsPortrait(null)
      setIsLoading(false)
    }

    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [src])

  return {
    isPortrait,
    isLoading,
    fallbackImage: fallbackImageRef.current,
  }
}
