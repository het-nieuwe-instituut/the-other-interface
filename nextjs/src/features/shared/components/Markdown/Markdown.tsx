import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface Props {
    children: string
}

export const Markdown: React.FC<Props> = props => {
    return (
        <ReactMarkdown components={ChakraUIRenderer()} remarkPlugins={[remarkGfm]}>
            {props.children}
        </ReactMarkdown>
    )
}
