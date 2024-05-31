'use client'
import { cn } from '@/features/ui/utils/cn'
import { useRef } from 'react'
import { Paragraph } from './Paragraph'
import { useClampDetectionByLineHeight } from '../../hooks/useLineClamp'

interface Props {
  children: string
  className?: string
}

export const ParagraphWithLineClamp: React.FC<Props> = ({ className, ...restProps }) => {
  const ref = useRef(null)
  // we need js here to check if the text should be clamped based on viewport size
  const isClampin = useClampDetectionByLineHeight(ref, { lineCount: 8 })

  return (
    <>
      <div
        ref={ref}
        className={cn(
          'line-clamp-8 leading-[34px] lg:leading-[20px] overflow-hidden max-h-[calc(8*34px)] lg:max-h-[calc(8*20px)]',
          isClampin && 'truncate-gradient'
        )}
      >
        <Paragraph {...restProps} className={cn(className)} />
      </div>
    </>
  )
}
