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
    <Box
      px={{ xl: 6, base: 0 }}
      position={'relative'}
      zIndex={2}
      backgroundColor={'ivoryAlpha.95'}
      width={'100%'}
    >
      <Box maxW={theme.breakpoints.xl} marginX={'auto'} paddingTop={9}>
        <Grid
          templateAreas={{
            lg: `"left right"`,
            base: `"right"
                  "left"`,
          }}
          templateColumns={RightContent ? { lg: 'minmax(0, 1fr) 320px', base: `100% 100%` } : '1fr'}
          templateRows={{ lg: '1fr', base: `auto minmax(0, 1fr)` }}
          gap={RightContent ? '3.75rem' : '0'}
        >
          <GridItem area={'left'}>{LeftContent}</GridItem>
          {RightContent && <GridItem area={'right'}>{RightContent}</GridItem>}
        </Grid>
      </Box>
      {BottomContent}
    </Box>
  )
}
