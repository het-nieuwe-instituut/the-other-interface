import { extendTheme } from '@chakra-ui/react'

import { components } from './components'
import foundations from './foundations'
import { styles } from './styles'
import newTypography from './foundations/newTypography'

const direction = 'ltr'

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light',
  cssVarPrefix: 'chakra',
}

export type AppTheme = typeof foundations

export const newTheme = extendTheme({
  direction,
  fonts: {
    heading: `Impact`,
    body: `Social`,
  },
  ...{ ...foundations, ...{ typeography: newTypography } },
  config,
  styles,
  components,
})
