import { Box } from '@chakra-ui/react'

interface Props {
    renderTop: () => JSX.Element
    renderBottom: () => JSX.Element
    renderGalaxy: () => JSX.Element
}

export const GalaxyWrapper: React.FC<Props> = props => {
    return (
        <Box display="block" position={'relative'}>
            <Box zIndex={2} pointerEvents={'none'} position={'absolute'} top={0} right={0} left={0}>
                {props.renderTop()}
            </Box>
            <Box zIndex={2} pointerEvents={'none'} position={'absolute'} bottom={0} right={0} left={0}>
                {props.renderBottom()}
            </Box>
            <Box zIndex={1} bottom={0} right={0} left={0}>
                {props.renderGalaxy()}
            </Box>
        </Box>
    )
}
