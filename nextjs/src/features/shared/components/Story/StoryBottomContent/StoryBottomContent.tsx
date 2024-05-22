'use client'
import { Box } from '@chakra-ui/react'
import { StoryWithinThemeCarousel } from '../StoryWithinThemeCarousel/StoryWithinThemeCarousel'
import { RelatedStoriesCarousel } from '../RelatedStoriesCarousel/RelatedStoriesCarousel'
import ErrorBoundaryWrapper from '../../Error/ErrorBoundary/ErrorBoundary'

export const StoryBottomContent = () => {
  return (
    <>
      <Box px={6}>
        <ErrorBoundaryWrapper>
          <RelatedStoriesCarousel />
        </ErrorBoundaryWrapper>

        <ErrorBoundaryWrapper>
          <StoryWithinThemeCarousel />
        </ErrorBoundaryWrapper>
      </Box>
    </>
  )
}
