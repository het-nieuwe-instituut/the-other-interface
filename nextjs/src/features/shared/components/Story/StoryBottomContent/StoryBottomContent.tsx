'use client'
import { StoryWithinThemeCarousel } from '../StoryWithinThemeCarousel/StoryWithinThemeCarousel'
import { RelatedStoriesCarousel } from '../RelatedStoriesCarousel/RelatedStoriesCarousel'
import ErrorBoundaryWrapper from '../../Error/ErrorBoundary/ErrorBoundary'

export const StoryBottomContent = () => {
  return (
    <>
      <div className="px-6">
        <ErrorBoundaryWrapper>
          <RelatedStoriesCarousel />
        </ErrorBoundaryWrapper>

        <ErrorBoundaryWrapper>
          <StoryWithinThemeCarousel />
        </ErrorBoundaryWrapper>
      </div>
    </>
  )
}
