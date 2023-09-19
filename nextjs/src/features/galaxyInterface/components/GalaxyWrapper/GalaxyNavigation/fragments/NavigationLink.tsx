'use client'
import { Box, Text, Flex } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { GalaxyZoom } from './constants'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'

type Props = {
  zoomData: GalaxyZoom
  currentZoomNumber: number
  link: string | null
}

// TODO: move all stuff to usePresenter
export const NavigationLink: React.FC<Props> = ({ zoomData, currentZoomNumber, link }) => {
  const { alignItems, title, zoom } = zoomData
  const router = useRouter()
  const { t } = useTypeSafeTranslation('navigation')

  const isClickable = zoom < currentZoomNumber
  const isCurrentZoom = zoom === currentZoomNumber

  const isNextZoom = Math.abs(zoom - currentZoomNumber) === 1

  const lineStyle = () => {
    if (isCurrentZoom || isClickable) {
      return {
        backgroundColor: 'navyAlpha.100',
      }
    }

    if (isNextZoom) {
      return {
        backgroundImage: 'linear-gradient(90deg, #000D14 9.46%, rgba(0, 13, 20, 0.25) 93.12%)',
      }
    }

    return {
      backgroundColor: 'navyAlpha.25',
    }
  }

  const handleNavigation = () => {
    if (!link) return

    router.push(link)
  }

  return (
    <Flex
      key={title}
      flexDirection={'column'}
      alignItems={alignItems}
      cursor={isClickable ? 'pointer' : 'default'}
      onClick={handleNavigation}
    >
      <Box
        position={'relative'}
        border={'1px solid'}
        borderColor={isClickable ? 'navyAlpha.100' : 'navyAlpha.25'}
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
            ...lineStyle(),
          },
        })}
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
