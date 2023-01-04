import Breadcrumbs, { BreadcrumbsRenderModes } from "@/features/galaxy/components/Breadcrumbs/Breadcrumbs";
import { Flex, Box, Text, theme, Link as ChhakraLink, useBreakpoint } from "@chakra-ui/react"
import Link from 'next/link'
import { useSelector } from "react-redux";
import { State } from "../../configs/store";
import { MAX_Z_INDEX } from "../../constants/mainConstants";
import { useLooseTypeSafeTranslation } from "../../hooks/translations"
import { capitalizeFirstLetter } from "../../utils/text";
import { GalaxyFooter } from "../GalaxyWrapper/GalaxyFooter/GalaxyFooter";
import { GalaxyTopRight } from "../GalaxyWrapper/GalaxyTopRight/GalaxyTopRight"
import { usePresenter } from "./usePresenter";
import { keyframes } from '@emotion/react'

const fadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 0.95 } })
const fadeOut = keyframes({from: {opacity: 0.95}, to: {opacity: 0}})

interface Props {
    children: React.ReactNode;
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
        <Box sx={{ animation: isMenuOpen ? `${fadeIn} 300ms linear` : `${fadeOut}, 300ms linear`, visibility: isMenuOpen ? 'visible' : 'hidden'}}  height={'100vh'} width={'100%'} position={'fixed'} px={{ xl: 6, base: 0 }}  background={theme.colors.white} zIndex={MAX_Z_INDEX} top={0} right={0} opacity={0.95}>
            {
                isMobile ? (
                    <Flex paddingLeft={8} paddingTop={4} justifyContent={'space-between'} flexDirection={'row'} height={'40px'} overflow={'hidden'} alignItems={'center'} width={'100%'} marginRight={4}>
                        <ChhakraLink 
                            href={'/'} 
                            variant={'decorative'}
                            cursor="pointer"
                            textStyle="small"
                        >
                            {tNavigation('theNewInstitute')}    
                        </ChhakraLink>
                        <Box marginRight={'8'}>
                            <GalaxyTopRight />
                        </Box>
                    </Flex>
                ) : (
                    <Flex
                        maxW={theme.breakpoints.xl}
                        marginX={'auto'}
                        position={'fixed'}
                        left={0}
                        right={0}
                        alignSelf={'flex-start'}
                        flexDirection={'row'}
                        justifyContent={'space-between'}
                        zIndex={MAX_Z_INDEX}
                        maxWidth={'90em'}
                        pointerEvents={'all'}
                        top={0}
                    >
                        <Breadcrumbs mode={BreadcrumbsRenderModes.DEFAULT} />
                        <Flex alignItems={'center'} position="relative" zIndex={MAX_Z_INDEX + 1} top={'6px'} right={'8'}>
                            <GalaxyTopRight />
                        </Flex>
                    </Flex>
                )
            }
            <Flex justifyContent={'space-between'} px={'8'} pt={'24'} marginX={'auto'}  maxWidth={'90em'} flexWrap={'wrap'}>
                <Flex maxWidth={'711px'} minWidth={'388px'} flexDirection={'column'} pb={20}>
                    <Text textStyle={'micro'} mb={'5'}>
                        {tNavigation('explore_collection')}
                    </Text>

                    <Text textStyle={'h1'} mb={'sm'}>
                        <Link href='/landingpage/stories?preservedZoom=Zoom1Stories'>
                            {tNavigation('stories')}
                        </Link>
                    </Text>
                    
                    <Text textStyle={'h1'} mb={'sm'}>
                        <Link href='/landingpage/archives?preservedZoom=Zoom2'>
                            {tNavigation('archives')}
                        </Link>
                    </Text>
                    <Text textStyle={'h1'} mb={'sm'}>
                        <Link href='/landingpage/objects?preservedZoom=Zoom2'>
                            {tNavigation('objects')}
                        </Link>
                    </Text>
                    <Text textStyle={'h1'} mb={'sm'}>
                        <Link href='/landingpage/people?preservedZoom=Zoom2'>
                            {tNavigation('people')}
                        </Link>
                    </Text>
                    <Text textStyle={'h1'} mb={'sm'}>
                        <Link href='/landingpage/publications?preservedZoom=Zoom2'>
                            {tNavigation('publications')}
                        </Link>
                    </Text>
                </Flex>
                
                <Flex maxWidth={'398px'} minWidth={'388px'} flexDirection={'column'}>
                    <Text textStyle={'micro'} mb={'5'}>
                        {tNavigation('more_to_do')}
                    </Text>

                    {
                        menupages?.menupages?.data.map(item => (
                                <Text textStyle={'h3'} mb={'sm'} key={item?.id}>
                                    <Link href={`/menupage/${item?.attributes?.slug}`}>
                                        {capitalizeFirstLetter(item?.attributes?.Title ?? '')}
                                    </Link>
                                </Text>
                            )
                        )
                    }
                </Flex>
            </Flex>

            <Flex  pt={'65px'} pl={4}  maxWidth={'90em'} marginX={isMobile ? 'initial' : 'auto'}>
                <GalaxyFooter />
            </Flex>
        </Box>
    )
}