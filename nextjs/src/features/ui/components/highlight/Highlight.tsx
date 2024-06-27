import { DeepPartial } from '@/features/shared/types/helpers'
import { cn } from '@/features/ui/utils/cn'
import { ComponentCoreButton, Maybe, UploadFileEntityResponse } from 'src/generated/graphql'
import { TypographyVariants } from '../typography/variants'
import { ImageWithCaption } from '../image-with-caption/ImageWithCaption'
import { ButtonGroup, LinkButtonGroupItem } from '../button-group/component'

export interface HighlighProps {
  className?: string
  image?: DeepPartial<UploadFileEntityResponse>
  title?: string
  description?: Maybe<string>
  altText?: string
  buttons?: DeepPartial<Array<ComponentCoreButton>> | null
}

export const Highlight = ({
  className,
  image,
  title,
  description,
  buttons,
  altText,
}: HighlighProps) => {
  if (
    !image?.data?.attributes?.url ||
    !altText ||
    !image?.data?.attributes?.height ||
    !image?.data?.attributes?.width
  )
    return null

  return (
    <div className={cn('flex-wrap md:flex', className)}>
      <div className="w-full sm:mb-4 md:w-1/2 md:pr-4">
        <ImageWithCaption
          src={image?.data?.attributes?.url}
          alt={altText}
          height={image?.data?.attributes?.height}
          width={image?.data?.attributes?.width}
        />
      </div>
      <div className="w-full md:w-1/2">
        <div className="mb-4">
          <p className={TypographyVariants({ socialLarge: 'xl', className: 'mb-4' })}>{title}</p>
          <p className={TypographyVariants({ socialLarge: 'lg' })}>{description}</p>
        </div>
        {buttons && (
          <ButtonGroup className="flex gap-4">
            {buttons.map(button => {
              if (!button?.text || !button?.url) {
                return null
              }
              return (
                <LinkButtonGroupItem
                  key={button.id}
                  href={button.url}
                  color={'blue'}
                  variant={'primary'}
                >
                  {button.text}
                </LinkButtonGroupItem>
              )
            })}
          </ButtonGroup>
        )}
      </div>
    </div>
  )
}
