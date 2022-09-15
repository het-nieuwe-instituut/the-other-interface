import { Box } from '@chakra-ui/react'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
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
            mb={props.component.spacingBottom ?? undefined}
            mt={props.component.spacingTop ?? undefined}
        >
            <ReactMarkdown components={ChakraUIRenderer()} remarkPlugins={[remarkGfm]}>
                {content}
            </ReactMarkdown>
        </Box>
    )
}
