import { ComponentModulesPullquote } from 'src/generated/graphql'
import { Box, Text as ChakraText } from '@chakra-ui/react'

interface Props {
    component: ComponentModulesPullquote
}

export const Pullquote: React.FC<Props> = props => {
    return (
        <Box width="100%" padding={4}>
            <ChakraText fontSize="6xl">{props.component.text}</ChakraText>
        </Box>
    )
}
