'use client'
import { Box } from '@chakra-ui/react'
import { RecordStoriesCarousel } from '../../components/RecordStoriesCarousel/RecordStoriesCarousel'
import { RecordTable } from '@/features/shared/components/Record/RecordTable/RecordTable'

export const RecordBottomContent = () => {
  return (
    <Box pt={16} px={6}>
      <RecordTable />
      <RecordStoriesCarousel />
    </Box>
  )
}
