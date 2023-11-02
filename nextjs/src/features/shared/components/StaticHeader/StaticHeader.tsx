'use client'
import { Flex, Link, Box } from '../../configs/chakra'

import { STATIC_HEADER_Z_INDEX, USER_LOOKS_ON } from '../../constants/mainConstants'
import { GalaxyTopRight } from '@/features/galaxyInterface/components/GalaxyWrapper/GalaxyTopRight/GalaxyTopRight'
import { usePresenter } from './usePresenter'

export const StaticHeader = () => {
  const { tNavigation, userLooksOn, isMenuOpen, lang } = usePresenter()

  return (
    <>
      <Flex
        paddingLeft={8}
        paddingTop={4}
        justifyContent={'space-between'}
        flexDirection={'row'}
        height={'auto'}
        overflow={'hidden'}
        alignItems={'center'}
        width={'100%'}
        marginRight={4}
        marginX={'auto'}
        position={{ sm: 'initial', md: 'fixed', lg: 'fixed', xl: 'fixed' }}
        maxWidth={{ sm: 'initial', md: '90em', lg: '90em', xl: '90em' }}
        left={0}
        right={0}
        zIndex={STATIC_HEADER_Z_INDEX}
        pointerEvents={'all'}
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

        <Box marginRight={'8'} marginTop={'-3px'}>
          <GalaxyTopRight />
        </Box>
      </Flex>
    </>
  )
}
