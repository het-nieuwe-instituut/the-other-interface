import { GalaxyInterface } from '@/features/galaxyInterface/GalaxyInterface/GalaxyInterface'
import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { PageHeader } from '@/features/shared/components/PageHeader/PageHeader'
import { Box, Grid, GridItem, useTheme } from '@chakra-ui/react'

import { StoryBySlugQuery, StoryComponentsDynamicZone, StoryEntity } from 'src/generated/graphql'

import { StoryMeta } from '../../Meta/StoryMeta'
import { GetZoom5StoryQuery } from '../../tasks/getZoom5StoryTask'
import { SupportedQuerys } from '../../tasks/zoom5Config'
import { RecordProvider } from '../RecordContainer/RecordContext'

interface Props {
  record: GetZoom5StoryQuery['story']
  story: NonNullable<NonNullable<NonNullable<StoryBySlugQuery>['stories']>['data']>[0] | undefined
  type: SupportedQuerys
}

export const StoryContainer: React.FC<Props> = props => {
  return (
    <RecordProvider type={props.type} zoomLevel5={{ zoom5detail: props?.record } ?? null}>
      <Story story={props.story} />
    </RecordProvider>
  )
}

interface PageProps {
  story: NonNullable<NonNullable<NonNullable<StoryBySlugQuery>['stories']>['data']>[0] | undefined
}

const Story = (props: PageProps) => {
  const theme = useTheme()
  return (
    <>
      <GalaxyInterface />

      <Box px={{ xl: 6, base: 0 }} position={'relative'} zIndex={2} backgroundColor={'white'}>
        <Box backgroundColor={'white'} px={6} maxW={theme.breakpoints.xl} marginX={'auto'}>
          <Grid
            pt={6}
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
              <PageHeader
                title={props.story?.attributes?.title}
                preface={props.story?.attributes?.description ?? undefined}
              />
            </GridItem>
            <GridItem area={'meta'}>
              <StoryMeta story={props.story as StoryEntity} />
            </GridItem>
          </Grid>
        </Box>
        <DynamicComponentRenderer
          components={props.story?.attributes?.components as StoryComponentsDynamicZone[]}
        />
      </Box>
    </>
  )
}
