'use client'
import { Flex, Link, Box } from '../../configs/chakra'

import { STATIC_HEADER_Z_INDEX, USER_LOOKS_ON } from '../../constants/mainConstants'
import { GalaxyTopRight } from '@/features/galaxyInterface/components/GalaxyWrapper/GalaxyTopRight/GalaxyTopRight'
import { usePresenter } from './usePresenter'
import { keyframes } from '@emotion/react'

const fadeIn = keyframes({
  from: { backgroundColor: 'transparent' },
  to: { backgroundColor: 'pinkAlpha.100' },
})
const fadeOut = keyframes({
  from: { backgroundColor: 'pinkAlpha.100' },
  to: { backgroundColor: 'transparent' },
})

export const StaticHeader = () => {
  const { tNavigation, userLooksOn, isMenuOpen, lang, theme } = usePresenter()

  return (
    <>
      <Flex
        py={4}
        height={'auto'}
        overflow={'hidden'}
        width={'100%'}
        marginRight={4}
        left={0}
        right={0}
        zIndex={STATIC_HEADER_Z_INDEX}
        pointerEvents={'all'}
        position={{ sm: 'initial', md: 'fixed', lg: 'fixed', xl: 'fixed' }}
        backgroundColor={
          isMenuOpen || userLooksOn === USER_LOOKS_ON.GALAXY ? 'transparent' : 'pinkAlpha.100'
        }
        animation={
          userLooksOn === USER_LOOKS_ON.EDITORIAL && !isMenuOpen
            ? `${fadeIn} 300ms linear`
            : `${fadeOut}, 300ms linear`
        }
      >
        <Flex
          marginX={'auto'}
          maxW={theme.breakpoints.xl}
          justifyContent={'space-between'}
          flexDirection={'row'}
          alignItems={'center'}
          width={'100%'}
          px={6}
        >
          <Flex alignItems={'center'}>
            <Link
              href={lang ? `/?lang=${lang}` : '/?lang=nl'}
              variant={isMenuOpen ? 'navigation' : 'navigationOnTopOfTheGalaxy'}
              cursor="pointer"
              whiteSpace={'nowrap'}
              textOverflow={'ellipsis'}
              overflow={'hidden'}
              textStyle={
                userLooksOn === USER_LOOKS_ON.GALAXY ? 'headingTimesLarge.lg' : 'impactNew.md'
              }
            >
              <Box as="span" mr={'10px'}>
                {tNavigation('theNewInstitute')}
              </Box>
              {' • '}
              <Box as="span" ml={'10px'}>
                {tNavigation('collectionPlatform')}
              </Box>
            </Link>
          </Flex>

          <Box marginTop={'-3px'}>
            <GalaxyTopRight />
          </Box>
        </Flex>
      </Flex>
    </>
  )
}
