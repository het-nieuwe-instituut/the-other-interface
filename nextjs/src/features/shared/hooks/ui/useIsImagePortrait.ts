import { useEffect, useState } from 'react'

export const useIsImagePortrait = (src: string | null) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccessfullyLoaded, setIsSuccessfullyLoaded] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || !src) return

    setIsLoading(true)

    const img = new window.Image()
    img.src = src

    img.onload = function () {
      setIsSuccessfullyLoaded(true)
      setIsLoading(false)
    }

    img.onerror = function () {
      console.error(`Failed to load image: ${src}`)
      setIsSuccessfullyLoaded(false)
      setIsLoading(false)
    }

    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [src])

  return {
    isSuccessfullyLoaded,
    isLoading,
  }
}
