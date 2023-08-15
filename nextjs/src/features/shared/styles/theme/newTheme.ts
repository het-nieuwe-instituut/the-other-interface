import { extendTheme } from '@chakra-ui/react'

import { components } from './components'
import foundations, { newFoundations } from './foundations'
import { styles } from './styles'

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
  ...newFoundations,
  config,
  styles,
  components,
})
