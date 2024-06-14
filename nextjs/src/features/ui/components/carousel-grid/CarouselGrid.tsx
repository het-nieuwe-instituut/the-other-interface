import NextLink, { LinkProps } from 'next/link'
import { cn } from '../../utils/cn'
import { LightBoxNextImageByIcon } from '../lightbox/LightBoxNextImage'
import { LightboxProvider } from '../lightbox/LightboxProvider'
import { NavLinkButton } from '../nav-link-button/component'
import { TypographyVariants } from '../typography/variants'
import NavArrowLeft from './nav-arrow-left.svg'
import NavArrowRight from './nav-arrow-right.svg'
import { Subtitle, SubtitleProps } from '../subtitle/Subtitle'
import React from 'react'

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
  children: SpecificChildren<CarouselGridCardProps[] | null>
}

export const CarouselGridCardWrapper = ({
  className,
  cols,
  children,
}: CarouselGridCardWrapperProps) => {
  return (
    <LightboxProvider>
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
    </LightboxProvider>
  )
}

export interface CarouselGridCardProps {
  title?: string
  description?: string
  image?: string
  className?: string
  href?: string
  alt: string
}
export const CarouselGridCard = ({
  title,
  description,
  image,
  className,
  href,
  alt,
}: CarouselGridCardProps) => {
  if (href) {
    return (
      <NextLink href={href} className={cn(className, 'flex flex-col gap-4 group relative')}>
        {renderContent()}
      </NextLink>
    )
  }

  return (
    <div className={cn(className, 'flex flex-col gap-4 group relative')}>{renderContent()}</div>
  )

  function renderContent() {
    return (
      <>
        <div className="h-[290px]">
          {image && <LightBoxNextImageByIcon src={image} fill alt={alt} className="object-cover" />}
        </div>
        <div className="flex flex-col ">
          {title && (
            <div>
              <p
                className={TypographyVariants({
                  socialLarge: 'xl',
                  className: cn(
                    'group-hover:text-white pb-1 inline-flex relative z-10',
                    'after:absolute after:z-[-1]',
                    'group-hover:after:bottom-0  group-hover:after:left-0 group-hover:after:bg-black-100 group-hover:after:content-[""]',
                    'group-hover:after:ml-[-4px] group-hover:after:w-[calc(100%+8px)] group-hover:after:mb-[-4px] group-hover:after:h-[calc(100%+8px)]'
                  ),
                })}
              >
                {title}
              </p>
            </div>
          )}
          {description && (
            <div
              className={cn(
                'group-hover:text-white pb-1 inline-flex relative z-10',
                'after:absolute after:z-[-1]',
                'group-hover:after:bottom-0  group-hover:after:left-0 group-hover:after:bg-black-100 group-hover:after:content-[""]',
                'group-hover:after:ml-[-4px] group-hover:after:w-[calc(100%+8px)] group-hover:after:mb-[-4px] group-hover:after:h-[calc(100%+8px)]'
              )}
            >
              <p
                className={TypographyVariants({
                  socialLarge: 'md',
                  className: cn(' line-clamp-2'),
                })}
              >
                {description}
              </p>
            </div>
          )}
        </div>
      </>
    )
  }
}

export interface CarouselGridFooterProps {
  children:
    | SpecificChildren<CarouselGridPaginationProps | CarouselGridLinkProps>[]
    | SpecificChildren<CarouselGridPaginationProps | CarouselGridLinkProps>
}
export const CarouselGridFooter = ({ children }: CarouselGridFooterProps) => {
  return <div className="flex items-end justify-between">{children}</div>
}

export interface CarouselGridPaginationProps {
  className: string
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
    <div className={cn('flex h-full w-[116.32px] items-center justify-center gap-2', className)}>
      <button onClick={onPrevious}>
        <NavArrowLeft className={cn(!hideNext && 'invisible')} />
      </button>
      <button onClick={onNext}>
        <NavArrowRight className={cn(!hidePrevious && 'invisible')} />
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
