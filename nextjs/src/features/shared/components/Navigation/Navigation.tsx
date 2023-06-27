import { Flex, Box, Text, theme, Link, useBreakpoint } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { State } from '../../configs/store'
import { MAX_Z_INDEX } from '../../constants/mainConstants'
import { useLooseTypeSafeTranslation } from '../../hooks/translations'
import { capitalizeFirstLetter } from '../../utils/text'
import { GalaxyFooter } from '../GalaxyWrapper/GalaxyFooter/GalaxyFooter'
import { usePresenter } from './usePresenter'
import { keyframes } from '@emotion/react'
import { StaticHeader } from '../StaticHeader/StaticHeader'

const fadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 0.95 } })
const fadeOut = keyframes({ from: { opacity: 0.95 }, to: { opacity: 0 } })

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

    return (
        <Box
            visibility={isMenuOpen ? 'visible' : 'hidden'}
            animation={isMenuOpen ? `${fadeIn} 300ms linear` : `${fadeOut}, 300ms linear`}
            height={'100vh'}
            width={'100%'}
            position={'fixed'}
            px={{ xl: 6, base: 0 }}
            background={theme.colors.white}
            zIndex={MAX_Z_INDEX}
            top={0}
            right={0}
            opacity={0.95}
        >
            <StaticHeader />
            <Flex
                justifyContent={'space-between'}
                px={'8'}
                pt={'24'}
                marginX={'auto'}
                maxWidth={'90em'}
                flexWrap={'wrap'}
            >
                <Flex maxWidth={'711px'} minWidth={'388px'} flexDirection={'column'} pb={20}>
                    <Text textStyle={'micro'} mb={'5'}>
                        {tNavigation('explore_collection')}
                    </Text>

                    <Link
                        href="/landingpage/stories?preservedZoom=Zoom1Stories"
                        variant={'navigation'}
                        cursor="pointer"
                        textStyle={'h1'}
                        mb={'sm'}
                    >
                        {tNavigation('stories')}
                    </Link>

                    <Link
                        href="/landingpage/archives?preservedZoom=Zoom2"
                        variant={'navigation'}
                        cursor="pointer"
                        textStyle={'h1'}
                        mb={'sm'}
                    >
                        {tNavigation('archives')}
                    </Link>

                    <Link
                        href="/landingpage/objects?preservedZoom=Zoom2"
                        variant={'navigation'}
                        cursor="pointer"
                        textStyle={'h1'}
                        mb={'sm'}
                    >
                        {tNavigation('objects')}
                    </Link>

                    <Link
                        href="/landingpage/people?preservedZoom=Zoom2"
                        variant={'navigation'}
                        cursor="pointer"
                        textStyle={'h1'}
                        mb={'sm'}
                    >
                        {tNavigation('people')}
                    </Link>

                    <Link
                        href="/landingpage/publications?preservedZoom=Zoom2"
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

            <Flex pt={'65px'} pl={4} maxWidth={'90em'} marginX={isMobile ? 'initial' : 'auto'}>
                <GalaxyFooter />
            </Flex>
        </Box>
    )
}