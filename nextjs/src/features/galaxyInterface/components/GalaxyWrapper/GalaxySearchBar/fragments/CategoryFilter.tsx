import { SearchFilterBox } from '@/features/shared/components/SearchFilterBox/SearchFilterBox'
import { ChangeButton } from '@/features/shared/components/SearchFilterBox/fragments'
import { useState } from 'react'

interface Props {
  title?: string
  selectedOption?: string
}

export const CategoryFilter: React.FC<Props> = ({ title, selectedOption }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <SearchFilterBox
      category={title}
      subCategory={selectedOption}
      actionButton={<ChangeButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />}
    />
  )
}
