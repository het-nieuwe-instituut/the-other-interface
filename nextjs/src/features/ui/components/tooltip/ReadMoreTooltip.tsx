'use client'
import { NavButton } from '@/features/ui/components/nav-button/component'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import ExternalLink from '@/features/ui/icons/external-link.svg'
import NextLink, { LinkProps } from 'next/link'
import { PropsWithChildren, useMemo } from 'react'
import ReactDOMServer from 'react-dom/server'
import { PlacesType } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { cn } from '../../utils/cn'
import { BaseTooltip } from './BaseTooltip'

import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import Loading from '@/features/ui/icons/loading.svg'

export interface ReadMoreTooltipProps extends PropsWithChildren {
  title?: string
  description?: string
  isLoading?: boolean
  isEmpty?: boolean
  readMoreHref?: LinkProps['href']
  readMoreText?: string
  color?: 'black' | 'blue'
  offset?: number
  place: PlacesType
  error?: string
  className?: string
}

export const ReadMoreTooltip = (props: ReadMoreTooltipProps) => {
  const {
    children,
    title,
    description,
    readMoreHref,
    readMoreText,
    color = 'black',
    offset,
    isLoading,
    place,
    error,
    isEmpty,
    className,
  } = props
  const content = useMemo(
    () =>
      ReactDOMServer.renderToStaticMarkup(
        <ReadMoreTooltipContent
          isLoading={isLoading}
          title={title}
          description={description}
          isEmpty={isEmpty}
          readMoreHref={readMoreHref}
          readMoreText={readMoreText}
          error={error}
          color={color}
          place={place}
        />
      ),
    [isLoading, title, description, isEmpty, readMoreHref, readMoreText, error, color, place]
  )

  return (
    <>
      <BaseTooltip className={className} offset={offset} html={content} place={place}>
        {children}
      </BaseTooltip>
    </>
  )
}

const ReadMoreTooltipContent = ({
  error,
  color,
  isLoading,
  title,
  description,
  isEmpty,
  readMoreHref,
  readMoreText,
}: ReadMoreTooltipProps) => {
  const { t } = useTypeSafeTranslation('common')

  if (error) {
    return (
      <div role="tooltip" className={cn('w-[243.76px] justify-start p-4 text-start bg-error-100 ')}>
        <p className={TypographyVariants({ social: 'sm', className: 'text-white' })}>{error}</p>
      </div>
    )
  }

  return (
    <div
      role="tooltip"
      className={cn(
        'w-[243.76px] justify-start p-4 text-start',
        color === 'black' && 'bg-black-100',
        color === 'blue' && 'bg-blue-100'
      )}
    >
      {renderContent()}
    </div>
  )

  function renderContent() {
    if (isLoading) {
      return (
        <div className="flex w-full items-center justify-center p-2">
          <Loading className={'animate-spin text-pink-100'} />
        </div>
      )
    }

    if (isEmpty) {
      return (
        <p
          className={TypographyVariants({
            social: 'sm',
            className: 'text-pink-100',
          })}
        >
          {t('noDataFound')}
        </p>
      )
    }

    return (
      <>
        {title && (
          <h2
            className={TypographyVariants({
              social: 'sm',
              className: 'text-pink-100 font-bold pb-2',
            })}
          >
            {title}
          </h2>
        )}

        {description && (
          <p
            className={TypographyVariants({
              social: 'sm',
              className: 'text-pink-100  pb-2',
            })}
          >
            {description}
          </p>
        )}

        {readMoreHref && (
          <NextLink href={readMoreHref}>
            <NavButton
              color={color === 'black' ? 'invertedPinkHover' : 'inverted'}
              variant={'menuSecondary'}
            >
              {readMoreText}
              <ExternalLink height="14" width="14" className={'size-[14px]'} />
            </NavButton>
          </NextLink>
        )}
      </>
    )
  }
}
