import { ComponentModulesTitleModule } from 'src/generated/graphql'
import { Box, Heading } from '@chakra-ui/react'

interface Props {
    component: ComponentModulesTitleModule
}

export const Title: React.FC<Props> = props => {
    return (
        <Box
            width="100%"
            px={6}
            pt={props.component.titleModuleLayout?.spacingTop ?? undefined}
            pb={props.component.titleModuleLayout?.spacingBottom ?? undefined}
        >
            <Heading textStyle={'h1'} fontSize={'62px'}>
                {props.component.Title}
            </Heading>
        </Box>
    )
}
