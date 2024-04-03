import { ComponentStyleConfig } from '@chakra-ui/react'

import textStyles from '../../foundations/typography'

export const Table: ComponentStyleConfig = {
  parts: ['th, td', 'tr'],
  baseStyle: () => {
    return {
      tr: {
        color: '#000000 !important',
        backgroundImage: 'linear-gradient(to right, black 33%, rgba(255,255,255,0) 0%)',
        backgroundPosition: 'bottom',
        backgroundSize: '5px 2px',
        backgroundRepeat: 'repeat-x',
      },
      th: {
        pb: 0,
        pt: 0,
        paddingBottom: '0 !important',
        paddingTop: '0 !important',
        paddingLeft: '0 !important',
        paddingRight: '0 !important',
        padding: '0 0 0.625rem 0 !important',

        ...textStyles.micro,
      },

      td: {
        pb: 0,
        pt: 0,
        paddingBottom: '0 !important',
        paddingTop: '0 !important',
        paddingLeft: '0 !important',
        paddingRight: '0 !important',
        padding: '1.0rem 0 1.0rem 0 !important',

        ...textStyles.body,
        bc: 'unset',
      },
    }
  },
  defaultProps: {
    variant: 'unstyled',
  },
}

const TableComponents = {
  Table,
}
export default TableComponents
