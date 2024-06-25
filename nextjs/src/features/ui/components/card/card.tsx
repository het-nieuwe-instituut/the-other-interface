import NextLink from 'next/link'
import { cn } from '../../utils/cn'
import { LightBoxNextImageByIcon } from '../lightbox/LightBoxNextImage'
import { TypographyVariants } from '../typography/variants'

export interface CardProps {
  title?: string
  description?: string
  image?: string
  className?: string
  href?: string
  alt: string
}
export const Card = ({ title, description, image, className, href, alt }: CardProps) => {
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
    if (!image) {
      return (
        <div
          className={cn(
            'flex flex-col p-2',
            'after:absolute after:z-[-1]',
            'group-hover:after:bottom-0  group-hover:after:left-0 group-hover:after:bg-black-100 group-hover:after:content-[""]',
            'group-hover:after:ml-[-4px] group-hover:after:w-[calc(100%+8px)] group-hover:after:mb-[-4px] group-hover:after:h-[calc(100%+8px)]'
          )}
        >
          {title && (
            <p
              className={TypographyVariants({
                socialLarge: 'xl',
                className: cn('group-hover:text-white pb-1 inline-flex relative z-10'),
              })}
            >
              {title}
            </p>
          )}
          {description && (
            <p
              className={TypographyVariants({
                socialLarge: 'md',
                className: cn(
                  'line-clamp-12 group-hover:text-white pb-1 inline-flex relative z-10'
                ),
              })}
            >
              {description}
            </p>
          )}
        </div>
      )
    }

    return (
      <>
        <div className="h-[290px]">
          <LightBoxNextImageByIcon src={image} fill alt={alt} className="object-cover" />
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
