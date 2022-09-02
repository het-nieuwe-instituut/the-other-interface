import { ComponentStyleConfig } from '@chakra-ui/react'
import { Link } from '../Link/Link'

export const Breadcrumb: ComponentStyleConfig = {
    parts: ['link'],
    baseStyle: () => ({
        link: {
            ...Link?.variants?.['decorative'],
        },
    }),
}
