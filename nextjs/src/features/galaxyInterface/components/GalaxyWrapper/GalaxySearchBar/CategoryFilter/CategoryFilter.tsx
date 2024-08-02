import { ChangeButton } from '@/features/shared/components/SearchFilterBox/buttons/ChangeButton/ChangeButton'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { cn } from '@/features/ui/utils/cn'

interface Props {
  selectedOption?: string
  onClick: () => void
  isOpen: boolean
  ariaLabel: string
}

export const CategoryFilter: React.FC<Props> = ({ onClick, isOpen, selectedOption, ariaLabel }) => {
  const { t } = useTypeSafeTranslation('category')

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <button
      className={cn(
        'bg-transparent text-pink-100 border border-pink-100 m-0 p-0 text-start flex flex-col',
        'w-fit max-w-full h-[52px]',
        'px-2'
      )}
      aria-label={ariaLabel}
      onClick={onClick}
      type="button"
    >
      <div className="relative flex max-w-full items-center justify-between pb-2 pt-1">
        <p className={cn('truncate mr-1', TypographyVariants({ socialLarge: 'label' }))}>
          {t('category')}
        </p>
        <div className="mt-px">{<ChangeButton isOpen={isOpen} />}</div>
      </div>
      <p className={cn('truncate', TypographyVariants({ socialLarge: 'textfield' }))}>
        {selectedOption}
      </p>
    </button>
  )
}
