import { ComponentModulesSubtitle } from 'src/generated/graphql'
import { Box, Text as ChakraText } from '@chakra-ui/react'

interface Props {
    component: ComponentModulesSubtitle
}

export const SubtitleModule: React.FC<Props> = props => {
    return (
        <Box
            width="100%"
            px={6}
            backgroundColor={'white'}
            paddingBottom={props.component.subtitleModuleLayout?.spacingBottom ?? undefined}
            paddingTop={props.component.subtitleModuleLayout?.spacingTop ?? undefined}
        >
            <ChakraText textStyle={'h3'} maxWidth={'55rem'}>
                {props.component.text}
            </ChakraText>
        </Box>
    )
}
