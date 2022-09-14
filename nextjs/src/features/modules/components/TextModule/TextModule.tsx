import ReactMarkdown from 'react-markdown'
import { ComponentModulesTextModule } from 'src/generated/graphql'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import { Box } from '@chakra-ui/react'

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
            <ReactMarkdown components={ChakraUIRenderer()}>{content}</ReactMarkdown>
        </Box>
    )
}
