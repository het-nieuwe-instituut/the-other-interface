import { SearchFilterBox } from '@/features/shared/components/SearchFilterBox/SearchFilterBox'
import { ChangeButton } from '@/features/shared/components/SearchFilterBox/buttons/ChangeButton/ChangeButton'
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
      category={t('category')}
      subCategory={selectedOption}
      actionButton={<ChangeButton onClick={onClick} isOpen={isOpen} />}
    />
  )
}
