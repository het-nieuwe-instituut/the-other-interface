import ActionButton from '@/features/shared/components/SearchFilterBox/buttons/ActionButton/ActionButton'
import { ChangeButton } from '@/features/shared/components/SearchFilterBox/buttons/ChangeButton/ChangeButton'
import { FOOTER_Z_INDEX } from '@/features/shared/constants/mainConstants'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { cn } from '@/features/ui/utils/cn'

interface Props {
  selectedOption?: string
  onClick: () => void
  isOpen: boolean
}

export const CategoryFilter: React.FC<Props> = ({ onClick, isOpen, selectedOption }) => {
  const { t } = useTypeSafeTranslation('category')

  return (
    <div
      className={cn(
        'bg-transparent text-pink.100 border border-pink.100',
        'w-fit max-w-full h-[52px]',
        `z-${FOOTER_Z_INDEX + 1}`,
        'px-2'
      )}
      onClick={onClick}
    >
      <div className="relative max-w-full flex items-center justify-between pt-1 pb-2">
        <p className="font-social-large text-xs leading-none truncate">{t('category')}</p>
        <ActionButton>{<ChangeButton isOpen={isOpen} />}</ActionButton>
      </div>
      <p className="font-social-large text-lg leading-none truncate">{selectedOption}</p>
    </div>
  )
}
