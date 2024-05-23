import { RecordStoriesCarousel } from '../../components/RecordStoriesCarousel/RecordStoriesCarousel'
import { RecordTable } from '@/features/shared/components/Record/RecordTable/RecordTable'
import React from 'react'
import ErrorBoundaryWrapper from '@/features/shared/components/Error/ErrorBoundary/ErrorBoundary'

export const RecordBottomContent = () => {
  return (
    <div className="px-6">
      <ErrorBoundaryWrapper>
        <RecordTable />
      </ErrorBoundaryWrapper>
      <ErrorBoundaryWrapper>
        <RecordStoriesCarousel />
      </ErrorBoundaryWrapper>
    </div>
  )
}
