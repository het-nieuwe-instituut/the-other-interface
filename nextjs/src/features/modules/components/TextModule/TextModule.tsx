import { Markdown } from '@/features/shared/components/Markdown/Markdown'
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
            pl={6}
            pr={6}
            maxWidth={'820px'}
            pb={props.component.textModuleLayout?.spacingBottom ?? undefined}
            pt={props.component.textModuleLayout?.spacingTop ?? undefined}
        >
            <Markdown>{content}</Markdown>
        </Box>
    )
}
