'use client'
import { Box } from '@chakra-ui/react'
import { RecordTitle } from '../../fragments/RecordTitle'
import { RecordDescription } from '../../fragments/RecordDescription'
import RecordCarousel from '../RecordCarousel/RecordCarousel'
import { usePresenter } from './usePresenter'

export const RecordHeader = () => {
  const { record, handleScrollToContentClick } = usePresenter()

  return (
    <Box>
      <RecordTitle
        title={record?.title ?? ''}
        handleScrollToContentClick={handleScrollToContentClick}
      />
      <RecordDescription description={record?.description ?? ''} />
      {record?.thumbnail && record?.thumbnail.length > 0 && (
        <RecordCarousel imageUrls={record?.thumbnail ?? []} />
      )}
    </Box>
  )
}
