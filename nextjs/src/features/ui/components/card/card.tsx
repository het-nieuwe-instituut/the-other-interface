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
      <NextLink href={href} className={cn(className, 'flex flex-col gap-4 relative')}>
        {renderContent()}
      </NextLink>
    )
  }

  return <div className={cn(className, 'flex flex-col gap-4 relative')}>{renderContent()}</div>

  function renderContent() {
    if (!image) {
      return (
        <div className={cn('flex flex-col group')}>
          {title && (
            <div>
              <p
                lang="nl"
                className={TypographyVariants({
                  socialLarge: 'xl',
                  className: cn(
                    'hyphens-auto inline-block relative z-10 inline-flex',
                    'after:absolute after:z-[-1]',
                    'group-hover:text-ivory-100 group-hover:after:bg-black-100 group-hover:after:content-[""]',
                    'group-hover:after:w-[calc(100%+8px)] group-hover:after:h-[calc(100%+8px)]',
                    'group-hover:after:ml-[-2px] group-hover:after:mb-[-2px] group-hover:after:bottom-0 group-hover:after:left-0'
                  ),
                })}
              >
                {title}
              </p>
            </div>
          )}
          {description && (
            <div>
              <div
                className={TypographyVariants({
                  socialLarge: 'md',
                  className: cn(
                    'inline-block relative z-10 inline-flex',
                    'after:absolute after:z-[-1]',
                    'group-hover:text-ivory-100 group-hover:after:bg-black-100 group-hover:after:content-[""]',
                    'group-hover:after:w-[calc(100%+8px)] group-hover:after:h-[calc(100%+8px)]',
                    'group-hover:after:ml-[-2px] group-hover:after:mb-[-2px] group-hover:after:bottom-0 group-hover:after:left-0'
                  ),
                })}
              >
                <p lang="nl" className={cn('line-clamp-12 hyphens-auto')}>
                  {description}
                </p>
              </div>
            </div>
          )}
        </div>
      )
    }

    return (
      <>
        <div className="h-[290px]">
          <LightBoxNextImageByIcon src={image} fill alt={alt} className="object-cover" />
        </div>
        <div className="group flex flex-col">
          {title && (
            <div>
              <p
                lang="nl"
                className={TypographyVariants({
                  socialLarge: 'xl',
                  className: cn(
                    'hyphens-auto inline-block inline-flex relative z-10',
                    'after:absolute after:z-[-1]',
                    'group-hover:text-ivory-100 group-hover:after:bg-black-100 group-hover:after:content-[""]',
                    'group-hover:after:w-[calc(100%+8px)] group-hover:after:h-[calc(100%+8px)]',
                    'group-hover:after:ml-[-2px] group-hover:after:mb-[-2px] group-hover:after:bottom-0 group-hover:after:left-0'
                  ),
                })}
              >
                {title}
              </p>
            </div>
          )}
          {description && (
            <div>
              <div
                className={TypographyVariants({
                  socialLarge: 'md',
                  className: cn(
                    'inline-block relative z-10 inline-flex',
                    'after:absolute after:z-[-1]',
                    'group-hover:text-ivory-100 group-hover:after:bg-black-100 group-hover:after:content-[""]',
                    'group-hover:after:w-[calc(100%+8px)] group-hover:after:h-[calc(100%+8px)]',
                    'group-hover:after:ml-[-2px] group-hover:after:mb-[-2px] group-hover:after:bottom-0 group-hover:after:left-0'
                  ),
                })}
              >
                <p lang="nl" className={cn('line-clamp-2 hyphens-auto')}>
                  {description}
                </p>
              </div>
            </div>
          )}
        </div>
      </>
    )
  }
}
