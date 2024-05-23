'use client'
import { Box, Text, Flex } from '@chakra-ui/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { GalaxyZoom } from '../constants'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { usePresenter } from './usePresenter'
import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'

type Props = {
  zoomData: GalaxyZoom
  currentZoomNumber: number
  link: string | null
}

export const NavigationLink: React.FC<Props> = ({ zoomData, currentZoomNumber, link }) => {
  const { zoom, title, alignItems } = zoomData
  const router = useRouter()
  const searchParams = useSearchParams()
  const lang = searchParams?.get('lang')
  const { t } = useTypeSafeTranslation('navigation')
  const { isClickable, isCurrentZoom, lineStyle, isDisabled } = usePresenter(
    zoom,
    currentZoomNumber
  )

  const handleNavigation = () => {
    if (!link) return
    const url = addLocaleToUrl(link, lang)

    router.push(url)
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
        borderColor={isClickable && !isDisabled ? 'pinkAlpha.100' : 'pinkAlpha.40'}
        width="10px"
        height="10px"
        borderRadius="50%"
        backgroundColor={isCurrentZoom ? 'pinkAlpha.100' : 'transparent'}
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
        color={(isCurrentZoom || isClickable) && !isDisabled ? 'pinkAlpha.100' : 'pinkAlpha.40'}
      >
        {t(title)}
      </Text>
    </Flex>
  )
}
