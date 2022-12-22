import { useLooseTypeSafeTranslation } from "@/features/shared/hooks/translations"
import { Box, Text, Flex, Link, useBreakpoint } from '@chakra-ui/react'
import { useEffect } from "react";
import { GalaxyTopRight } from "../GalaxyWrapper/GalaxyTopRight/GalaxyTopRight";


interface Props {
    children: React.ReactNode;
}

const MobileOverlayProvider = (props: Props) => {
    const breakpoint = useBreakpoint()
    const isMobile = breakpoint === 'sm' 

    return (
        <Box overflow={'hidden'}>
            {isMobile && (<MobileOverlay />)}
            {props.children}
        </Box>
    )
}

const MobileOverlay = () => {
    const { t: tCommon } = useLooseTypeSafeTranslation('common')
    const { t: tNavigation } = useLooseTypeSafeTranslation('navigation')

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'visible'
        }
    }, [])

    return (
        <Flex width={'100%'} height={'100%'} position={'fixed'} top={0} right={0} zIndex={9999} background={'mobileOverlay'} overflow={'hidden'} backdropBlur={'20px'}>
            <Flex paddingLeft={8} paddingTop={4} justifyContent={'space-between'} flexDirection={'row'} height={'40px'} overflow={'hidden'} alignItems={'center'} width={'100%'} marginRight={4}>
                <Link 
                    href={'/'} 
                    variant={'decorative'}
                    cursor="pointer"
                    textStyle="small"
                >
                    {tNavigation('theNewInstitute')}    
                </Link>
                <Box marginRight={'4'}>
                    <GalaxyTopRight />
                </Box>
                
            </Flex>
            <Box position={'absolute'} left={0} paddingRight={'40px'} alignSelf={'center'} right={0} marginLeft={5} >
                <Text variant={'body'} mb={5}>
                    {tCommon('theNewInstitueDescription')}
                </Text>
                <Text variant={'body'}>
                    {tCommon('mobileVersionIsNotYetThere')}
                </Text>
            </Box>
            
        </Flex>
    )
}

export default MobileOverlayProvider