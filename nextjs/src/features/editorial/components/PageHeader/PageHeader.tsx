'use client'

import { ScrollToContent } from '@/features/pages/utils/utils'
import { getExternalSourceTranslation } from '@/features/record/utils/enrichedSources'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import useScroll from '@/features/shared/hooks/ui/useScroll'
import { Paragraph } from '@/features/ui/components/Paragraph/Paragraph'
import { ParagraphWithLineClamp } from '@/features/ui/components/Paragraph/ParagraphWithLineClamp'
import {
  ExternalSourceBlock,
  ExternalSourceBlockGroup,
  ExternalSourceLink,
} from '@/features/ui/components/Sources/ExternalSource'
import {
  ExternalSourceGroup,
  ExternalSourceItem,
} from '@/features/ui/components/Sources/ExternalSourceAnnotations'
import { NavButton } from '@/features/ui/components/nav-button/component'
import { ExternalSourceTooltip } from '@/features/ui/components/tooltip/ExternalSourceTooltip'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { cn } from '@/features/ui/utils/cn'
import { useState } from 'react'
import { ExternalSource } from 'src/generated/graphql'
import Asterisk from '../../../ui/icons/asterisk-thin-large.svg'
import { AsteriskTooltip } from '@/features/ui/components/tooltip/AsteriskTooltip'

interface Props {
  title?: string
  preface?: string
  constrainPreface?: boolean
  splitByHtmlBreaks?: boolean
  showReadMore?: boolean
  asteriskTitle?: {
    asterisk_date_title: string | null
    asterisk_name_title: string | null
    asterisk_subject_title: string | null
  } | null
  enrichedTitles?: {
    externalSourceType: ExternalSource
    externalSourceUrl: string
    title?: string | null
  }[]
  enrichedDescriptions?: {
    externalSourceType: ExternalSource
    externalSourceUrl: string
    description?: string | null
  }[]
}

export const PageHeader: React.FC<Props> = props => {
  const {
    title,
    asteriskTitle,
    preface,
    constrainPreface,
    splitByHtmlBreaks,
    showReadMore = true,
    enrichedTitles,
    enrichedDescriptions,
  } = props
  const commonT = useTypeSafeTranslation('common')
  const { scrollPosition } = useScroll()
  const [constrainPrefaceState, setConstrainPreface] = useState(constrainPreface)

  return (
    <div className="flex max-w-[calc(100vw-40px)] flex-col gap-4">
      <button
        onClick={ScrollToContent}
        className={cn(
          scrollPosition < 750 ? 'cursor-pointer' : 'cursor-text',
          'text-left flex flex-col gap-4  max-w-[calc(100vw-40px)]'
        )}
      >
        {asteriskTitle?.asterisk_subject_title ? (
          <>
            <div className="relative inline-block">
              <h1
                lang="nl"
                className={`${TypographyVariants({
                  responsive: 'title',
                  className: 'inline-block',
                })} break-words`}
              >
                {asteriskTitle.asterisk_date_title && asteriskTitle.asterisk_name_title ? (
                  <AsteriskTooltip
                    place="bottom"
                    title={commonT.t('asteriskMeta', {
                      date: asteriskTitle.asterisk_date_title,
                      author: asteriskTitle.asterisk_name_title,
                    })}
                  >
                    {asteriskTitle?.asterisk_subject_title}

                    <span className="absolute text-surface-asterisk-dark asterisk-icon pl-1">
                      <Asterisk />
                    </span>
                  </AsteriskTooltip>
                ) : (
                  <>
                    {asteriskTitle?.asterisk_subject_title}
                    <span className="absolute text-surface-asterisk-dark asterisk-icon pl-1">
                      <Asterisk />
                    </span>
                  </>
                )}
              </h1>
            </div>
          </>
        ) : (
          title && (
            <h1 lang="nl" className={TypographyVariants({ responsive: 'title' })}>
              {title}
            </h1>
          )
        )}
      </button>
      {enrichedTitles && enrichedTitles.length > 0 && (
        <ExternalSourceBlockGroup className="mt-1">
          {enrichedTitles?.map((v, i, array) => {
            const externalSourceType = v.externalSourceType
            const externalSourceUrl = v.externalSourceUrl

            if (!externalSourceType) {
              return null
            }
            return (
              <ExternalSourceTooltip
                place="right-start"
                key={`${i}-${array.length}`}
                title={
                  externalSourceUrl ? (
                    <div className=" inline-block">
                      {commonT.t('pulledFrom')}{' '}
                      <div className="inline-block">
                        <ExternalSourceLink
                          externalSourceType={externalSourceType}
                          externalSourceUrl={externalSourceUrl}
                        />
                      </div>
                    </div>
                  ) : (
                    getExternalSourceTranslation(externalSourceType)
                  )
                }
              >
                <ExternalSourceBlock>{v.title ?? ''}</ExternalSourceBlock>
              </ExternalSourceTooltip>
            )
          })}
        </ExternalSourceBlockGroup>
      )}
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

      {(enrichedDescriptions?.length ?? 0) > 0 && (
        <ExternalSourceGroup count={enrichedDescriptions?.length ?? 0}>
          {enrichedDescriptions?.map((source, index) => {
            const href = source.externalSourceUrl
            if (!href) {
              return null
            }
            return (
              <ExternalSourceItem
                href={href}
                key={index}
                externalSource={source.externalSourceType}
              >
                {source.description ?? ''}
              </ExternalSourceItem>
            )
          })}
        </ExternalSourceGroup>
      )}
    </div>
  )
}
