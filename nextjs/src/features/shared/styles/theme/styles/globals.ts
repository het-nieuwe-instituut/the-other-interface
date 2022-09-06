import type { GlobalStyleProps } from '@chakra-ui/theme-tools'
import { mode } from '@chakra-ui/theme-tools'

export const global = (props: GlobalStyleProps) => ({
    body: {
        background: 'none'
    },
    p: {
        paddingBottom: '1rem',
    }
})
