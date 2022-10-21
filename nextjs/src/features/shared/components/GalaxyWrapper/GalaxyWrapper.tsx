import { Box } from '@chakra-ui/react'

interface Props {
    renderHeader: () => JSX.Element
    renderFooter: () => JSX.Element
    renderGalaxy: () => JSX.Element
}

export const GalaxyWrapper: React.FC<Props> = props => {
    return (
        <Box display="block" position={'relative'}>
            <Box zIndex={2} pointerEvents={'none'} position={'absolute'} top={0} right={0} left={0}>
                {props.renderHeader()}
            </Box>
            <Box zIndex={2} pointerEvents={'none'} position={'absolute'} bottom={0} right={0} left={0}>
                {props.renderFooter()}
            </Box>
            <Box zIndex={1} bottom={0} right={0} left={0}>
                {props.renderGalaxy()}
            </Box>
        </Box>
    )
}
