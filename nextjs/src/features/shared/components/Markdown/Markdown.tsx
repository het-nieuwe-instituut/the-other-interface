import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import DOMpurify from 'isomorphic-dompurify'

interface Props {
    children: string
}

export const Markdown: React.FC<Props> = props => {
    return (
        <ReactMarkdown components={ChakraUIRenderer()} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {DOMpurify.sanitize(props.children)}
        </ReactMarkdown>
    )
}
