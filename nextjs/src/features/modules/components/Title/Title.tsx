import { ComponentModulesTitleModule } from 'src/generated/graphql'
import { Box, Heading } from '@chakra-ui/react'

interface Props {
    component: ComponentModulesTitleModule
}

export const Title: React.FC<Props> = props => {
    return (
        <Box width="100%" padding={6}>
            <Heading as="h1" fontSize={'62px'}>
                {props.component.Title}
            </Heading>
        </Box>
    )
}
