import ActionButton from '@/features/shared/components/SearchFilterBox/buttons/ActionButton/ActionButton'
import { ChangeButton } from '@/features/shared/components/SearchFilterBox/buttons/ChangeButton/ChangeButton'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { cn } from '@/features/ui/utils/cn'

interface Props {
  selectedOption?: string
  onClick: () => void
  isOpen: boolean
}

export const CategoryFilter: React.FC<Props> = ({ onClick, isOpen, selectedOption }) => {
  const { t } = useTypeSafeTranslation('category')

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className={cn(
        'bg-transparent text-pink.100 border border-pink.100',
        'w-fit max-w-full h-[52px]',
        'px-2'
      )}
      onClick={onClick}
    >
      <div className="relative flex max-w-full items-center justify-between pb-2 pt-1">
        <p className={cn('truncate mr-1', TypographyVariants({ social: 'label' }))}>
          {t('category')}
        </p>
        <ActionButton>{<ChangeButton isOpen={isOpen} />}</ActionButton>
      </div>
      <p className={cn('truncate', TypographyVariants({ social: 'textfield' }))}>
        {selectedOption}
      </p>
    </div>
  )
}
