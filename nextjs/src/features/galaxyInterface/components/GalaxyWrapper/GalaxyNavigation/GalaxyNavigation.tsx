'use client'
import { FOOTER_Z_INDEX } from '@/features/shared/constants/mainConstants'
import { Box, Grid, Text } from '@chakra-ui/react'
import { usePresenter } from './usePresenter'
import { galaxyZooms } from './fragments/constants'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { NavigationLink } from './fragments/NavigationLink/NavigationLink'

export const GalaxyNavigation: React.FC = () => {
  const { currentZoomNumber, previousZoomLinks } = usePresenter()
  const { t } = useTypeSafeTranslation('navigation')

  return (
    <Box
      height="60px"
      borderRadius={'5px'}
      backgroundColor={'blueAlpha.100'}
      padding={'6px 12px'}
      zIndex={FOOTER_Z_INDEX}
      color={'pinkAlpha.100'}
    >
      <Text textStyle="socialLarge.sm">{t('zoom')}</Text>

      <Grid templateColumns="repeat(3, 1fr)" mt={'4px'}>
        {galaxyZooms.map(navigationItem => (
          <NavigationLink
            key={navigationItem.title}
            zoomData={navigationItem}
            currentZoomNumber={currentZoomNumber}
            link={previousZoomLinks[navigationItem.zoom]}
          />
        ))}
      </Grid>
    </Box>
  )
}
