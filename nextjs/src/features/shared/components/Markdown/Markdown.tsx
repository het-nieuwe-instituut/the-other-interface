import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import DOMpurify from 'isomorphic-dompurify'
import style from './markdown-styles.module.css'

interface Props {
    children: string
}

export const Markdown: React.FC<Props> = props => {
    console.log(ChakraUIRenderer())
    return (
        <ReactMarkdown
            className={style.reactMarkDown}
            components={ChakraUIRenderer()}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            linkTarget="_blank"
        >
            {DOMpurify.sanitize(props.children)}
        </ReactMarkdown>
    )
}
