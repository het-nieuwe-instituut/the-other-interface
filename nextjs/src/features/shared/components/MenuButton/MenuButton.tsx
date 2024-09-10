import MenuIconCloseHover from '@/icons/close-menu-hover.svg'
import MenuIconClose from '@/icons/close-menu.svg'
import MenuIconOpenHover from '@/icons/open-menu-hover.svg'
import MenuIconOpen from '@/icons/open-menu.svg'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../../configs/store'
import { sharedActions } from '../../stores/shared.store'
import { cn } from '@/features/ui/utils/cn'

export const MenuButton = () => {
  const isMenuOpen = useSelector((state: State) => state.shared.isMenuOpen)
  const dispatch = useDispatch()

  const handleOpenMenu = (flag: boolean) => {
    dispatch(sharedActions.menuOpen({ isMenuOpen: flag }))
  }

  return (
    <button
      aria-label={isMenuOpen ? 'menu close' : 'menu open'}
      className={cn(
        'group pointer-events-auto relative z-[9999] ml-8 max-md:ml-4 flex  items-center px-px pt-px mt-2 justify-center ',
        isMenuOpen
          ? ' text-pink-100 active:bg-pink-100 active:text-blue-100 focus:bg-pink-100 focus:text-blue-100 pb-2 w-[42px] '
          : ' text-blue-100 active:bg-blue-100 active:text-pink-100 focus:bg-blue-100 focus:text-pink-100 pb-2 w-[42px] '
      )}
      onClick={() => handleOpenMenu(!isMenuOpen)}
    >
      <MenuIconCloseHover className={cn('hidden', isMenuOpen && 'group-hover:block')} />
      <MenuIconClose className={cn('hidden', isMenuOpen && 'block group-hover:hidden')} />
      <MenuIconOpenHover className={cn('hidden', !isMenuOpen && 'group-hover:block')} />
      <MenuIconOpen className={cn('hidden', !isMenuOpen && 'block group-hover:hidden')} />
    </button>
  )
}
