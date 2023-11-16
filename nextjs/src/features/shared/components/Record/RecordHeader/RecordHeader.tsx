'use client'
import { Box } from '@chakra-ui/react'
import { RecordTitle } from '../fragments/RecordTitle'
import { RecordDescription } from '../fragments/RecordDescription'
import RecordCarousel from '../RecordCarousel/RecordCarousel'
import { usePresenter } from './usePresenter'
// import RecordCarousel from '../RecordCarousel/RecordCarousel'

interface Props {
  // probably every component should be responsibe for fetching its own data, so this prop should be removed, and i should fetch it here, so far its just for testing
  data?: unknown[]
}

export const RecordHeader: React.FC<Props> = () => {
  const { record, isLoading } = usePresenter()

  return (
    <Box>
      <RecordTitle title={record?.title} />
      <RecordDescription description={record?.description ?? ''} />
      <RecordCarousel imageUrls={record?.thumbnail ?? []} />
      {/* <RecordImage url={'https://picsum.photos/1920/1226'} /> */}
    </Box>
  )
}
