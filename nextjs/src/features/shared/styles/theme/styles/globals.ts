import type { GlobalStyleProps } from '@chakra-ui/theme-tools'
import { mode } from '@chakra-ui/theme-tools'

export const global = (props: GlobalStyleProps) => ({
    body: {
        color: mode('black', 'white')(props),
        bg: mode('white', 'black')(props),
    },
    p: {
        paddingBottom: '1rem',
    }
})
