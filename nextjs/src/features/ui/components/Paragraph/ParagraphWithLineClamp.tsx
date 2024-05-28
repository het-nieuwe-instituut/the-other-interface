'use client'
import { cn } from '@/features/ui/utils/cn'
import { useRef } from 'react'
import { useLineClamp } from '../../hooks/useLineClamp'
import { Paragraph } from './Paragraph'

interface Props {
  children: string
  className?: string
}

export const ParagraphWithLineClamp: React.FC<Props> = ({ className, ...restProps }) => {
  const ref = useRef(null)
  // we need js here to check if the text should be clamped based on viewport size
  const isClampin = useLineClamp(ref, { lines: 8 })

  return (
    <>
      <div ref={ref} className={cn('line-clamp-8', isClampin && 'truncate-gradient')}>
        <Paragraph {...restProps} className={cn(className)} />
      </div>
    </>
  )
}
