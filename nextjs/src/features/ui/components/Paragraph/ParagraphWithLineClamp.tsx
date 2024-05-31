'use client'
import { cn } from '@/features/ui/utils/cn'
import { CSSProperties, useRef } from 'react'
import { Paragraph } from './Paragraph'
import { useClampDetectionByLineHeight } from '../../hooks/useLineClamp'

interface Props {
  children: string
  className?: string
  disableLineClamp?: boolean
  lineCount?: number
  ReadmoreComponent?: JSX.Element | null
}

export const ParagraphWithLineClamp: React.FC<Props> = ({
  className,
  disableLineClamp,
  lineCount = 4,
  ReadmoreComponent,
  ...restProps
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
        <Paragraph {...restProps} className={cn(className)} />
      </div>
      <div className={cn(ReadmoreComponent && isClampin && !disableLineClamp ? 'block' : 'hidden')}>
        {ReadmoreComponent}
      </div>
    </>
  )
}
