import { ComponentStyleConfig } from '@chakra-ui/react'

export const Link: ComponentStyleConfig = {
    baseStyle: props => {
        return {
            underline: 'none',
            textDecoration: 'none',
            paddingBottom: '2px',
            borderBottom: '1.25px solid #CCCED0',
            position: 'relative',
            ...(props.variant === 'decorative' &&
                props['data-circle-color'] && {
                    paddingLeft: 18.65,
                }),

            _hover: {
                borderBottom: '1.25px solid #000000',
                underline: 'none',
                textDecoration: 'none',
            },

            _active: {
                borderBottom: '1.25px solid #000000',
                underline: 'none',
                textDecoration: 'none',
            },

            _focus: {
                background: '#CCCED0',
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
            color: '#000000',
            textShadow: '0px 0px 4px #CCCED0, 0px 0px 4px #CCCED0',
            border: 0,
            transition: 'none',

            _hover: {
                color: '#FFFFFF',
                textShadow: '0px 0px 4px #000000, 0px 0px 4px #000000',
                border: 0,
                underline: 'none',
                textDecoration: 'none',
            },

            _focus: {
                border: 0,
                background: 'linear-gradient(90deg, #FFA5A5 0%, rgba(255, 149, 238, 0.12) 100%)',
            },
        },
    },
}
