'use client'
import { Box } from '@chakra-ui/react'
import { usePresenter } from './usePresenter'
import { ImageCarousel } from '@/features/modules/components/carousels/ImageCarousel/ImageCarousel'

export const RecordBottomContent = () => {
  const { stories } = usePresenter()

  return <Box pt={16}>{stories && <ImageCarousel images={stories} />}</Box>
}
