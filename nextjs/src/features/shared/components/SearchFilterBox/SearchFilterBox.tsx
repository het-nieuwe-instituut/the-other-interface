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
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div style={{ zIndex: zIndex || 'inherit' }} className="relative">
      <button
        className={
          'flex h-[52px] w-fit max-w-full flex-col bg-pink-100 px-2 text-blue-100 hover:bg-pink-100 hover:text-blue-100'
        }
        onClick={onClick}
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
      {actionButton && (
        <ActionButton
          id={id}
          onClick={actionButtonClick}
          className="absolute right-0 top-0 z-[9999] mt-px hover:bg-initial"
        >
          {actionButton}
        </ActionButton>
      )}
    </div>
  )
}
