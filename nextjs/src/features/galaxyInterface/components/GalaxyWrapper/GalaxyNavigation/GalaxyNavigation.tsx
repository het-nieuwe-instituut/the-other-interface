'use client'
import { FOOTER_Z_INDEX } from '@/features/shared/constants/mainConstants'
import { Box, Grid, Text } from '@chakra-ui/react'
import { usePresenter } from './usePresenter'
import { NavigationLink } from './fragments/NavigationLink'
import { galaxyZooms } from './fragments/constants'

export const GalaxyNavigation: React.FC = () => {
  const { currentZoomNumber } = usePresenter()
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

      <Grid templateColumns="repeat(3, 1fr)" mt={'4px'}>
        {Object.values(galaxyZooms).map(zoom => (
          <NavigationLink zoomData={zoom} currentZoomNumber={currentZoomNumber} />
        ))}
      </Grid>
    </Box>
  )
}
