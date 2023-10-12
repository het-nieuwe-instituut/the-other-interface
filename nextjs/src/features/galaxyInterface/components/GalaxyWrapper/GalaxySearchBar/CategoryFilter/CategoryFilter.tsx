import { SearchFilterBox } from '@/features/shared/components/SearchFilterBox/SearchFilterBox'
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
    <SearchFilterBox
      zIndex={FOOTER_Z_INDEX + 1}
      category={t('category')}
      subCategory={selectedOption}
      actionButton={<ChangeButton onClick={onClick} isOpen={isOpen} />}
    />
  )
}
