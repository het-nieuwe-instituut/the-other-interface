import ReactMarkdown from 'react-markdown'
import { ComponentModulesTextModule } from 'src/generated/graphql'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'

interface Props {
    component: ComponentModulesTextModule
}

export const TextModule: React.FC<Props> = props => {
    const content = props.component?.Richtext

    if (!content) {
        return null
    }
    return (
        <>
            <ReactMarkdown components={ChakraUIRenderer()}>{content}</ReactMarkdown>
        </>
    )
}
