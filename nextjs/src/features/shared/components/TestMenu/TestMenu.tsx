import SettingsIcon from '@/icons/open-menu.svg'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { useContext, useState } from 'react'

import { SWITCH_SERVER_Z_INDEX } from '../../constants/mainConstants'
import { ThemeProviderContext } from '../providers/ThemeProvider'

const DynamicSwitchServerButton = dynamic(
  () => import('../SwitchServerButton/SwitchServerButton'),
  { ssr: false }
)

export function TestMenu() {
  const themeProviderContext = useContext(ThemeProviderContext)
  const [isDevMenuHidden, setIsDevMenuHidden] = useState(false)
  if (
    process.env.parsed.NEXT_PUBLIC_ENV !== 'test' &&
    process.env.parsed.NEXT_PUBLIC_ENV !== 'local'
  )
    return null

  return (
    <Menu>
      {({ isOpen }) => (
        <>
          {!isDevMenuHidden && (
            <MenuButton
              isActive={isOpen}
              as={Button}
              zIndex={SWITCH_SERVER_Z_INDEX}
              position={'fixed'}
              right={10}
              bottom={10}
              background={'white'}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              h={14}
              leftIcon={<SettingsIcon />}
            >
              {'DEV'}
            </MenuButton>
          )}

          <MenuList zIndex={SWITCH_SERVER_Z_INDEX}>
            <MenuItem onClick={() => themeProviderContext.toggleTheme()}>
              Toggle theme (current: {themeProviderContext.theme ?? ''}){' '}
            </MenuItem>
            <MenuItem onClick={() => setIsDevMenuHidden(true)}>
              hide dev menu (reload the page to get it back)
            </MenuItem>
            <DynamicSwitchServerButton />
          </MenuList>
        </>
      )}
    </Menu>
  )
}
