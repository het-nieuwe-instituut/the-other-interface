import { GridItem } from '@chakra-ui/react'
import ActionButton from './buttons/ActionButton/ActionButton'
import { cn } from '@/features/ui/utils/cn'
import { TypographyVariants } from '@/features/ui/components/typography/variants'

interface Props {
  category?: string
  subCategory?: string
  actionButton?: React.ReactNode
  actionButtonClick?: (id: string) => void
  zIndex?: number
  onClick?: () => void
  id?: string
}
export const SearchFilterBox: React.FC<Props> = ({
  category,
  subCategory,
  actionButton,
  onClick,
  zIndex,
  actionButtonClick,
  id,
}) => {
  return (
    <GridItem
      backgroundColor={'pinkAlpha.100'}
      color={'blueAlpha.100'}
      width={'fit-content'}
      zIndex={zIndex || 'inherit'}
      cursor={onClick ? 'pointer' : 'default'}
      onClick={onClick}
      maxWidth={'100%'}
      className={'h-[52px] px-2'}
    >
      <div className="relative flex max-w-full items-center justify-between pt-1">
        <p
          className={cn(
            'text-blue.100 mr-1 truncate',
            TypographyVariants({ socialLarge: 'label' })
          )}
        >
          {category}
        </p>
        {actionButton && (
          <ActionButton id={id} onClick={actionButtonClick}>
            {actionButton}
          </ActionButton>
        )}
      </div>

      <p className={cn('truncate', TypographyVariants({ socialLarge: 'lg' }))}>{subCategory}</p>
    </GridItem>
  )
}
