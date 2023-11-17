'use client'
import { Box, Grid, GridItem, useTheme } from '@chakra-ui/react'
import { PageHeader } from '../../PageHeader/PageHeader'
import { StoryMeta } from '../../Meta/StoryMeta/StoryMeta'
import { usePresenter } from './usePresenter'

export const StoryLayer = () => {
  const theme = useTheme()
  const { story } = usePresenter()

  return (
    <Box position={'relative'} zIndex={2} backgroundColor={'ivoryAlpha.95'}>
      <Box maxW={theme.breakpoints.xl} marginX={'auto'} px={6}>
        <Grid
          pt={9}
          templateAreas={{
            lg: `"header meta"`,
            base: `"meta"
            "header"`,
          }}
          templateColumns={{ lg: '1fr 22.438rem', base: `100% 100%` }}
          templateRows={{ lg: '1fr', base: `auto minmax(0, 1fr)` }}
          gap={'3.75rem'}
        >
          <GridItem area={'header'}>
            <PageHeader title={story?.title} preface={story?.description} />
          </GridItem>
          <GridItem area={'meta'}>
            <StoryMeta story={story} />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  )
}
