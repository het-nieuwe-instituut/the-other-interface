import { Grid, GridProps } from '@chakra-ui/react'

import React from 'react'

type Props = {
  children: React.ReactNode
  css?: GridProps['css']
}

export const RecordsGrid: React.FC<Props> = ({ children, css }) => {
  return (
    <Grid
      position="absolute"
      w="96vw"
      h={`calc(80% - 1.7rem - 60px)`} // considering fixed height of galaxy footer
      top="7%"
      left="2vw"
      right="2vw"
      templateColumns="repeat(4, 1fr)"
      templateRows="repeat(3, 1fr)"
      zIndex={100}
      css={css}
    >
      {children}
    </Grid>
  )
}
