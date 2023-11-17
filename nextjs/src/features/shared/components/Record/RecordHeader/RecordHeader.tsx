'use client'
import { Box } from '@chakra-ui/react'
import { RecordTitle } from '../fragments/RecordTitle'
import { RecordDescription } from '../fragments/RecordDescription'
import RecordCarousel from '../RecordCarousel/RecordCarousel'
import { usePresenter } from './usePresenter'
import { ScrollToContent } from '@/features/pages/utils/utils'

export const RecordHeader = () => {
  const { record, scrollPosition } = usePresenter()

  return (
    <Box onClick={ScrollToContent} cursor={scrollPosition < 750 ? 'pointer' : 'cursor'}>
      <RecordTitle title={record?.title ?? ''} />
      <RecordDescription description={record?.description ?? ''} />
      {record?.thumbnail && record?.thumbnail.length > 0 && (
        <RecordCarousel imageUrls={record?.thumbnail ?? []} />
      )}
    </Box>
  )
}
