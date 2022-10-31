import Breadcrumbs, { BreadcrumbsRenderModes } from '@/features/galaxy/components/Breadcrumbs/Breadcrumbs'
import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { GalaxyFooter } from '@/features/shared/components/GalaxyWrapper/GalaxyFooter/GalaxyFooter'
import { GalaxyWrapper } from '@/features/shared/components/GalaxyWrapper/GalaxyWrapper'
import { PageHeader } from '@/features/shared/components/PageHeader/PageHeader'
import useScroll from '@/features/shared/hooks/useScroll'
import { Box, Grid, GridItem, useTheme } from '@chakra-ui/react'
import { useSize } from '@chakra-ui/react-use-size'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { StoryComponentsDynamicZone, StoryEntity } from 'src/generated/graphql'
import { StoryMeta } from '../../Meta/StoryMeta'
import { GetZoom5StoryQuery } from '../../tasks/getZoom5StoryTask'
import { ScrollToTop } from '../../utils/utils'

const DynamicRecordCloudsNoSsr = dynamic(() => import('../../../galaxy/RecordClouds/RecordClouds'), {
    ssr: false,
})

interface Props {
    data: GetZoom5StoryQuery
}

export const StoryContainer: React.FC<Props> = props => {
    return <Story data={props.data} />
}

const Story: React.FC<{ data: GetZoom5StoryQuery }> = ({ data }) => {
    const router = useRouter()
    const theme = useTheme()
    const graphRef = useRef<HTMLDivElement | null>(null)
    const sizes = useSize(graphRef)
    const { scrollPosition } = useScroll()

    return (
        <>
            <Breadcrumbs
                onWrapperClick={ScrollToTop}
                mode={scrollPosition >= 750 ? BreadcrumbsRenderModes.STICKY : BreadcrumbsRenderModes.DEFAULT}
            />
            <GalaxyWrapper renderBottom={() => <GalaxyFooter />}>
                <Box backgroundColor="graph" height="800px" ref={graphRef} key={router.query.record as string}>
                    {sizes?.height && sizes?.width && (
                        <DynamicRecordCloudsNoSsr
                            key={router.query.record as string}
                            zoomLevel5={data?.story}
                            relations={data?.relations}
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
                                title={data.story?.attributes?.title}
                                preface={data.story?.attributes?.description ?? undefined}
                            />
                        </GridItem>
                        <GridItem area={'meta'}>
                            <StoryMeta story={data.story as StoryEntity} />
                        </GridItem>
                    </Grid>
                </Box>
                <DynamicComponentRenderer
                    components={data.story?.attributes?.components as StoryComponentsDynamicZone[]}
                />
            </Box>
        </>
    )
}
