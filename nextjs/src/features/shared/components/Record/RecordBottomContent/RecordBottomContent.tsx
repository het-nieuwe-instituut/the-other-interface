'use client'
import { Box } from '@chakra-ui/react'
import { RecordStoriesCarousel } from '../RecordStoriesCarousel/RecordStoriesCarousel'
import { RecordTable } from '../RecordTable/RecordTable'

export const RecordBottomContent = () => {
  return (
    <Box pt={16} px={6}>
      <RecordStoriesCarousel />
      <RecordTable />
      {/* only show the record table if it isn't a story  */}
    </Box>
  )
}
