'use client'
import { Box, Text } from '@chakra-ui/react'
import { usePresenter } from './usePresenter'
import { ImageCarousel } from '@/features/modules/components/carousels/ImageCarousel/ImageCarousel'

export const RelatedStoriesCarousel = () => {
  const { stories, tStories, handleRedirect } = usePresenter()

  return (
    <Box>
      {stories && stories.length > 0 && (
        <>
          <Text textStyle={'h1'} mb={4}>
            {tStories('relatedStories')} ({stories.length})
          </Text>
          <ImageCarousel images={stories} onItemClick={handleRedirect} />
        </>
      )}
    </Box>
  )
}