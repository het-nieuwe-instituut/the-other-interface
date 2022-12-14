import Breadcrumbs, { BreadcrumbsRenderModes } from '@/features/galaxy/components/Breadcrumbs/Breadcrumbs'
import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { GalaxyFooter } from '@/features/shared/components/GalaxyWrapper/GalaxyFooter/GalaxyFooter'
import { GalaxyTopRight } from '@/features/shared/components/GalaxyWrapper/GalaxyTopRight/GalaxyTopRight'
import { GalaxyWrapper } from '@/features/shared/components/GalaxyWrapper/GalaxyWrapper'
import { PageHeader } from '@/features/shared/components/PageHeader/PageHeader'
import useScroll from '@/features/shared/hooks/useScroll'
import { Box, Grid, GridItem, useTheme } from '@chakra-ui/react'
import { useSize } from '@chakra-ui/react-use-size'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { StoryBySlugQuery, StoryComponentsDynamicZone, StoryEntity } from 'src/generated/graphql'
import RecordClouds from '../../../galaxy/RecordClouds/RecordClouds'
import { StoryMeta } from '../../Meta/StoryMeta'
import { GetZoom5StoryQuery } from '../../tasks/getZoom5StoryTask'
import { ScrollToTop } from '../../utils/utils'
import { RecordProvider } from '../RecordContainer/RecordContext'


interface Props {
    record: GetZoom5StoryQuery['story']
    story: NonNullable<NonNullable<NonNullable<StoryBySlugQuery>['stories']>['data']>[0] | undefined
}

export const StoryContainer: React.FC<Props> = props => {
    return (
        <RecordProvider zoomLevel5={{zoom5detail: props?.record} ?? null} >
             <Story story={props.story} />
        </RecordProvider>
    )
}

interface PageProps {
    story: NonNullable<NonNullable<NonNullable<StoryBySlugQuery>['stories']>['data']>[0] | undefined
}

const Story = (props: PageProps) => {
    const router = useRouter()
    const theme = useTheme()
    const graphRef = useRef<HTMLDivElement | null>(null)
    const sizes = useSize(graphRef)
    const { scrollPosition } = useScroll()

    return (
        <Box>
            <Breadcrumbs
                onWrapperClick={ScrollToTop}
                mode={scrollPosition >= 750 ? BreadcrumbsRenderModes.STICKY : BreadcrumbsRenderModes.DEFAULT}
            />
            <GalaxyWrapper renderTopRight={() => <GalaxyTopRight />} renderBottom={() => <GalaxyFooter />}>
                <Box backgroundColor="graph" height="800px" ref={graphRef} key={router.query.record as string}>
                    {sizes?.height && sizes?.width && (
                        <RecordClouds
                            key={router.query.record as string}
                            dimensions={sizes}
                        />
                    )}
                </Box>
            </GalaxyWrapper>

            <Box px={{ xl: 6, base: 0 }}>
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
            </Box>
            <DynamicComponentRenderer
                components={props.story?.attributes?.components as StoryComponentsDynamicZone[]}
            />
        </Box>
    )
}
