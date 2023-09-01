import { useEffect, useState } from 'react'

export const useIsImagePortrait = (src: string | null) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isPortrait, setIsPortrait] = useState<boolean | null>(null)

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
  }
}
