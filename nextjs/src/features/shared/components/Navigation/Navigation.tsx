'use client'
import { Flex, Box, Text, Link, useBreakpoint } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import { useRef } from 'react'
import { useSelector } from 'react-redux'

import { State } from '../../configs/store'
import { MAX_Z_INDEX, NAVIGATION_OVERLAY_Z_INDEX } from '../../constants/mainConstants'
import { useLooseTypeSafeTranslation } from '../../hooks/translations'
import { capitalizeFirstLetter } from '../../utils/text'
import { StaticHeader } from '../StaticHeader/StaticHeader'
import { usePresenter } from './usePresenter'
import { GalaxyFooter } from '@/features/galaxyInterface/components/GalaxyWrapper/GalaxyFooter/GalaxyFooter'

const fadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 0.85 } })
const fadeOut = keyframes({ from: { opacity: 0.85 }, to: { opacity: 0 } })

interface Props {
  children: React.ReactNode
}

export const NavigationOverlayProvider = (props: Props) => {
  return (
    <Box overflow={'hidden'}>
      <Navigation />
      {props.children}
    </Box>
  )
}

export const Navigation = () => {
  const { t: tNavigation, lang } = useLooseTypeSafeTranslation('navigation')
  const isMenuOpen = useSelector((state: State) => state.shared.isMenuOpen)
  const { menupages } = usePresenter(lang, isMenuOpen)
  const breakpoint = useBreakpoint()
  const isMobile = breakpoint === 'sm'
  const ref = useRef<HTMLDivElement | null>(null)

  return (
    <Box
      ref={ref}
      visibility={isMenuOpen ? 'visible' : 'hidden'}
      animation={isMenuOpen ? `${fadeIn} 300ms linear` : `${fadeOut}, 300ms linear`}
      height={'100vh'}
      width={'100%'}
      position={'fixed'}
      px={{ xl: 6, base: 0 }}
      zIndex={NAVIGATION_OVERLAY_Z_INDEX}
      top={0}
      right={0}
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: ref?.current?.scrollHeight || '100vh',
        backgroundColor: '#CCCED0',
        filter: 'blur(10px)',
        background: 'rgba(255, 255, 255, 0.85)',
      }}
    >
      <StaticHeader />
      <Flex
        justifyContent={'space-between'}
        px={'8'}
        pt={'24'}
        marginX={'auto'}
        maxWidth={'90em'}
        flexWrap={'wrap'}
        position={'relative'}
        zIndex={MAX_Z_INDEX}
      >
        <Flex
          maxWidth={'711px'}
          minWidth={'388px'}
          flexDirection={'column'}
          pb={20}
          pr={{ sm: '32px' }}
        >
          <Text textStyle={'micro'} mb={'5'}>
            {tNavigation('explore_collection')}
          </Text>

          <Link
            href="/landingpage?category=stories"
            variant={'navigation'}
            cursor="pointer"
            textStyle={'h1'}
            mb={'sm'}
          >
            {tNavigation('stories')}
          </Link>

          <Link
            href="/landingpage?category=archives"
            variant={'navigation'}
            cursor="pointer"
            textStyle={'h1'}
            mb={'sm'}
          >
            {tNavigation('archives')}
          </Link>

          <Link
            href="/landingpage?caregory=objects"
            variant={'navigation'}
            cursor="pointer"
            textStyle={'h1'}
            mb={'sm'}
          >
            {tNavigation('objects')}
          </Link>

          <Link
            href="/landingpage?caregory=people"
            variant={'navigation'}
            cursor="pointer"
            textStyle={'h1'}
            mb={'sm'}
          >
            {tNavigation('people')}
          </Link>

          <Link
            href="/landingpage?category=publications"
            variant={'navigation'}
            cursor="pointer"
            textStyle={'h1'}
            mb={'sm'}
          >
            {tNavigation('publications')}
          </Link>
        </Flex>

        <Flex maxWidth={'398px'} minWidth={'388px'} flexDirection={'column'}>
          <Text textStyle={'micro'} mb={'5'}>
            {tNavigation('more_to_do')}
          </Text>

          {menupages?.menupages?.data.map(item => (
            <Link
              href={`/menupage/${item?.attributes?.slug}`}
              variant={'navigation'}
              cursor="pointer"
              textStyle={'h3'}
              mb={'sm'}
              key={item?.id}
            >
              {capitalizeFirstLetter(item?.attributes?.Title ?? '')}
            </Link>
          ))}
        </Flex>
      </Flex>

      <Flex
        pt={{ sm: '48px', md: '48px', lg: '94px', xl: '94px' }}
        pl={4}
        maxWidth={'90em'}
        marginX={isMobile ? 'initial' : 'auto'}
        zIndex={MAX_Z_INDEX}
        position={'relative'}
      >
        <GalaxyFooter />
      </Flex>
    </Box>
  )
}
