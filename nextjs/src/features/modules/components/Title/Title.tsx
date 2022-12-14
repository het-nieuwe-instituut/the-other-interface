import { ComponentModulesTitleModule } from 'src/generated/graphql'
import { Text, Box } from '@chakra-ui/react'

interface Props {
    component: ComponentModulesTitleModule
}

export const Title: React.FC<Props> = props => {
    return (
        <Box
            width="100%"
            backgroundColor={'white'}
            px={6}
            pt={props.component.titleModuleLayout?.spacingTop ?? undefined}
            pb={props.component.titleModuleLayout?.spacingBottom ?? undefined}
        >
            <Text textStyle="h1" as={'h1'}>
                {props.component.Title}
            </Text>
        </Box>
    )
}
