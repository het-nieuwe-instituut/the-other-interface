import ActionButton from './buttons/ActionButton/ActionButton'
import { cn } from '@/features/ui/utils/cn'
import { TypographyVariants } from '@/features/ui/components/typography/variants'

interface Props {
  category?: string
  subCategory?: string
  actionButton?: React.ReactNode
  actionButtonClick?: (id: string) => void
  actionButtonAriaLabel?: string
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
  actionButtonAriaLabel,
  id,
}) => {
  return (
    <div className="relative">
      <div style={{ zIndex: zIndex || 'inherit' }} className="relative">
        <button
          className={
            'flex h-[52px] w-fit max-w-full flex-col bg-pink-100 px-2 text-blue-100 hover:bg-pink-100 hover:text-blue-100'
          }
          onClick={onClick}
          aria-label={`Select filter ${category}`}
        >
          <div className="relative flex max-w-full items-center justify-between pt-1">
            <p
              className={cn(
                'text-blue.100 mr-1 truncate',
                TypographyVariants({ socialLarge: 'label' })
              )}
            >
              {category ?? 'unknown'}
            </p>
          </div>

          <p className={cn('truncate', TypographyVariants({ socialLarge: 'lg' }))}>{subCategory}</p>
        </button>
      </div>
      {actionButton && actionButtonAriaLabel && (
        <ActionButton
          id={id}
          onClick={actionButtonClick}
          className="absolute right-0 top-0 z-[9999] mt-px hover:bg-initial hover:text-white text-blue-100 size-10 -m-2 flex items-center justify-center"
          aria-label={actionButtonAriaLabel}
        >
          {actionButton}
        </ActionButton>
      )}
    </div>
  )
}
