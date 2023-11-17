'use client'
import { Box, Grid, GridItem, useTheme } from '@chakra-ui/react'

interface Props {
  LeftContent: React.ReactNode
  RightContent?: React.ReactNode
  BottomContent?: React.ReactNode
}

export const LayerWrapper: React.FC<Props> = ({ LeftContent, RightContent, BottomContent }) => {
  const theme = useTheme()

  return (
    <Box px={{ xl: 6, base: 0 }} position={'relative'} zIndex={2} backgroundColor={'ivoryAlpha.95'}>
      <Box maxW={theme.breakpoints.xl} marginX={'auto'} paddingTop={6}>
        <Grid
          pt={6}
          templateColumns={RightContent ? { lg: '1fr 22.438rem', base: `100% 100%` } : '1fr'}
          templateRows={{ lg: '1fr', base: `auto minmax(0, 1fr)` }}
          gap={'3.75rem'}
        >
          <GridItem>{LeftContent}</GridItem>
          {RightContent && <GridItem>{RightContent}</GridItem>}
        </Grid>
      </Box>
      {BottomContent}
    </Box>
  )
}
