import { ComponentStyleConfig } from '@chakra-ui/theme'
import { mode } from '@chakra-ui/theme-tools'

export const Button: ComponentStyleConfig = {
    // 1. We can update the base styles
    baseStyle: props => ({
        border: '1.25px solid #000000',
        bordeRadius: '9px',
        color: '#000000',
        backgroundColor: '#FFFFFF',
        textAlign: 'cener',
        _hover: {
            backgroundColor: '#000000',
            color: '#FFFFFF',
            border: '1.25px solid #000000'
        }
    }),
}
