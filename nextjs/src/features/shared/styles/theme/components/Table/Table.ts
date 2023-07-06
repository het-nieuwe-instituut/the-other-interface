import { ComponentStyleConfig } from '@chakra-ui/react'

import textStyles from '../../foundations/typography'

export const Table: ComponentStyleConfig = {
  parts: ['th, td', 'tr'],
  baseStyle: () => {
    return {
      tr: {
        color: '#000000 !important',
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

        borderColor: '#000000',
        borderBottomColor: '#000000',
        borderBottomWidth: '0.078rem',
      },

      td: {
        pb: 0,
        pt: 0,
        paddingBottom: '0 !important',
        paddingTop: '0 !important',
        paddingLeft: '0 !important',
        paddingRight: '0 !important',
        padding: '1.25rem 0 1.25rem 0 !important',

        ...textStyles.body,

        borderColor: '#000000',
        borderBottomWidth: '0.078rem',
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
