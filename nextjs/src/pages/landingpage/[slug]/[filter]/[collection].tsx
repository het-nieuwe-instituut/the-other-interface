import { SupportedLandingPages } from '@/features/galaxy/PaginatedFilterClouds/PaginatedFilterCloudsContainer'
import { Box, Flex, Grid, GridItem, Img, Text, useTheme } from '@chakra-ui/react'
import { useCallback, useState } from 'react'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { useRouter } from 'next/router'
import {
    LandingpageComponentsDynamicZone,
    useLandingpageBySlugQuery,
    useZoom4ArchivesQuery,
    useZoom4ObjectsQuery,
    useZoom4PeopleQuery,
    useZoom4PublicationsQuery,
    ZoomLevel4Type,
} from 'src/generated/graphql'
import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { PageHeader } from '@/features/shared/components/PageHeader/PageHeader'
import PaginationLeft from '@/icons/arrows/pagination-left.svg'
import PaginationRight from '@/icons/arrows/pagination-right.svg'

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
    const type = queryParams.slug
    const [height, setHeight] = useState(0)
    const [width, setWidth] = useState(0)

    const { t } = useTypeSafeTranslation('common')
    const theme = useTheme()

    const { data, loading, error } = useLandingpageBySlugQuery({
        variables: {
            locale: locale,
            slug: queryParams?.slug,
        },
    })

    const measuredRef = useCallback((node: HTMLDivElement) => {
        if (node !== null) {
            setHeight(node.getBoundingClientRect().height)
            setWidth(node.getBoundingClientRect().height)
        }
    }, [])

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
                backgroundColor="graph"
                height="800px"
                ref={measuredRef}
                padding={6}
            >
                {height && width && <PaginatedFilterContainer type={type} dimensions={{ height: 800, width: width }} />}
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

const useZoom4Query = {
    [SupportedLandingPages.Archives]: useZoom4ArchivesQuery,
    [SupportedLandingPages.Objects]: useZoom4ObjectsQuery,
    [SupportedLandingPages.People]: useZoom4PeopleQuery,
    [SupportedLandingPages.Publications]: useZoom4PublicationsQuery,
}

const variableType = {
    [SupportedLandingPages.Archives]: 'archivesFilters',
    [SupportedLandingPages.Objects]: 'objectsFilters',
    [SupportedLandingPages.People]: 'peopleFilters',

    [SupportedLandingPages.Publications]: 'publicationsFilters',
}

const variableFilters: {
    [key1: string]: {
        [key: string]: string
    }
} = {
    [SupportedLandingPages.Archives]: {
        archives: 'Archives',
        descriptionLevel: 'DescriptionLevel',
        relatedName: 'RelatedName',
        startDate: 'StartDate',
    },
    [SupportedLandingPages.Objects]: {
        endDate: 'EndDate',
        maker: 'Maker',
        material: 'Material',
        objectname: 'Objectname',
        perInst: 'PerInst',
        startDate: 'StartDate',
        subject: 'Subject',
        technique: 'Technique',
    },
    [SupportedLandingPages.People]: {
        birthDate: 'BirthDate',
        deathDate: 'DeathDate',
        nameType: 'NameType',
        period: 'Period',
        place: 'Place',
        profession: 'Profession',
    },
    [SupportedLandingPages.Publications]: {
        author: 'Author',
        geograficalKeyword: 'GeograficalKeyword',
        relatedPerInst: 'RelatedPerInst',
        subject: 'Subject',
        typeOfPublication: 'TypeOfPublication',
    },
}

type PaginatsedProps = {
    dimensions: {
        height: number
        width: number
    }
    type: SupportedLandingPages
}

const PaginatedFilterContainer: React.FunctionComponent<PaginatsedProps> = props => {
    const { type } = props
    const router = useRouter()
    const { t } = useTypeSafeTranslation('landingpage')

    const {
        data: zoom4,
        loading,
        error,
    } = useZoom4Query[type]({
        variables: {
            [variableType[type]]: {
                [variableFilters[type][router.query.filter as string]]: router.query.collection,
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

    console.log(router.query)

    return (
        <Grid templateColumns="repeat(6, 1fr)" gap={6} width={'100%'} pl={11} pr={12} pb={4} height={'800px'}>
            {(temp || []).map((item, index) => {
                if (index === 14) {
                    return (
                        <GridItem
                            w="100%"
                            h="100px"
                            key={`${item.title}-${index}`}
                            colSpan={2}
                            display={'flex'}
                            justifyContent={'center'}
                            alignSelf={'center'}
                        >
                            <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                                <Text textStyle={'cloudText'}>
                                    {zoom4?.zoomLevel4.total} {t(router.query.slug as SupportedLandingPages)}
                                </Text>
                                <Text textStyle={'cloudText'} mb={4}>
                                    {`by ${router.query.collection as string}`}
                                </Text>
                                <Flex alignItems={'center'} gap={1}>
                                    <Box as={'button'} pr="2" aria-label="left" onClick={() => console.log('cleck')}>
                                        <PaginationLeft />
                                    </Box>
                                    <Text textStyle={'cloudText'}>{`${1}/${1}`}</Text>
                                    <Box as="button" pl="2" aria-label="right" onClick={() => console.log('cleck')}>
                                        <PaginationRight />
                                    </Box>
                                </Flex>
                            </Flex>
                        </GridItem>
                    )
                }

                return (
                    <GridItem
                        w="100%"
                        key={`${item.title}-${index}`}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        position={'relative'}
                        top={`${randomShift()}px`}
                        left={`${randomShift()}px`}
                    >
                        {item.title && (
                            <Flex
                                flexDirection={'column'}
                                alignItems={'center'}
                                bgGradient="radial(50% 50% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)"
                                height={'90px'}
                                width={'90px'}
                            >
                                <Img
                                    src={
                                        'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg'
                                    }
                                    width={'48px'}
                                    height={'35px'}
                                />

                                <Text align={'center'} overflowWrap={'normal'} textStyle={'galaxyH4'} pt={1}>
                                    {item.title.length > 32 ? `${item.title.slice(0, 32)}...` : item.title}
                                </Text>
                            </Flex>
                        )}
                    </GridItem>
                )
            })}
        </Grid>
    )
}

function randomShift() {
    return Math.floor(Math.random() * 50)
}
