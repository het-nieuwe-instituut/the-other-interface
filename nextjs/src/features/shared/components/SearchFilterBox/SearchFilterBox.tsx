import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { cn } from '@/features/ui/utils/cn'
import ActionButton from './buttons/ActionButton/ActionButton'

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
    <button
      className={cn(' bg-pink-100 text-blue-100 w-fit max-w-full px-2 h-[52px]')}
      style={{ zIndex: zIndex || 'inherit' }}
      onClick={onClick}
    >
      <div className="relative flex max-w-full items-center justify-between ">
        <p className={cn('text-blue.100 mr-1 truncate', TypographyVariants({ social: 'label' }))}>
          {category}
        </p>

        {actionButton && (
          <ActionButton id={id} onClick={actionButtonClick}>
            {actionButton}
          </ActionButton>
        )}
      </div>

      <p className={cn('truncate', TypographyVariants({ social: 'lg' }))}>{subCategory}</p>
    </button>
  )
}
