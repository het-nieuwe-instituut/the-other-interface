import NextLink, { LinkProps } from 'next/link'
import { cn } from '../../utils/cn'
import { LightBoxNextImageByIcon } from '../lightbox/LightBoxNextImage'
import { LightboxProvider } from '../lightbox/LightboxProvider'
import { NavLinkButton } from '../nav-link-button/component'
import { TypographyVariants } from '../typography/variants'
import NavArrowLeft from './nav-arrow-left.svg'
import NavArrowRight from './nav-arrow-right.svg'
import { Subtitle, SubtitleProps } from '../subtitle/Subtitle'

export interface CarouselGridProps {
  className?: string
  children:
    | React.ReactElement<CarouselGridCardWrapperProps | CarouselGridPaginationProps>[]
    | React.ReactElement<CarouselGridCardWrapperProps | CarouselGridPaginationProps>
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
  children: React.ReactElement<CarouselGridCardProps | null>[]
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
  title: string
  description: string
  image: string
  className?: string
  href: string
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
  return (
    <NextLink href={href} className={cn(className, 'flex flex-col gap-4 group relative')}>
      <div className="h-[290px]">
        <LightBoxNextImageByIcon src={image} fill alt={alt} className="object-cover" />
      </div>
      <div className="flex flex-col ">
        <div>
          <p
            className={TypographyVariants({
              socialLarge: 'xl',
              className: cn(
                'group-hover:text-white pb-1 inline-flex relative',
                'before:z-[-1] before:absolute',
                'group-hover:before:bottom-0  group-hover:before:left-0 group-hover:before:bg-black-100 group-hover:before:content-[""]',
                'group-hover:before:ml-[-4px] group-hover:before:w-[calc(100%+8px)] group-hover:before:mb-[-4px] group-hover:before:h-[calc(100%+8px)]'
              ),
            })}
          >
            {title}
          </p>
        </div>
        <p
          className={TypographyVariants({
            socialLarge: 'md',
            className: cn(
              'group-hover:text-white pb-1 inline-flex relative',
              'before:z-[-1] before:absolute',
              'group-hover:before:bottom-0  group-hover:before:left-0 group-hover:before:bg-black-100 group-hover:before:content-[""]',
              'group-hover:before:ml-[-4px] group-hover:before:w-[calc(100%+8px)] group-hover:before:mb-[-4px] group-hover:before:h-[calc(100%+8px)]'
            ),
          })}
        >
          {description}
        </p>
      </div>
    </NextLink>
  )
}

export interface CarouselGridFooterProps {
  children:
    | React.ReactElement<CarouselGridPaginationProps | CarouselGridLinkProps>[]
    | React.ReactElement<CarouselGridPaginationProps | CarouselGridLinkProps>
}
export const CarouselGridFooter = ({ children }: CarouselGridFooterProps) => {
  return <div className="flex justify-between">{children}</div>
}

export interface CarouselGridPaginationProps {
  onNext?: () => void
  onPrevious?: () => void
  hideNext?: boolean
  hidePrevious?: boolean
}
export const CarouselGridPagination = ({
  onNext,
  onPrevious,
  hideNext,
  hidePrevious,
}: CarouselGridPaginationProps) => {
  return (
    <div className="flex h-full w-[116.32px] items-center justify-center gap-2">
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
  return <NavLinkButton variant={'textSecondary'} {...props} />
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
