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
      <div className="flex flex-col gap-4 px-5 pb-10 xl:px-6">
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
