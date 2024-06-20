'use client'
import React from 'react'
import { cn } from '@/features/ui/utils/cn'
import { CSSProperties, useRef } from 'react'
import { Paragraph } from './Paragraph'
import { useClampDetectionByLineHeight } from '../../hooks/useLineClamp'
import sanitizeHtml from 'sanitize-html'

interface Props {
  children: string
  className?: string
  disableLineClamp?: boolean
  lineCount?: number
  ReadmoreComponent?: JSX.Element | null
  splitByHtmlBreaks?: boolean
}

export const ParagraphWithLineClamp: React.FC<Props> = ({
  className,
  disableLineClamp,
  lineCount = 4,
  ReadmoreComponent,
  children,
  splitByHtmlBreaks,
}) => {
  const ref = useRef(null)
  // we need js here to check if the text should be clamped based on viewport size
  const isClampin = useClampDetectionByLineHeight(ref, { lineCount })

  return (
    <>
      <div
        ref={ref}
        style={
          {
            '--line-count': lineCount,
          } as CSSProperties
        }
        className={cn(
          'leading-[34px] lg:leading-[20px] overflow-hidden',
          !disableLineClamp &&
            'line-clamp-[var(--line-count)] max-h-[calc(var(--line-count)*34px)] lg:max-h-[calc(var(var(--line-count)*20px)]',
          isClampin && !disableLineClamp && 'truncate-gradient'
        )}
      >
        {renderChildren()}
      </div>
      <div className={cn(ReadmoreComponent && isClampin && !disableLineClamp ? 'block' : 'hidden')}>
        {ReadmoreComponent}
      </div>
    </>
  )

  function renderChildren() {
    if (!splitByHtmlBreaks) {
      return renderText(children)
    }

    const sanitizedChildren = sanitizeHtml(children, { allowedTags: ['br'] })
    const splitChildren = sanitizedChildren.split('<br />')

    return splitChildren.map((c, i) => (
      <React.Fragment key={i}>
        {renderText(c)}
        <br />
      </React.Fragment>
    ))
  }

  function renderText(text: string) {
    return <Paragraph className={cn(className)}>{text}</Paragraph>
  }
}
