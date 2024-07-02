'use client'
import { StoryWithinThemeCarousel } from '../StoryWithinThemeCarousel/StoryWithinThemeCarousel'
import { RelatedStoriesCarousel } from '../RelatedStoriesCarousel/RelatedStoriesCarousel'
import ErrorBoundaryWrapper from '../../Error/ErrorBoundary/ErrorBoundary'

export const StoryBottomContent = () => {
  return (
    <>
      <div className="flex flex-col gap-4 px-6 pb-10">
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
