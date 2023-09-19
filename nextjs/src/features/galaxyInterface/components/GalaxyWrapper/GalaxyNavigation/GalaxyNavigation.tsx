'use client'

import { FOOTER_Z_INDEX } from '@/features/shared/constants/mainConstants'
import { Box, Grid, Text, GridItem } from '@chakra-ui/react'

const pages = [
  {
    title: 'Collection',
  },
  {
    title: 'Category',
  },
  {
    title: 'Detail',
  },
]
export const GalaxyNavigation: React.FC = () => {
  return (
    <Box
      height="60px"
      borderRadius={'5px'}
      backgroundColor={'blueAlpha.100'}
      padding={'6px 12px'}
      zIndex={FOOTER_Z_INDEX}
      color={'navyAlpha.100'}
    >
      <Text textStyle="socialLarge.sm">Zoom</Text>

      <Grid templateColumns="repeat(3, 1fr)" border={'1px solid red'}>
        {pages.map(({ title }) => (
          <GridItem key={title} border={'1px solid red'}>
            <Box
              border={'1px solid'}
              borderColor={'navyAlpha.100'}
              width="10px"
              height="10px"
              borderRadius="50%"
            />

            <Text textStyle="socialLarge.sm" mt={'4px'}>
              {title}
            </Text>
          </GridItem>
        ))}
      </Grid>
    </Box>
  )
}
