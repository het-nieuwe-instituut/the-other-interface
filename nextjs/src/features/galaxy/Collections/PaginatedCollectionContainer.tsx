import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import PaginationLeft from '@/icons/arrows/pagination-left.svg'
import PaginationRight from '@/icons/arrows/pagination-right.svg'
import { Box, Flex, Grid, GridItem, Img, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useId, useMemo } from 'react'
import {
    useZoom4ArchivesQuery,
    useZoom4ObjectsQuery,
    useZoom4PeopleQuery,
    useZoom4PublicationsQuery,
    ZoomLevel4ParentType,
} from 'src/generated/graphql'
import { Circle } from '../components/Circle'
import { SupportedLandingPages } from '../FilterClouds/FilterCloudsContainer'
import { usePresenter } from './usePresenter'

const useZoom4Query = {
    [SupportedLandingPages.Archives]: useZoom4ArchivesQuery,
    [SupportedLandingPages.Objects]: useZoom4ObjectsQuery,
    [SupportedLandingPages.People]: useZoom4PeopleQuery,
    [SupportedLandingPages.Publications]: useZoom4PublicationsQuery,
    [SupportedLandingPages.Stories]: useZoom4PublicationsQuery,
}

const variableType = {
    [SupportedLandingPages.Archives]: 'archivesFilters',
    [SupportedLandingPages.Objects]: 'objectsFilters',
    [SupportedLandingPages.People]: 'peopleFilters',
    [SupportedLandingPages.Publications]: 'publicationsFilters',
    [SupportedLandingPages.Stories]: '',
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

export const PaginatedCollectionContainer: React.FunctionComponent<PaginatsedProps> = props => {
    const { type } = props
    const router = useRouter()
    const { t } = useTypeSafeTranslation('landingpage')
    const { dimensions } = props
    const { width, height } = dimensions
    const svgWidth = width
    const svgHeight = height

    const id = useId().replaceAll(':', '')

    const {
        data: zoom4,
        loading,
        error,
    } = useZoom4Query[type]({
        variables: {
            [variableType[type]]: {
                [variableFilters[type][router.query.filter as string]]: router.query.collection,
            },
            page: parseInt((router.query.page as string) ?? '1'),
            pageSize: 28,
        },
    })
    const items = useMemo(
        () =>
            zoom4?.zoomLevel4?.nodes?.map((node, index) => ({
                ...node,
                randomBottom: randomShift(),
                randomLeft: randomShift(index),
            })),
        [zoom4?.zoomLevel4?.nodes]
    )

    const { paginateBack, paginateNext, currentPage, svgRef } = usePresenter(
        (zoom4?.zoomLevel4 as ZoomLevel4ParentType)?.nodes ?? [],
        (zoom4?.zoomLevel4 as ZoomLevel4ParentType)?.total ?? 0,
        id,
        dimensions
    )

    if (loading) {
        return <Text>Loading</Text>
    }

    if (error) {
        return <p>{error.message}</p>
    }

    return (
        <svg width={svgWidth} height={svgHeight} ref={svgRef} viewBox={`0 0 ${1000} ${1000}`}>
            <Circle />
            <Box
                as={'foreignObject'}
                width={1000}
                height={500}
                y={dimensions.height / 2 - 500 / 2}
                overflow={'visible'}
            >
                <Grid templateColumns="repeat(6, 1fr)" gap={4} width={'100%'} height={'800px'}>
                    {(items || []).map((item, index) => {
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
                                    p={1}
                                >
                                    <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                                        <Text textStyle={'cloudText'}>
                                            {zoom4?.zoomLevel4.total} {t(router.query.slug as SupportedLandingPages)}
                                        </Text>
                                        <Text textStyle={'cloudText'} mb={4}>
                                            {`by ${router.query.collection as string}`}
                                        </Text>
                                        <Flex alignItems={'center'} gap={1}>
                                            <Box as={'button'} pr="2" aria-label="left" onClick={paginateBack}>
                                                <PaginationLeft />
                                            </Box>
                                            <Text textStyle={'cloudText'}>{`${currentPage}/${Math.ceil(
                                                (zoom4?.zoomLevel4.total ?? 0) / 28
                                            )}`}</Text>
                                            <Box as="button" pl="2" aria-label="right" onClick={paginateNext}>
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
                                bottom={`${item.randomBottom}px`}
                                left={`${item.randomLeft}px`}
                            >
                                <svg width={140} height={90} style={{ overflow: 'visible' }}>
                                    <Box
                                        as={'foreignObject'}
                                        width={140}
                                        height={90}
                                        overflow={'visible'}
                                        className={`foreign-${id}`}
                                    >
                                        {item.title && (
                                            <Flex
                                                flexDirection={'column'}
                                                alignItems={'center'}
                                                bgGradient="radial(50% 50% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)"
                                                height={'90px'}
                                                width={'140px'}
                                            >
                                                <Img
                                                    src={
                                                        'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg'
                                                    }
                                                    width={'48px'}
                                                    height={'35px'}
                                                />

                                                <Text
                                                    align={'center'}
                                                    overflowWrap={'normal'}
                                                    textStyle={'galaxyH4'}
                                                    pt={1}
                                                >
                                                    {item.title.length > 32
                                                        ? `${item.title.slice(0, 32)}...`
                                                        : item.title}
                                                </Text>
                                            </Flex>
                                        )}
                                    </Box>
                                </svg>
                            </GridItem>
                        )
                    })}
                </Grid>
            </Box>
        </svg>
    )
}

function randomShift(index = 30) {
    if (index === 0 || index === 23) {
        return Math.floor(Math.random() * 50)
    }
    return Math.floor(Math.random() * 50)
}
