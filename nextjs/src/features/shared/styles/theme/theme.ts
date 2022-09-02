import { extendTheme } from '@chakra-ui/react'
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
    ...foundations,
    config,
    styles,
})
