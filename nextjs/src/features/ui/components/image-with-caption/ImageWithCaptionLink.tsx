import { LinkProps } from 'next/link'
import { ImageWithCaption, ImageWithCaptionProps } from './ImageWithCaption'
import NextLink from 'next/link'
import { cn } from '../../utils/cn'
export const ImageWithCaptionLink = ({
  href,
  className,
  ...restProps
}: ImageWithCaptionProps & { href: LinkProps['href'] }) => {
  return (
    <NextLink className={'group '} href={href}>
      <ImageWithCaption
        className={cn(
          'border border-solid border-transparent border-is group-hover:border-black box-border',
          className
        )}
        {...restProps}
      />
    </NextLink>
  )
}
