'use client'
import { Box, Text, Flex } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { GalaxyZoom } from '../constants'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { usePresenter } from './usePresenter'

type Props = {
  zoomData: GalaxyZoom
  currentZoomNumber: number
  link: string | null
}

export const NavigationLink: React.FC<Props> = ({ zoomData, currentZoomNumber, link }) => {
  const { zoom, title, alignItems } = zoomData
  const router = useRouter()
  const { t } = useTypeSafeTranslation('navigation')
  const { isClickable, isCurrentZoom, lineStyle, isDisabled } = usePresenter(
    zoom,
    currentZoomNumber
  )

  const handleNavigation = () => {
    if (!link) return

    router.push(link)
  }

  return (
    <Flex
      key={title}
      flexDirection={'column'}
      alignItems={alignItems}
      cursor={isClickable && !isDisabled ? 'pointer' : 'default'}
      onClick={handleNavigation}
    >
      <Box
        position={'relative'}
        border={'1px solid'}
        borderColor={isClickable && !isDisabled ? 'navyAlpha.100' : 'navyAlpha.25'}
        width="10px"
        height="10px"
        borderRadius="50%"
        backgroundColor={isCurrentZoom ? 'navyAlpha.100' : 'transparent'}
        {...(zoom !== 1 && {
          _after: {
            content: '""',
            position: 'absolute',
            top: '50%',
            right: '8px',
            height: '1px',
            width: '89px',
            transform: 'translateY(-50%)',
            ...lineStyle,
          },
        })}
      />

      <Text
        textStyle="socialLarge.sm"
        mt={'4px'}
        color={(isCurrentZoom || isClickable) && !isDisabled ? 'navyAlpha.100' : 'navyAlpha.25'}
      >
        {t(title)}
      </Text>
    </Flex>
  )
}
