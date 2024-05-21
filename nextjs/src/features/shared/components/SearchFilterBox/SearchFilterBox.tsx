import { Flex, GridItem, Text } from '@chakra-ui/react'
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
      className={'px-2 h-[52px]'}
    >
      <div className="relative max-w-full flex items-center justify-between pt-1 pb-2">
        <p className={cn('text-blue.100 mr-1 truncate', TypographyVariants({ social: 'label' }))}>
          {category}
        </p>

        {actionButton && (
          <ActionButton id={id} onClick={actionButtonClick}>
            {actionButton}
          </ActionButton>
        )}
      </div>

      <p className={cn('truncate', TypographyVariants({ social: 'textfield' }))}>{subCategory}</p>
    </GridItem>
  )
}
