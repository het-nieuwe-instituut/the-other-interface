'use client'
import { Flex, Box, Text, Link } from '../../configs/chakra'
import { keyframes } from '@emotion/react'
import { MAX_Z_INDEX, NAVIGATION_OVERLAY_Z_INDEX } from '../../constants/mainConstants'
import { capitalizeFirstLetter } from '../../utils/text'
import { StaticHeader } from '../StaticHeader/StaticHeader'
import { usePresenter } from './usePresenter'
import { MenuPagesQuery } from 'src/generated/graphql'
import useTranslation from 'next-translate/useTranslation'

const fadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 0.8 } })
const fadeOut = keyframes({ from: { opacity: 0.85 }, to: { opacity: 0 } })

type Props = {
  menupages: MenuPagesQuery
}

export const Navigation = ({ menupages }: Props) => {
  const { isMenuOpen, ref, navTextStyle, overflowValue } = usePresenter()
  const { t: tNavigation, lang } = useTranslation('navigation')

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
      overflow={overflowValue}
      top={0}
      right={0}
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: ref?.current?.scrollHeight || '100vh',
        backdropFilter: 'blur(60px)',
        background: 'rgba(0, 81, 255, 0.8)',
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
          <Text textStyle={'socialMedium.md'} color={'pinkAlpha.100'} mb={'5'}>
            {tNavigation('explore_collection')}
          </Text>

          {/* <Link
            href={`/landingpage?category=stories&lang=${lang}`}
            variant={'navigation'}
            cursor="pointer"
            tabIndex={0}
            textStyle={navTextStyle}
            mb={'sm'}
          >
            {tNavigation('stories')}
          </Link> */}

          <Link
            href={`/landingpage?category=archives&lang=${lang}`}
            variant={'navigation'}
            cursor="pointer"
            textStyle={navTextStyle}
            mb={'sm'}
          >
            {tNavigation('archives')}
          </Link>

          <Link
            href={`/landingpage?caregory=objects&lang=${lang}`}
            variant={'navigation'}
            cursor="pointer"
            textStyle={navTextStyle}
            mb={'sm'}
          >
            {tNavigation('objects')}
          </Link>

          <Link
            href={`/landingpage?caregory=people&lang=${lang}`}
            variant={'navigation'}
            cursor="pointer"
            textStyle={navTextStyle}
            mb={'sm'}
          >
            {tNavigation('people')}
          </Link>

          <Link
            href={`/landingpage?category=publications&lang=${lang}`}
            variant={'navigation'}
            cursor="pointer"
            textStyle={navTextStyle}
            mb={'sm'}
          >
            {tNavigation('publications')}
          </Link>
        </Flex>

        <Flex maxWidth={'398px'} minWidth={'388px'} flexDirection={'column'}>
          {/* Initial value was 15. Inscread after we decided to remove more link, to compensate */}
          <Flex flexDirection={'column'} mb={['63px']}>
            <Text textStyle={'socialMedium.md'} color={'pinkAlpha.100'} mb={'5'} fontSize={'21px'}>
              {tNavigation('about')}
            </Text>
            <Text textStyle={'socialLarge.navigation'} color={'pinkAlpha.100'} mb={3}>
              {tNavigation('aboutDescription')}
            </Text>
            <Link
              variant={'navigationDecorative'}
              href={`/menupage/about?lang=${lang}`}
              width={'fit-content'}
            >
              {tNavigation('readMore')}
            </Link>
          </Flex>

          <Flex flexDirection={'column'}>
            {/* <Text textStyle={'socialMedium.md'} color={'pinkAlpha.100'} mb={'4'}>
              {tNavigation('more')}
            </Text> */}
            {menupages?.menupages?.data?.map(item => {
              if (item?.attributes?.slug === '/about') return null
              return (
                <Link
                  href={`/menupage/${item?.attributes?.slug}?lang=${lang}`}
                  variant={'navigationDecorative'}
                  cursor="pointer"
                  mb={'sm'}
                  key={item?.id}
                >
                  {capitalizeFirstLetter(item?.attributes?.Title ?? '')}
                </Link>
              )
            })}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}
