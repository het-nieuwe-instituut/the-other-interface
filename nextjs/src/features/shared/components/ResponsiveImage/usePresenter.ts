import { useEffect, useState } from 'react'

export const usePresenter = (src: string) => {
  const [isPortrait, setIsPortrait] = useState<boolean | null>(null)

  useEffect(() => {
    const img = new window.Image()
    img.src = src

    img.onload = function () {
      setIsPortrait(img.height > img.width)
    }

    img.onerror = function () {
      console.error(`Failed to load image: ${src}`)
      setIsPortrait(null)
    }

    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [src])

  return {
    isPortrait,
  }
}
