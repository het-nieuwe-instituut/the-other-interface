'use client'
import { Box } from '@chakra-ui/react'
import { StoryWithinThemeCarousel } from '../StoryWithinThemeCarousel/StoryWithinThemeCarousel'
import { RelatedStoriesCarousel } from '../RelatedStoriesCarousel/RelatedStoriesCarousel'

export const StoryBottomContent = () => {
  return (
    <>
      <Box pt={16} px={6}>
        <Box>
          <RelatedStoriesCarousel />
        </Box>
        <Box pt={4}>
          <StoryWithinThemeCarousel />
        </Box>
      </Box>
    </>
  )
}
