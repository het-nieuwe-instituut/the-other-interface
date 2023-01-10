import { Box } from '@chakra-ui/react'
import MenuIconOpen from '@/icons/open-menu.svg'
import MenuIconClose from '@/icons/close-menu.svg'
import { usePresenter } from './usePresenter'
import { MAX_Z_INDEX } from '../../constants/mainConstants'

export const MenuButton = () => {
    const { isMenuOpen, handleOpenMenu } = usePresenter()
    return (
        <Box ml={'8'} pointerEvents={'auto'} cursor="pointer" position={'relative'} zIndex={MAX_Z_INDEX}>
            {isMenuOpen ? (
                <Box as={'button'} aria-label="menu open" onClick={() => handleOpenMenu(false)}>
                    <MenuIconClose />
                </Box>
            ) : (
                <Box as={'button'} aria-label="menu open" onClick={() => handleOpenMenu(true)}>
                    <MenuIconOpen />
                </Box>
            )}
        </Box>
    )
}
