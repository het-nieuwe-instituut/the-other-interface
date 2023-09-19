'use client'
import { Box, Text, Flex } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { GalaxyZoom } from './constants'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'

type Props = {
  zoomData: GalaxyZoom
  currentZoomNumber: number
}

export const NavigationLink: React.FC<Props> = ({ zoomData, currentZoomNumber }) => {
  const { alignItems, link, title, zoom } = zoomData
  const router = useRouter()
  const { t } = useTypeSafeTranslation('navigation')

  const isClickable = zoom < currentZoomNumber
  const isCurrentZoom = zoom === currentZoomNumber

  return (
    <Flex
      key={title}
      flexDirection={'column'}
      alignItems={alignItems}
      border={'1px solid red'}
      cursor={isClickable ? 'pointer' : 'default'}
    >
      <Box
        border={'1px solid'}
        borderColor={isClickable ? 'navyAlpha.100' : 'navyAlpha.25'}
        width="10px"
        height="10px"
        borderRadius="50%"
        backgroundColor={isCurrentZoom ? 'navyAlpha.100' : 'transparent'}
      />

      <Text
        textStyle="socialLarge.sm"
        mt={'4px'}
        color={isCurrentZoom || isClickable ? 'navyAlpha.100' : 'navyAlpha.25'}
      >
        {t(title)}
      </Text>
    </Flex>
  )
}
