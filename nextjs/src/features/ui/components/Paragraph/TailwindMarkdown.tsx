import DOMpurify from 'isomorphic-dompurify'
import { ReactNode } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { cn } from '../../utils/cn'
import { Subtitle } from '../subtitle/Subtitle'
import { TypographyVariants } from '../typography/variants'
import styles from './TailwindMarkdown.module.css'

export interface TailwindMarkdownProps {
  className?: string
  children: string
}

export const TailwindMarkdown: React.FC<TailwindMarkdownProps> = ({ className, children }) => {
  return (
    <ReactMarkdown
      components={components}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      linkTarget="_blank"
      className={cn(className, 'gap-4 flex flex-col')}
    >
      {DOMpurify.sanitize(children)}
    </ReactMarkdown>
  )
}

const components = {
  p: ({ children }: { children: ReactNode }) => (
    <p className={TypographyVariants({ responsive: 'paragraph' })}>{children}</p> // need a different size
  ),
  // we cast as string because we know that children is a string but react-markdown makes use use ReactNode
  h6: ({ children }: { children: ReactNode }) => <Subtitle>{children as string}</Subtitle>,
  h5: ({ children }: { children: ReactNode }) => <Subtitle>{children as string}</Subtitle>,
  h4: ({ children }: { children: ReactNode }) => <Subtitle>{children as string}</Subtitle>,
  h3: ({ children }: { children: ReactNode }) => <Subtitle>{children as string}</Subtitle>,
  h2: ({ children }: { children: ReactNode }) => <Subtitle>{children as string}</Subtitle>,
  h1: ({ children }: { children: ReactNode }) => <Subtitle>{children as string}</Subtitle>, // need to title
  li: ({ children }: { children: ReactNode }) => (
    <li className={TypographyVariants({ responsive: 'paragraph' })}>{children}</li>
  ),
  ul: ({ children }: { children: ReactNode }) => (
    <ul className={styles['md-ul-list']}>{children}</ul>
  ),
  ol: ({ children }: { children: ReactNode }) => (
    <ol className={styles['md-ol-list']}>{children}</ol>
  ),
}
