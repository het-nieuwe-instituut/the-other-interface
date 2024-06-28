'use client'

import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { Paragraph } from '@/features/ui/components/Paragraph/Paragraph'
import { ParagraphWithLineClamp } from '@/features/ui/components/Paragraph/ParagraphWithLineClamp'
import { NavButton } from '@/features/ui/components/nav-button/component'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { cn } from '@/features/ui/utils/cn'
import { useState } from 'react'

interface Props {
  title?: string
  preface?: string
  constrainPreface?: boolean
  splitByHtmlBreaks?: boolean
  showReadMore?: boolean
}

export const RecordDescription: React.FC<Props> = props => {
  const { title, preface, constrainPreface, splitByHtmlBreaks, showReadMore = true } = props
  const commonT = useTypeSafeTranslation('common')
  const [constrainPrefaceState, setConstrainPreface] = useState(constrainPreface)

  return (
    <div className="flex max-w-[calc(100vw-40px)] flex-col gap-4">
      <div className={cn('text-left flex flex-col gap-4  max-w-[calc(100vw-40px)]')}>
        {title && <h2 className={TypographyVariants({ responsive: 'title' })}>{title}</h2>}
      </div>
      {preface && showReadMore && (
        <div className="relative flex flex-col items-start justify-start gap-5 ">
          <ParagraphWithLineClamp
            splitByHtmlBreaks={splitByHtmlBreaks}
            disableLineClamp={!constrainPrefaceState}
            ReadmoreComponent={
              <NavButton
                onClick={() => setConstrainPreface(!constrainPrefaceState)}
                intent={'secondary'}
                variant={'footerPrimary'}
              >
                {constrainPrefaceState ? commonT.t('readMore') : commonT.t('readLess')}
              </NavButton>
            }
          >
            {preface}
          </ParagraphWithLineClamp>
        </div>
      )}
      {preface && !showReadMore && (
        <div className="relative flex flex-col items-start justify-start gap-5 ">
          <Paragraph>{preface}</Paragraph>
        </div>
      )}
    </div>
  )
}
