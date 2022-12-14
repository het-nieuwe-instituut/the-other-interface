import { extendTheme } from '@chakra-ui/react'
import { components } from './components'
import foundations from './foundations'
import { styles } from './styles'
const direction = 'ltr'

const config = {
    useSystemColorMode: false,
    initialColorMode: 'light',
    cssVarPrefix: 'chakra',
}

export type AppTheme = typeof foundations

export const theme = extendTheme({
    direction,
    fonts: {
        heading: `Univers bold`,
        body: `Univers`,
    },
    ...foundations,
    config,
    styles,
    components,
})
