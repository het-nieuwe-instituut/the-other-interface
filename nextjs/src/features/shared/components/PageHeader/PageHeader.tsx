'use client'
import { ScrollToContent } from '@/features/pages/utils/utils'
import useScroll from '@/features/shared/hooks/useScroll'
import { ParagraphWithLineClamp } from '@/features/ui/components/Paragraph/ParagraphWithLineClamp'
import { NavButton } from '@/features/ui/components/nav-button/component'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { cn } from '@/features/ui/utils/cn'
import { useState } from 'react'
import { useTypeSafeTranslation } from '../../hooks/translations'

interface Props {
  title?: string
  preface?: string
  constrainPreface?: boolean
}

export const PageHeader: React.FC<Props> = ({ title, preface, constrainPreface }) => {
  const commonT = useTypeSafeTranslation('common')
  const { scrollPosition } = useScroll()
  const [constrainPrefaceState, setConstrainPreface] = useState(constrainPreface)

  return (
    <button
      onClick={ScrollToContent}
      className={cn(
        scrollPosition < 750 ? 'cursor-pointer' : 'cursor-text',
        ' text-left flex flex-col gap-4'
      )}
    >
      <h1 className={TypographyVariants({ impact: 'xl' })}>{title}</h1>
      {preface && (
        <div className="relative flex max-w-[64em] flex-col items-start justify-start gap-5">
          <ParagraphWithLineClamp
            disableLineClamp={!constrainPrefaceState}
            ReadmoreComponent={
              <NavButton
                className="truncate-button"
                onClick={() => setConstrainPreface(false)}
                intent={'secondary'}
                variant={'footerPrimary'}
              >
                {commonT.t('readMore')}
              </NavButton>
            }
          >
            {preface}
          </ParagraphWithLineClamp>
        </div>
      )}
    </button>
  )
}
