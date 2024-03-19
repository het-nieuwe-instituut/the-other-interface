'use client'
import { Box } from '@chakra-ui/react'
import { RecordStoriesCarousel } from '../RecordStoriesCarousel/RecordStoriesCarousel'

export const RecordBottomContent = () => {
  return (
    <Box pt={16} px={6}>
      <RecordStoriesCarousel />
    </Box>
  )
}
