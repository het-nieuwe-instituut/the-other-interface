import colors from '../../foundations/colors'
import textStyles from '../../foundations/typography'

// any because chakrui typescript failed here
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Button: any = {
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
  }),
  variants: {
    large: {
      fontSize: '1.188rem',
      width: '100%',
      height: ['6.25rem', '7.5rem'],
    },
  },
  defaultProps: {
    variant: 'unstyled',
  },
}
