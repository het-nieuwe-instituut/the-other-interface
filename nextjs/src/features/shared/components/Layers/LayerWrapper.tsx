'use client'
import { Box, Grid, GridItem, useTheme } from '@chakra-ui/react'
import React from 'react'
import SuspenseLoader from '../SuspenseLoader/SuspenseLoader'
import ErrorBoundaryWrapper from '../Error/ErrorBoundary/ErrorBoundary'

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
      backgroundColor={'ivoryAlpha.90'}
      width={'100%'}
    >
      <Box maxW={theme.breakpoints.xl} marginX={'auto'} paddingTop={9}>
        <Grid
          templateAreas={{
            lg: `"left right"
                 "bottom right"`,
            base: `"right"
                   "left"
                   "bottom"`,
          }}
          templateColumns={RightContent ? { lg: 'minmax(0, 1fr) 320px', base: `100% 100%` } : '1fr'}
          templateRows={{ lg: '1fr auto', base: `auto minmax(0, 1fr) auto` }}
          gap={RightContent ? '3.75rem' : '0'}
        >
          <SuspenseLoader>
            <GridItem px={6} area={'left'}>
              {LeftContent}
            </GridItem>
            <GridItem area={'bottom'}>{BottomContent}</GridItem>
          </SuspenseLoader>

          {RightContent && (
            <GridItem area={'right'} px={6}>
              {RightContent}
            </GridItem>
          )}
        </Grid>
      </Box>
    </Box>
  )
}
