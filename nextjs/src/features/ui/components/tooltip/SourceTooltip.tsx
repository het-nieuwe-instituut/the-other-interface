'use client'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import NextLink, { LinkProps } from 'next/link'
import { PropsWithChildren, useMemo } from 'react'
import ReactDOMServer from 'react-dom/server'
import { PlacesType } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { cn } from '../../utils/cn'
import { BaseTooltip } from './BaseTooltip'

import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import Loading from '@/features/ui/icons/loading.svg'

export interface SourceTooltipProps extends PropsWithChildren {
  title?: string | React.ReactNode
  isLoading?: boolean
  isEmpty?: boolean
  readMoreHref?: LinkProps['href']
  readMoreText?: React.ReactNode
  Icon: React.ReactNode
  offset?: number
  place: PlacesType
  error?: string
  className?: string
  learnMoreClassName?: string
  titleClassName?: string
  tooltipContainerClassName?: string
  hideTooltip?: boolean
}

export const SourceTooltip = (props: SourceTooltipProps) => {
  const {
    children,
    title,
    readMoreHref,
    readMoreText,
    offset,
    isLoading,
    place,
    error,
    isEmpty,
    className,
    hideTooltip,
    titleClassName,
    learnMoreClassName,
    tooltipContainerClassName,
    Icon,
  } = props
  const content = useMemo(
    () =>
      ReactDOMServer.renderToStaticMarkup(
        <SourceTooltipContent
          isLoading={isLoading}
          title={title}
          isEmpty={isEmpty}
          readMoreHref={readMoreHref}
          readMoreText={readMoreText}
          Icon={Icon}
          titleClassName={titleClassName}
          learnMoreClassName={learnMoreClassName}
          tooltipContainerClassName={tooltipContainerClassName}
          error={error}
          place={place}
          hideTooltip={hideTooltip}
        />
      ),
    [
      isLoading,
      title,
      isEmpty,
      readMoreHref,
      readMoreText,
      Icon,
      titleClassName,
      learnMoreClassName,
      tooltipContainerClassName,
      error,
      place,
      hideTooltip,
    ]
  )

  return (
    <>
      <BaseTooltip className={className} offset={offset} html={content} place={place}>
        {children}
      </BaseTooltip>
    </>
  )
}

const SourceTooltipContent = ({
  error,

  isLoading,
  title,
  isEmpty,
  Icon,
  readMoreHref,
  readMoreText,
  learnMoreClassName,
  titleClassName,
  tooltipContainerClassName,
  hideTooltip,
}: SourceTooltipProps) => {
  const { t } = useTypeSafeTranslation('common')
  if (hideTooltip) {
    return null
  }

  if (error) {
    return (
      <div role="tooltip" className={cn('w-[243.76px] justify-start p-4 text-start bg-error-100 ')}>
        <p className={TypographyVariants({ socialLarge: 'sm', className: 'text-white' })}>
          {error}
        </p>
      </div>
    )
  }

  return (
    <div
      role="tooltip"
      className={cn('w-[243.76px] justify-start p-4 text-start', tooltipContainerClassName)}
    >
      {renderContent()}
    </div>
  )

  function renderContent() {
    if (isLoading) {
      return (
        <div className="flex w-full items-center justify-center p-2">
          <Loading className={'size-8 animate-spin text-pink-100'} />
        </div>
      )
    }

    if (isEmpty) {
      return (
        <p
          className={TypographyVariants({
            socialLarge: 'sm',
            className: 'text-pink-100',
          })}
        >
          {t('noDataFound')}
        </p>
      )
    }

    return (
      <div className="flex gap-2">
        <span>{Icon}</span>
        <div>
          {title && <h2 className={cn(titleClassName, 'mb-2')}>{title}</h2>}

          {readMoreHref && (
            <NextLink className={learnMoreClassName} href={readMoreHref}>
              {readMoreText}
            </NextLink>
          )}
        </div>
      </div>
    )
  }
}
