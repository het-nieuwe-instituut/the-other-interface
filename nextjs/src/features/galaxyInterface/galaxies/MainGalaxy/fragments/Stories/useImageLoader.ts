import { useState, useCallback, useEffect } from 'react'
import { PositionedStory } from '../types'
import { useSearchParams } from 'next/navigation'
import { StoryEntity } from 'src/generated/graphql'

export const useImageLoader = (
  positionedStories: PositionedStory[],
  page: number,
  stories: StoryEntity[]
) => {
  const [loadedImages, setLoadedImages] = useState(new Set())
  const searchParams = useSearchParams()
  const lang = searchParams?.get('lang')

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
    // Strategic dependency choice to prevent unnecessary re-renders and avoid infinite loading states after hot reloads in development mode.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, lang, stories])

  const allImagesLoaded = positionedStories.length === loadedImages.size

  return { handleImageLoaded, allImagesLoaded }
}
