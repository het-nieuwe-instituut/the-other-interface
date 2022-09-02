import { ComponentStyleConfig } from '@chakra-ui/react'
import { Link } from '../Link/Link'

export const Breadcrumb: ComponentStyleConfig = {
    parts: ['link'],
    baseStyle: () => {
        return {
            link: {
                ...Link?.variants?.['decorative'],
                ...{
                    _focus: {
                        borderBottom: 'none',
                    },
                },
            },
        }
    },
}
