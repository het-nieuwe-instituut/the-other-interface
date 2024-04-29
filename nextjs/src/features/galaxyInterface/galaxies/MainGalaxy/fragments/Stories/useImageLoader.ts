import { useState, useCallback, useEffect } from 'react'
import { PositionedStory } from '../types'

export const useImageLoader = (positionedStories: PositionedStory[]) => {
  const [loadedImages, setLoadedImages] = useState(new Set())

  const handleImageLoaded = useCallback((id: string) => {
    setLoadedImages(prev => {
      const newSet = new Set(prev)
      newSet.add(id)
      return newSet
    })
  }, [])

  useEffect(() => {
    const newLoadedSet = new Set()
    positionedStories.forEach(story => {
      if (!story.hasImage) {
        newLoadedSet.add(story.id)
      }
    })
    setLoadedImages(newLoadedSet)
    return () => setLoadedImages(new Set())
  }, [positionedStories])

  const allImagesLoaded = positionedStories.length === loadedImages.size

  return { handleImageLoaded, allImagesLoaded }
}
