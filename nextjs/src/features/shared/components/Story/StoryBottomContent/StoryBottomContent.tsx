'use client'
import { Box } from '@chakra-ui/react'
import { StoryWithinThemeCarousel } from '../StoryWithinThemeCarousel/StoryWithinThemeCarousel'

export const StoryBottomContent = () => {
  return (
    <Box pt={16} px={6}>
      <StoryWithinThemeCarousel />
    </Box>
  )
}
