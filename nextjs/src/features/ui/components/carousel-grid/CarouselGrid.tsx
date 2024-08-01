import { LinkProps } from 'next/link'
import React from 'react'
import { cn } from '../../utils/cn'
import { Card, CardProps } from '../card/card'
import { LightboxProvider } from '../lightbox/LightboxProvider'
import { NavLinkButton } from '../nav-link-button/component'
import { Subtitle, SubtitleProps } from '../subtitle/Subtitle'
import { TypographyVariants } from '../typography/variants'
import NavArrowLeft from './nav-arrow-left.svg'
import NavArrowRight from './nav-arrow-right.svg'

type SpecificChildren<T> =
  | React.ReactElement<T | null | undefined | string | Element>
  | React.ReactNode
  | (React.ReactElement<T | null | undefined | string | Element> | React.ReactNode)[]
export interface CarouselGridProps {
  className?: string
  children: SpecificChildren<
    CarouselGridCardWrapperProps | CarouselGridPaginationProps | null | undefined
  >
}

export const CarouselGrid = ({ className, children }: CarouselGridProps) => {
  return (
    <LightboxProvider>
      <div className={cn('flex flex-col gap-4', className)}>{children}</div>
    </LightboxProvider>
  )
}

export interface CarouselGridCardWrapperProps {
  cols: 1 | 2 | 3 | 4
  className?: string
  children: SpecificChildren<CardProps[] | null>
}

export const CarouselGridCardWrapper = ({
  className,
  cols,
  children,
}: CarouselGridCardWrapperProps) => {
  return (
    <div
      className={cn(
        className,
        'grid gap-4',
        cols === 1 && 'grid-cols-1',
        cols === 2 && 'grid-cols-2',
        cols === 3 && 'grid-cols-3',
        cols === 4 && 'grid-cols-4'
      )}
    >
      {children}
    </div>
  )
}

export const CarouselGridCard = Card

export interface CarouselGridFooterProps {
  children:
    | SpecificChildren<CarouselGridPaginationProps | CarouselGridLinkProps>[]
    | SpecificChildren<CarouselGridPaginationProps | CarouselGridLinkProps>
}
export const CarouselGridFooter = ({ children }: CarouselGridFooterProps) => {
  return <div className="flex items-end justify-between">{children}</div>
}

export interface CarouselGridPaginationProps {
  className?: string
  onNext?: () => void
  onPrevious?: () => void
  hideNext?: boolean
  hidePrevious?: boolean
}
export const CarouselGridPagination = ({
  className,
  onNext,
  onPrevious,
  hideNext,
  hidePrevious,
}: CarouselGridPaginationProps) => {
  return (
    <div className={cn('flex h-full items-center justify-center gap-2 -mr-3 ml-auto', className)}>
      <button onClick={onPrevious} disabled={hidePrevious} aria-label="previous">
        <NavArrowLeft
          className={cn(
            hidePrevious && 'opacity-20',
            !hidePrevious && 'hover:bg-black-100 hover:text-white'
          )}
        />
      </button>
      <button onClick={onNext} disabled={hideNext} aria-label="next">
        <NavArrowRight
          className={cn(
            hideNext && 'opacity-20',
            !hideNext && 'hover:bg-black-100 hover:text-white'
          )}
        />
      </button>
    </div>
  )
}

export interface CarouselGridLinkProps extends LinkProps {
  children: string
}
export const CarouselGridLink = (props: CarouselGridLinkProps) => {
  return <NavLinkButton variant={'textPrimary'} {...props} />
}

export interface CarouselGridTitleProps extends SubtitleProps {}
export const CarouselGridTitle = (props: CarouselGridTitleProps) => {
  return <Subtitle {...props} />
}

export interface CarouselGridDescriptionProps extends SubtitleProps {}
export const CarouselGridDescription = ({
  className,
  ...restProps
}: CarouselGridDescriptionProps) => {
  return <p {...restProps} className={TypographyVariants({ responsive: 'paragraph', className })} />
}
