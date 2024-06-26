import { DeepPartial } from '@/features/shared/types/helpers'
import { cn } from '@/features/ui/utils/cn'
import { ComponentModulesHighlight } from 'src/generated/graphql'
import { TypographyVariants } from '../typography/variants'
import { ImageWithCaption } from '../image-with-caption/ImageWithCaption'
import { ButtonGroup, LinkButtonGroupItem } from '../button-group/component'

export interface HighlighProps {
  className?: string
  component:
    | (Required<Pick<ComponentModulesHighlight, 'title'>> & DeepPartial<ComponentModulesHighlight>)
    | null
}

export const Highlight = ({ className, component }: HighlighProps) => {
  if (
    !component?.image?.data?.attributes?.url ||
    !component?.image_alt_text ||
    !component?.image?.data?.attributes?.height ||
    !component?.image?.data?.attributes?.width
  )
    return null

  return (
    <div className={cn('flex-wrap md:flex', className)}>
      <div className="w-full sm:mb-4 md:w-1/2 md:pr-4">
        <ImageWithCaption
          src={component?.image?.data?.attributes?.url}
          alt={component?.image_alt_text}
          height={component?.image?.data?.attributes?.height}
          width={component?.image?.data?.attributes?.width}
        />
      </div>
      <div className="w-full md:w-1/2">
        <div className="mb-4">
          <p className={TypographyVariants({ socialLarge: 'xl', className: 'mb-4' })}>
            {component.title}
          </p>
          <p className={TypographyVariants({ socialLarge: 'lg' })}>{component?.description}</p>
        </div>
        {component.buttons && (
          <ButtonGroup className="flex gap-4">
            {component.buttons.map(button => {
              if (!button?.text || !button?.url) {
                return null
              }
              return (
                <LinkButtonGroupItem
                  key={button.id}
                  href={button.url}
                  color={'blue'}
                  varient={'primary'}
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
