import MenuIconCloseHover from '@/icons/close-menu-hover.svg'
import MenuIconOpenHover from '@/icons/open-menu-hover.svg'
import MenuIconOpen from '@/icons/open-menu.svg'
import MenuIconClose from '@/icons/close-menu.svg'
import { Flex, Box } from '@chakra-ui/react'
import { MAX_Z_INDEX } from '../../constants/mainConstants'
import { usePresenter } from './usePresenter'

export const MenuButton = () => {
  const { isMenuOpen, handleOpenMenu, isHovering, setIsHovering } = usePresenter()

  const getIcon = () => {
    if (isMenuOpen) {
      return isHovering ? <MenuIconCloseHover /> : <MenuIconClose />
    } else {
      return isHovering ? <MenuIconOpenHover /> : <MenuIconOpen />
    }
  }

  return (
    <Flex
      ml="8"
      pointerEvents="auto"
      cursor="pointer"
      position="relative"
      zIndex={MAX_Z_INDEX}
      alignItems="center"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Box
        as="button"
        aria-label={isMenuOpen ? 'menu close' : 'menu open'}
        onClick={() => handleOpenMenu(!isMenuOpen)}
        w={'40px'}
      >
        {getIcon()}
      </Box>
    </Flex>
  )
}
