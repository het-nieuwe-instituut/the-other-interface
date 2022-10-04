import { Markdown } from '@/features/shared/components/Markdown/Markdown'
import colors from '@/features/shared/styles/theme/foundations/colors'
import { Box } from '@chakra-ui/react'
import { ComponentModulesTextModule } from 'src/generated/graphql'

interface Props {
    component: ComponentModulesTextModule
}

export const TextModule: React.FC<Props> = props => {
    const content = props.component?.Richtext

    if (!content) {
        return null
    }

    return (
        <Box
            px={6}
            backgroundColor={colors.white}
            pb={props.component.textModuleLayout?.spacingBottom ?? undefined}
            pt={props.component.textModuleLayout?.spacingTop ?? undefined}
        >
            <Markdown>{content}</Markdown>
        </Box>
    )
}
