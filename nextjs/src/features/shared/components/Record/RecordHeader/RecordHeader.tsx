'use client'
import { Box } from '@chakra-ui/react'
import { RecordTitle } from '../fragments/RecordTitle'

interface Props {
  // probably every component should be responsibe for fetching its own data, so this prop should be removed, and i should fetch it here, so far its just for testing
  data?: unknown[]
}

export const RecordHeader: React.FC<Props> = () => {
  return (
    <Box>
      <RecordTitle title={'some title'} />
    </Box>
  )
}
