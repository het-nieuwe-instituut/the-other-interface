'use client'

import { FOOTER_Z_INDEX } from '@/features/shared/constants/mainConstants'
import { Box, Grid, GridItem } from '@chakra-ui/react'

export const GalaxyNavigation: React.FC = () => {
  return (
    <Box
      height="60px"
      borderRadius={'5px'}
      backgroundColor={'blueAlpha.100'}
      padding={'6px 12px'}
      zIndex={FOOTER_Z_INDEX}
    >
      AAAA
    </Box>
  )
}
