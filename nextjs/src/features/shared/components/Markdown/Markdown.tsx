'use client'
import DOMpurify from 'isomorphic-dompurify'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

import CustomMarkdownRenderer from './CustomMarkdownRenderer'

interface Props {
  children: string
}

export const Markdown: React.FC<Props> = props => {
  return (
    <ReactMarkdown
      components={CustomMarkdownRenderer()}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      linkTarget="_blank"
    >
      {DOMpurify.sanitize(props.children)}
    </ReactMarkdown>
  )
}
