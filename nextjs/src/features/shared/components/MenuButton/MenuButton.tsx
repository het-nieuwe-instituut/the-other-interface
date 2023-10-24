import MenuIconClose from '@/icons/close-menu.svg'
import MenuIconOpen from '@/icons/open-menu.svg'
import { Flex, Box } from '../../configs/chakra'

import { MAX_Z_INDEX } from '../../constants/mainConstants'
import { usePresenter } from './usePresenter'

export const MenuButton = () => {
  const { isMenuOpen, handleOpenMenu } = usePresenter()
  return (
    <Flex
      ml={'8'}
      pointerEvents={'auto'}
      cursor="pointer"
      position={'relative'}
      zIndex={MAX_Z_INDEX}
      alignItems={'center'}
    >
      {isMenuOpen ? (
        <Box as={'button'} aria-label="menu open" onClick={() => handleOpenMenu(false)}>
          <MenuIconClose />
        </Box>
      ) : (
        <Box as={'button'} aria-label="menu open" onClick={() => handleOpenMenu(true)}>
          <MenuIconOpen />
        </Box>
      )}
    </Flex>
  )
}
