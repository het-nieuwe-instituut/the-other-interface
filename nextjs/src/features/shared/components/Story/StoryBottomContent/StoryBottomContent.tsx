'use client'
import { StoryWithinThemeCarousel } from '../StoryWithinThemeCarousel/StoryWithinThemeCarousel'
import { RelatedStoriesCarousel } from '../RelatedStoriesCarousel/RelatedStoriesCarousel'
import ErrorBoundaryWrapper from '../../Error/ErrorBoundary/ErrorBoundary'

interface StoryBottomContentProps {
  themeIds: string[]
  id: string
}

export const StoryBottomContent = ({ themeIds, id }: StoryBottomContentProps) => {
  return (
    <>
      <div className="flex flex-col gap-4 px-6 pb-10">
        <ErrorBoundaryWrapper>
          <RelatedStoriesCarousel />
        </ErrorBoundaryWrapper>

        <ErrorBoundaryWrapper>
          <StoryWithinThemeCarousel themeIds={themeIds} id={id} />
        </ErrorBoundaryWrapper>
      </div>
    </>
  )
}
