import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import DOMpurify from 'isomorphic-dompurify'
import style from './markdown-styles.module.css'
import { ReactNode } from 'react'

interface Props {
    children: string
}

interface LinkProps {
    href?: string
    children?: ReactNode
}

function LinkRenderer(props: LinkProps) {
    return (
        <a href={props.href} target="_blank" rel="noreferrer">
            {props.children}
        </a>
    )
}

export const Markdown: React.FC<Props> = props => {
    return (
        <ReactMarkdown
            className={style.reactMarkDown}
            components={{ ...ChakraUIRenderer(), a: LinkRenderer }}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
        >
            {DOMpurify.sanitize(props.children)}
        </ReactMarkdown>
    )
}
