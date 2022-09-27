import { ComponentModulesSubtitle } from 'src/generated/graphql'
import { Box, Text as ChakraText } from '@chakra-ui/react'

interface Props {
    component: ComponentModulesSubtitle
}

export const SubtitleModule: React.FC<Props> = props => {
    return (
        <Box width="100%" paddingLeft={6} paddingRight={6} paddingBottom={4}>
            <ChakraText textStyle={'h3'}>{props.component.text}</ChakraText>
        </Box>
    )
}
