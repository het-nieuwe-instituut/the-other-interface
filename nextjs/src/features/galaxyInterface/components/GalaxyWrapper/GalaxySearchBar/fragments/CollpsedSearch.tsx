import { cn } from '@/features/ui/utils/cn'
import SearchIconCollapsed from '@/icons/search-icon-collapsed.svg'
import { IconButton } from '@/features/ui/components/icon-button/component'

type Props = {
  toggleSearchBar: () => void
  className?: string
}

export const CollpsedSearch = ({ toggleSearchBar, className }: Props) => {
  return (
    <div className={cn(className, 'flex justify-end items-center w-full h-full')}>
      <IconButton
        aria-label="search"
        intent={'ghost'}
        size={'small'}
        icon={<SearchIconCollapsed />}
        className="z-20 flex size-[60px] border border-blue"
        onClick={toggleSearchBar}
      />
    </div>
  )
}
