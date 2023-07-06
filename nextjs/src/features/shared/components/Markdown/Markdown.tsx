import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import DOMpurify from 'isomorphic-dompurify'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

import style from './markdown-styles.module.css'

interface Props {
  children: string
}

export const Markdown: React.FC<Props> = props => {
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
