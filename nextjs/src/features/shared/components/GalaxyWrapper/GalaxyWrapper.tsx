import { Box, Flex, useTheme } from '@chakra-ui/react'

interface Props {
    renderTopLeft?: () => JSX.Element
    renderTopRight?: () => JSX.Element
    renderBottom?: () => JSX.Element
    children: React.ReactNode
}

export const GalaxyWrapper: React.FC<Props> = props => {
    const theme = useTheme()
    return (
        <Box display="block" position={'relative'}>
            <Flex
                zIndex={2}
                maxW={theme.breakpoints.xl}
                marginX={'auto'}
                position="absolute"
                left={0}
                right={0}
                justifyContent={'space-between'}
            >
                <Flex alignItems={'center'} position="relative" zIndex={2} left={'32px'} top={'15px'}>
                    {props.renderTopLeft?.()}
                </Flex>
                <Flex alignItems={'center'} position="relative" zIndex={2} right={'32px'} top={'15px'}>
                    {props?.renderTopRight?.()}
                </Flex>
            </Flex>
            <Flex
                zIndex={2}
                maxW={theme.breakpoints.xl}
                marginX={'auto'}
                position="absolute"
                left={0}
                right={0}
                bottom={0}
                justifyContent={'space-between'}
            >
                <Flex alignItems={'center'} position="relative" zIndex={2} left={'32px'} right={'32px'}>
                    {props?.renderBottom?.()}
                </Flex>
            </Flex>
            <Box zIndex={1} bottom={0} right={0} left={0}>
                {props.children}
            </Box>
        </Box>
    )
}
