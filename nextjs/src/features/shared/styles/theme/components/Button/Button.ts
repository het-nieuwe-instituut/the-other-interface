import colors from '../../foundations/colors'
import textStyles from '../../foundations/typography'

// any because chakrui typescript failed here
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Button: any = {
    parts: ['icon'],
    baseStyle: () => ({
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

        icon: {},
    }),
    defaultProps: {
        variant: 'unstyled',
    },
}
