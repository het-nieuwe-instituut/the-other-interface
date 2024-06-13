import { cn } from '@/features/ui/utils/cn'
import SearchIconCollapsed from '@/icons/search-icon-collapsed.svg'

type Props = {
  toggleSearchBar: () => void
  className?: string
}

export const CollpsedSearch = ({ toggleSearchBar, className }: Props) => {
  return (
    <div className={cn('flex items-center justify-end z-[inherit] h-full w-full', className)}>
      <button
        className="z-20 flex h-full w-[65px] items-center justify-center bg-blue-100"
        onClick={toggleSearchBar}
      >
        <SearchIconCollapsed />
      </button>
    </div>
  )
}
