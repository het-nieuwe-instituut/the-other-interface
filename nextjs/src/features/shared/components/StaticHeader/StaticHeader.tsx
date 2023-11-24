'use client'
import { Flex, Link, Box } from '../../configs/chakra'

import { STATIC_HEADER_Z_INDEX, USER_LOOKS_ON } from '../../constants/mainConstants'
import { GalaxyTopRight } from '@/features/galaxyInterface/components/GalaxyWrapper/GalaxyTopRight/GalaxyTopRight'
import { usePresenter } from './usePresenter'

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
      >
        <Flex
          marginX={'auto'}
          maxW={theme.breakpoints.xl}
          justifyContent={'space-between'}
          flexDirection={'row'}
          alignItems={'center'}
          width={'100%'}
          pl={6}
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
