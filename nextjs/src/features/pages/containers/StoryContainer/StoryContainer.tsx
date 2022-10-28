import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { Loader } from '@/features/shared/components/Loading/Loading'
import { PageHeader } from '@/features/shared/components/PageHeader/PageHeader'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { Box, Grid, GridItem, useTheme } from '@chakra-ui/react'
import { useSize } from '@chakra-ui/react-use-size'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { StoryComponentsDynamicZone, StoryEntity } from 'src/generated/graphql'
import { StoryMeta } from '../../Meta/StoryMeta'
import { GetZoom5StoryQuery, useGetZoom5StoryTask } from '../../tasks/getZoom5StoryTask'

const DynamicRecordCloudsNoSsr = dynamic(() => import('../../../galaxy/RecordClouds/RecordClouds'), {
    ssr: false,
})

export const StoryContainer: React.FC = () => {
    const { t } = useTypeSafeTranslation('common')

    const { data, loading, error } = useGetZoom5StoryTask()

    if (loading) {
        return <Loader />
    }

    if (error) {
        return <p>{error.message}</p>
    }

    if (!data || !data.zoom5Story) {
        return <p>{t('somethingWentWrong')}</p>
    }

    return <Story data={data} />
}

const Story: React.FC<{ data: GetZoom5StoryQuery }> = ({ data }) => {
    const router = useRouter()
    const theme = useTheme()
    const graphRef = useRef<HTMLDivElement | null>(null)
    const sizes = useSize(graphRef)

    return (
        <>
            <Box backgroundColor="graph" height="800px" ref={graphRef} key={router.query.record as string}>
                {sizes?.height && sizes?.width && (
                    <DynamicRecordCloudsNoSsr
                        key={router.query.record as string}
                        zoomLevel5={data?.zoom5Story}
                        relations={data?.zoom5relations}
                        dimensions={sizes}
                    />
                )}
            </Box>

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
                                title={data.zoom5Story?.attributes?.title}
                                preface={data.zoom5Story?.attributes?.description ?? undefined}
                            />
                        </GridItem>
                        <GridItem area={'meta'}>
                            <StoryMeta story={data.zoom5Story as StoryEntity} />
                        </GridItem>
                    </Grid>
                </Box>
                <DynamicComponentRenderer
                    components={data.zoom5Story?.attributes?.components as StoryComponentsDynamicZone[]}
                />
            </Box>
        </>
    )
}
