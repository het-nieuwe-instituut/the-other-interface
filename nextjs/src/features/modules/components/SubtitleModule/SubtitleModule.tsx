import { ComponentModulesSubtitle } from 'src/generated/graphql'
import { Box, Text as ChakraText } from '@chakra-ui/react'
import colors from '@/features/shared/styles/theme/foundations/colors'

interface Props {
    component: ComponentModulesSubtitle
}

export const SubtitleModule: React.FC<Props> = props => {
    return (
        <Box
            width="100%"
            px={6}
            backgroundColor={colors.white}
            paddingBottom={props.component.subtitleModuleLayout?.spacingBottom ?? undefined}
            paddingTop={props.component.subtitleModuleLayout?.spacingTop ?? undefined}
        >
            <ChakraText textStyle={'h3'}>{props.component.text}</ChakraText>
        </Box>
    )
}
