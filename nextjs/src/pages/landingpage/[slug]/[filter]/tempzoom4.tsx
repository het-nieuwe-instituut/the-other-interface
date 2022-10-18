import { SupportedLandingPages } from '@/features/galaxy/PaginatedFilterClouds/PaginatedFilterCloudsContainer'
import { Box, Flex, Grid, GridItem, Img, Text, useTheme } from '@chakra-ui/react'
import { useRef } from 'react'
// import { useSize } from '@chakra-ui/react-use-size'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { useRouter } from 'next/router'
import {
    LandingpageComponentsDynamicZone,
    useLandingpageBySlugQuery,
    useZoom4Query,
    ZoomLevel4Type,
} from 'src/generated/graphql'
import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { PageHeader } from '@/features/shared/components/PageHeader/PageHeader'
// import dynamic from 'next/dynamic'
// import { addApolloState, getApolloClient } from '@/features/graphql/config/apollo'
// import { LandingpageContainer } from '@/features/pages/containers/LandingpageContainer/LandingpageContainer'
// import { preparePageConfiguration } from '@/features/shared/utils/pageConfiguration'
// import { GetServerSidePropsContext } from 'next'
// import { LandingpageBySlugDocument, LandingpageBySlugQuery } from 'src/generated/graphql'

export interface LandingPageQueryParams {
    slug: SupportedLandingPages
}

const Page = () => {
    return <TempZoom4Container />
}

export default Page

export const TempZoom4Container: React.FC = () => {
    const { locale, query } = useRouter()
    const queryParams = query as unknown as LandingPageQueryParams
    // const type = queryParams.slug
    const { t } = useTypeSafeTranslation('common')
    const theme = useTheme()

    const { data, loading, error } = useLandingpageBySlugQuery({
        variables: {
            locale: locale,
            slug: queryParams?.slug,
        },
    })
    const graphRef = useRef<HTMLDivElement | null>(null)
    // const sizes = useSize(graphRef)

    if (loading) {
        return <p>loading</p>
    }

    if (error) {
        return <p>{error.message}</p>
    }

    if (!data?.landingpages?.data.length) {
        return <p>{t('somethingWentWrong')}</p>
    }

    const landingpage = data?.landingpages?.data[0]
    return (
        <>
            <Box
                bgGradient="radial(50% 50% at 50% 50%, #B5FD99 0%, rgba(181, 253, 153, 0) 76.56%)"
                // backgroundColor="graph"
                height="800px"
                ref={graphRef}
                padding={6}
            >
                {/* {sizes?.height && sizes?.width && ( */}
                <PaginatedFilterContainer
                    //type={type}
                    dimensions={{ height: 800, width: 1189 }}
                />
                {/* )} */}
            </Box>
            <Box px={{ xl: 6, base: 0 }}>
                <Box backgroundColor={'white'} px={6} pt={6} maxW={theme.breakpoints.xl} marginX={'auto'} pb={1}>
                    <PageHeader
                        title={landingpage.attributes?.Title || undefined}
                        preface={landingpage.attributes?.Description || undefined}
                    />
                </Box>
                <DynamicComponentRenderer
                    components={
                        data?.landingpages?.data[0]?.attributes?.components as LandingpageComponentsDynamicZone[]
                    }
                />
            </Box>
        </>
    )
}

// const DynamicPaginatedFilterCloudsNoSsr = dynamic(() => import('./PaginatedFilterClouds'), {
//     ssr: false,
// })

// const useZoom3Query = {
//     [SupportedLandingPages.Archives]: useZoom3ArchivesQuery,
//     [SupportedLandingPages.Objects]: useZoom3ObjectsQuery,
//     [SupportedLandingPages.People]: useZoom3DPeopleQuery,
//     [SupportedLandingPages.Publications]: useZoom3DPublicationsQuery,
// }

// export const Zoom3QueryDocument = {
//     [SupportedLandingPages.Archives]: Zoom3ArchivesDocument,
//     [SupportedLandingPages.Objects]: Zoom3ObjectsDocument,
//     [SupportedLandingPages.People]: Zoom3DPeopleDocument,
//     [SupportedLandingPages.Publications]: Zoom3DPublicationsDocument,
// }

type PaginatsedProps = {
    dimensions: {
        height: number
        width: number
    }
    // type: SupportedLandingPages
}

const PaginatedFilterContainer: React.FunctionComponent<PaginatsedProps> = () => {
    // const router = useRouter()

    const {
        data: zoom4,
        loading,
        error,
    } = useZoom4Query({
        variables: {
            publicationsFilters: {
                TypeOfPublication: 'audio-visueel materiaal',
            },
            page: 1,
            pageSize: 28,
        },
    })

    if (loading) {
        return <Text>Loading</Text>
    }

    if (error) {
        return <p>{error.message}</p>
    }

    const temp = [...(zoom4?.zoomLevel4?.nodes as Array<ZoomLevel4Type>)]

    temp.splice(14, 0, {}) //TODO: Fix in pagination PR

    return (
        <Grid templateColumns="repeat(6, 1fr)" gap={6} width={'100%'} px={12} height={'800px'}>
            {(temp || []).map((item, index) => {
                if (index === 14) {
                    return <GridItem w="100%" h="100px" key={`${item.title}-${index}`} colSpan={2}></GridItem>
                }
                return (
                    <GridItem w="100%" h="100px" key={`${item.title}-${index}`}>
                        {item.title && (
                            <Flex flexDirection={'column'} alignItems={'center'}>
                                <Img
                                    src={
                                        'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg'
                                    }
                                    width={'48px'}
                                    height={'35px'}
                                />
                                <Text
                                    textStyle={'galaxyH4'}
                                    bgGradient="radial(50% 50% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)"
                                >
                                    {item.title}
                                </Text>
                            </Flex>
                        )}
                    </GridItem>
                )
            })}
        </Grid>
    )
}
