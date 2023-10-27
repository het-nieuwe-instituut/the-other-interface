'use client'
import { useSelector } from 'react-redux'
import { Flex, Link, Box } from '../../configs/chakra'
import { State } from '../../configs/store'

import { STATIC_HEADER_Z_INDEX, USER_LOOKS_ON } from '../../constants/mainConstants'
import { useLooseTypeSafeTranslation } from '../../hooks/translations'
import { GalaxyTopRight } from '@/features/galaxyInterface/components/GalaxyWrapper/GalaxyTopRight/GalaxyTopRight'

export const StaticHeader = () => {
  const { t: tNavigation } = useLooseTypeSafeTranslation('navigation')
  const isMenuOpen = useSelector((state: State) => state.shared.isMenuOpen)
  const userLooksOn = useSelector((state: State) => state.shared.userLooksOn)

  return (
    <>
      <Flex
        paddingLeft={8}
        paddingTop={4}
        justifyContent={'space-between'}
        flexDirection={'row'}
        height={'40px'}
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
            href={'/'}
            variant={isMenuOpen ? 'navigation' : 'navigationOnTopOfTheGalaxy'}
            cursor="pointer"
            whiteSpace={'nowrap'}
            textOverflow={'ellipsis'}
            overflow={'hidden'}
            textStyle={
              userLooksOn === USER_LOOKS_ON.GALAXY ? 'headingTimesLarge.lg' : 'impactNew.md'
            }
          >
            {tNavigation('theNewInstitute')}
            {' • '}
            {tNavigation('collectionPlatform')}
          </Link>
        </Flex>

        <Box marginRight={'8'} marginTop={'-3px'}>
          <GalaxyTopRight />
        </Box>
      </Flex>
    </>
  )
}
