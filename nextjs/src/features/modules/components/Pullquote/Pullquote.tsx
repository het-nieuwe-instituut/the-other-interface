import { ComponentModulesPullquote } from 'src/generated/graphql'
import { Box, Text as ChakraText } from '@chakra-ui/react'

interface Props {
    component: ComponentModulesPullquote
}

export const Pullquote: React.FC<Props> = props => {
    return (
        <Box
            width="100%"
            paddingBottom={props.component.pullquoteModuleLayout?.spacingBottom ?? undefined}
            paddingTop={props.component.pullquoteModuleLayout?.spacingTop ?? undefined}
        >
            <ChakraText fontSize="6xl">{props.component.text}</ChakraText>
        </Box>
    )
}
