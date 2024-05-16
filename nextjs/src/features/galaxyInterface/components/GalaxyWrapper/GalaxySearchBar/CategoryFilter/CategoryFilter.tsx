import { SearchFilterBox } from '@/features/shared/components/SearchFilterBox/SearchFilterBox'
import ActionButton from '@/features/shared/components/SearchFilterBox/buttons/ActionButton/ActionButton'
import { ChangeButton } from '@/features/shared/components/SearchFilterBox/buttons/ChangeButton/ChangeButton'
import { FOOTER_Z_INDEX } from '@/features/shared/constants/mainConstants'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'

interface Props {
  selectedOption?: string
  onClick: () => void
  isOpen: boolean
}

export const CategoryFilter: React.FC<Props> = ({ onClick, isOpen, selectedOption }) => {
  const { t } = useTypeSafeTranslation('category')

  return (
    <div
      className={`bg-transparent text-pink.100 w-fit z-${
        FOOTER_Z_INDEX + 1
      } ${'cursor-pointer'} h-[52px] max-w-full border border-pink.100 px-2`}
      onClick={onClick}
    >
      <div className="relative max-w-full flex items-center justify-between pt-1 pb-2">
        <p className="font-social-large text-[11px] leading-[11px] truncate">{t('category')}</p>
        <ActionButton>{<ChangeButton isOpen={isOpen} />}</ActionButton>
      </div>
      <p className="font-social-large text-[18px] leading-[18px] truncate text-xl">
        {selectedOption}
      </p>
    </div>
  )
}
