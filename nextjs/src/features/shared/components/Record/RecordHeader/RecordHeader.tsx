'use client'
import { Box } from '@chakra-ui/react'

interface Props {
  // probably every component should be responsibe for fetching its own data, so this prop should be removed, and i should fetch it here, so far its just for testing
  data?: unknown[]
}

export const RecordHeader: React.FC<Props> = () => {
  return (
    <Box>
      <h1>RecordHeader</h1>
    </Box>
  )
}
