import { ComponentStyleConfig } from '@chakra-ui/theme'
import { mode } from '@chakra-ui/theme-tools'

import colors from "../../foundations/colors"

export const Button: ComponentStyleConfig = {
    baseStyle: props => ({
        border: `1.25px solid ${colors.black}`,
        bordeRadius: '9px',
        color: `${colors.text.default.color}`,
        backgroundColor: `${colors.white} !important`,
        textAlign: 'cener',
        _hover: {
            color: `${colors.text.hover.color}`,
            backgroundColor: `${colors.black} !important`
        },
        _active: {
            color: `${colors.text.hover.color}`,
            backgroundColor: `${colors.black} !important`
        },
        _visited: {
            color: `${colors.text.default.color}`,
            backgroundColor: `${colors.white} !important`
        },
        _focus: {
            color: `${colors.text.default.color}`,
            backgroundColor: `${colors.other} !important`
        }
    }),
}
