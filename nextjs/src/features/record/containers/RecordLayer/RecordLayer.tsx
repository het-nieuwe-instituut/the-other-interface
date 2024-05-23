'use client'
import { RecordMeta } from '../../components/RecordMeta/RecordMeta'
import { RecordBottomContent } from '../RecordBottomContent/RecordBottomContent'
import { RecordHeader } from '../../components/RecordHeader/RecordHeader'
import { LayerWrapper } from '../../../shared/components/Layers/LayerWrapper'
import ErrorBoundaryWrapper from '@/features/shared/components/Error/ErrorBoundary/ErrorBoundary'

export const RecordLayer = () => {
  return (
    <LayerWrapper
      LeftContent={
        <>
          <ErrorBoundaryWrapper>
            <RecordHeader />
          </ErrorBoundaryWrapper>
        </>
      }
      RightContent={<RecordMeta />}
      BottomContent={<RecordBottomContent />}
    />
  )
}
