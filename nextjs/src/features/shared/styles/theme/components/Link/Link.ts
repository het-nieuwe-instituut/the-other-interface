import { ComponentStyleConfig } from '@chakra-ui/react'

import colors from '../../foundations/colors'
import textStyles from '../../foundations/typography'

export const Link: ComponentStyleConfig = {
  baseStyle: props => {
    return {
      underline: 'none',
      textDecoration: 'none',
      paddingBottom: '2px',
      borderBottom: `1.25px solid ${colors.other}`,
      position: 'relative',
      ...(props.variant === 'decorative' &&
        props['data-circle-color'] && {
          paddingLeft: 18.65,
        }),

      _hover: {
        borderBottom: `1.25px solid ${colors.black}`,
        underline: 'none',
        textDecoration: 'none',
      },

      _active: {
        borderBottom: `1.25px solid ${colors.black}`,
        underline: 'none',
        textDecoration: 'none',
      },

      _focus: {
        background: `${colors.other}`,
        underline: 'none',
        textDecoration: 'none',
      },

      _before: {
        ...(props.variant === 'decorative' &&
          props['data-circle-color'] && {
            content: '""',
            color: props['data-circle-color'],
            left: 0,
            top: '1px',
            position: 'absolute',
            width: 18.65,
            height: 18.65,
            background:
              'radial-gradient(50% 50% at 50% 50%, currentColor 0%, rgba(255, 149, 238, 0.12) 78.13%, transparent 100%)',
            mixBlendMode: 'normal',
          }),
      },
    }
  },

  variants: {
    external: {
      cursor: 'alias',
    },
    decorative: {
      fontWeight: 400,
      color: `${colors.text.default.color}`,
      textShadow: `0px 0px 4px ${colors.text.default.shadow}, 0px 0px 4px ${colors.text.default.shadow}`,
      border: 0,
      transition: 'none',

      _hover: {
        color: `${colors.text.hover.color}`,
        textShadow: `0px 0px 4px ${colors.text.hover.shadow} 0px 0px 4px ${colors.text.hover.shadow}`,
        border: 0,
        underline: 'none',
        textDecoration: 'none',
      },

      _focus: {
        border: 0,
        background: 'linear-gradient(90deg, #FFA5A5 0%, rgba(255, 149, 238, 0.12) 100%)',
      },
    },
    navigation: {
      color: `${colors.pinkAlpha['100']}`,
      underline: 'none',
      textDecoration: 'none',
      borderBottom: 'none',

      _hover: {
        color: `${colors.pinkAlpha['60']}`,
        underline: 'none',
        textDecoration: 'none',
        borderBottom: 'none',
      },

      _active: {
        color: `${colors.pinkAlpha['100']}`,
        underline: 'none',
        textDecoration: 'none',
        borderBottom: 'none',
      },

      _visited: {
        color: `${colors.pinkAlpha['100']}`,
        underline: 'none',
        textDecoration: 'none',
        borderBottom: 'none',
      },

      _focus: {
        underline: 'none',
        textDecoration: 'none',
        borderBottom: 'none',
        color: `${colors.blueAlpha['100']}!important`,
        backgroundColor: `${colors.pinkAlpha['100']}`,
      },

      _disabled: {
        color: `${colors.blueAlpha['50']} !important`,
      },
    },
    navigationOnTopOfTheGalaxy: {
      color: `${colors.blueAlpha['100']}`,
      underline: 'none',
      textDecoration: 'none',
      borderBottom: 'none',
      outline: 'none !important',

      _hover: {
        color: `${colors.blueAlpha['50']}`,
        underline: 'none',
        textDecoration: 'none',
        borderBottom: 'none',
      },

      _active: {
        color: `${colors.blueAlpha['100']}`,
        underline: 'none',
        textDecoration: 'none',
        borderBottom: 'none',
      },

      _visited: {
        color: `${colors.blueAlpha['100']}`,
        underline: 'none',
        textDecoration: 'none',
        borderBottom: 'none',
      },

      _focus: {
        underline: 'none !important',
        textDecoration: 'none !important',
        border: 'none !important',
        color: `${colors.blueAlpha['100']}!important`,
        backgroundColor: `${colors.pinkAlpha['100']}`,
        outline: 'none !important',
      },

      _disabled: {
        color: `${colors.pinkAlpha['60']} !important`,
      },
    },
    navigationDecorative: {
      color: `${colors.pinkAlpha['100']} !important`,
      textUnderlineOffset: '0.25em',
      textDecoration: 'underline',
      textStyle: `${textStyles.socialLarge.navigation}`,
      underline: 'none',
      borderBottom: 'none',

      _hover: {
        color: `${colors.pinkAlpha['60']} !important`,
        borderBottom: 'none',
        textUnderlineOffset: '0.25em',
        textDecoration: 'underline',
      },
      _active: {
        color: `${colors.pinkAlpha['60']} !important`,
        borderBottom: 'none',
        textUnderlineOffset: '0.25em',
        textDecoration: 'underline',
      },
      _focus: {
        color: `${colors.blueAlphaNew['100']} !important`,
        backgroundColor: `${colors.pinkAlpha['100']} !important`,
        borderBottom: 'none',
        textUnderlineOffset: '0.25em',
        textDecoration: 'underline',
      },
    },
  },
}
