'use client'
import { NavButton } from '@/features/ui/components/nav-button/component'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import ExternalLink from '@/features/ui/icons/external-link.svg'
import NextLink, { LinkProps } from 'next/link'
import { PropsWithChildren, useId, useMemo, useRef } from 'react'
import ReactDOMServer from 'react-dom/server'
import { PlacesType, TooltipRefProps } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { cn } from '../../utils/cn'
import { BaseTooltip } from './BaseTooltip'

import Loading from '@/features/ui/icons/loading.svg'
interface ReadMoreTooltipProps extends PropsWithChildren {
  title?: string
  description?: string
  isLoading?: boolean
  readMoreHref?: LinkProps['href']
  readMoreText?: string
  color?: 'black' | 'blue'
  offset?: number
  place: PlacesType
  error?: string
  className?: string
}

export const ReadMoreTooltip = ({
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
  className,
}: ReadMoreTooltipProps) => {
  const id = useId()
  const ref = useRef<TooltipRefProps>(null)
  const content = useMemo(
    () =>
      ReactDOMServer.renderToStaticMarkup(
        error ? (
          <div
            id={id}
            role="tooltip"
            className={cn('w-[243.76px] justify-start p-4 text-start bg-error-100')}
          >
            <p className={TypographyVariants({ social: 'sm', className: 'text-white' })}>{error}</p>
          </div>
        ) : (
          <div
            id={id}
            role="tooltip"
            className={cn(
              'w-[243.76px] justify-start p-4 text-start',
              color === 'black' && 'bg-black-100',
              color === 'blue' && 'bg-blue-100'
            )}
          >
            {isLoading ? (
              <div className="flex w-full items-center justify-center p-2">
                <Loading className={'animate-spin text-pink-100'} />
              </div>
            ) : (
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
            )}
          </div>
        )
      ),
    [error, id, color, description, isLoading, title, readMoreHref, readMoreText]
  )

  return (
    <>
      <BaseTooltip
        className={className}
        id={id}
        ref={ref}
        offset={offset}
        html={content}
        key={isLoading ? 1 : 0}
        place={place}
      >
        {children}
      </BaseTooltip>
    </>
  )
}
