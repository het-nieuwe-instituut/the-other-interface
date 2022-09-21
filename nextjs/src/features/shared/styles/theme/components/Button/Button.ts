import { ComponentStyleConfig } from '@chakra-ui/theme'

import colors from '../../foundations/colors'
import textStyles from '../../foundations/typography'

export const Button: ComponentStyleConfig = {
    baseStyle: () => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: `1.25px solid ${colors.black}`,
        bordeRadius: '9px',

        backgroundColor: `${colors.white}`,

        h: 'unset !important',
        height: 'unset !important',
        padding: 0,
        pt: '10px',
        pl: '15px',
        pb: '10px',
        pr: '15px',

        ...textStyles.micro,

        _visited: {
            backgroundColor: `${colors.white}t`,
        },
        _hover: {
            color: `${colors.text.hover.color}`,
            backgroundColor: `${colors.black}`,
        },
        _active: {
            color: `${colors.text.hover.color}`,
            backgroundColor: `${colors.black}`,
        },
        _focus: {
            color: `${colors.text.default.color}`,
            backgroundColor: `${colors.other}`,
        },
    }),
    defaultProps: {
        variant: 'unstyled',
    },
}
