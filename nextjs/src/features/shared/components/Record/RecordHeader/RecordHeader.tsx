'use client'
import { Box } from '@chakra-ui/react'
import { RecordTitle } from '../fragments/RecordTitle'
import { RecordDescription } from '../fragments/RecordDescription'
import RecordCarousel from '../RecordCarousel/RecordCarousel'
import { usePresenter } from './usePresenter'

export const RecordHeader = () => {
  const { record } = usePresenter()

  return (
    <Box>
      <RecordTitle title={record?.title ?? ''} />
      <RecordDescription description={record?.description ?? ''} />
      <RecordCarousel imageUrls={record?.thumbnail ?? []} />
    </Box>
  )
}
