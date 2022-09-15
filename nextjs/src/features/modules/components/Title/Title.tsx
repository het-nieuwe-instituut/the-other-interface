import { ComponentModulesTitleModule } from 'src/generated/graphql'
import { Box, Text as ChakraText } from '@chakra-ui/react'

interface Props {
    component: ComponentModulesTitleModule
}

export const Title: React.FC<Props> = props => {
    return (
        <Box width="100%" padding={6}>
            <ChakraText fontSize="6xl" fontWeight={'bold'}>
                {props.component.Title}
            </ChakraText>
        </Box>
    )
}
