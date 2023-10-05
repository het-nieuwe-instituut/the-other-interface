import { SearchFilterBox } from '@/features/shared/components/SearchFilterBox/SearchFilterBox'
import { ChangeButton } from '@/features/shared/components/SearchFilterBox/buttons/ChangeButton/ChangeButton'

import { useState } from 'react'

interface Props {
  title?: string
  selectedOption?: string
}

export const CategoryFilter: React.FC<Props> = ({ title, selectedOption }) => {
  // TODO: move to search bar use selector
  const [isOpen, setIsOpen] = useState(false)

  return (
    <SearchFilterBox
      category={title}
      subCategory={selectedOption}
      actionButton={<ChangeButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />}
    />
  )
}
