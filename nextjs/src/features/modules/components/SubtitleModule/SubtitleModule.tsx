import { ComponentModulesSubtitle } from 'src/generated/graphql'
import { Box, Text as ChakraText } from '@chakra-ui/react'

interface Props {
    component: ComponentModulesSubtitle
}

export const SubtitleModule: React.FC<Props> = props => {
    console.log(props)
    return (
        <Box width="100%" padding={4}>
            <ChakraText fontSize="6xl">{props.component.text}</ChakraText>
        </Box>
    )
}
