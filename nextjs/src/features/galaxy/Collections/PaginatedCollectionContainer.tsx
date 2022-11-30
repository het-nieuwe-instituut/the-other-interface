import LandingpageCollectionContext from '@/features/pages/containers/LandingpageCollectionContainer/LandingpageCollectionContext'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { randomNumberBetweenPoints } from '@/features/shared/utils/numbers'
import PaginationLeft from '@/icons/arrows/pagination-left.svg'
import PaginationRight from '@/icons/arrows/pagination-right.svg'
import { Box, Flex, Grid, GridItem, Img, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useContext, useId, useMemo } from 'react'
import {
    ZoomLevel4ParentType, ZoomLevel4Type,
} from 'src/generated/graphql'
import { LandingPageFilterCollectionQueryParams } from 'src/pages/landingpage/[slug]/[filter]/[collection]'
import { SupportedLandingPages } from '../FilterClouds/FilterCloudsContainer'
import { getGalaxyTypeByTranslationsKey } from '../utils/translations'
import { usePresenter } from './usePresenter'

type PaginatsedProps = {
    dimensions: {
        height: number
        width: number
    }
    type: SupportedLandingPages
}


export const PaginatedCollection: React.FunctionComponent<
    PaginatsedProps
> = props => {
    const { zoomLevel4: zoom4 } = useContext(LandingpageCollectionContext)
    const { dimensions } = props
    const router = useRouter()
    const queryParams = router.query as unknown as LandingPageFilterCollectionQueryParams
    const { t: tCommon } = useTypeSafeTranslation('common')
    const { width, height } = dimensions
    const svgWidth = width
    const svgHeight = height

    const id = useId().replaceAll(':', '')
    const items = useMemo(
        () =>
            zoom4?.zoomLevel4?.nodes?.map(node => ({
                ...node,
                randomBottom: randomShift(),
                randomLeft: randomShift(),
            })),
        [zoom4?.zoomLevel4?.nodes]
    )

    const { paginateBack, paginateNext, currentPage, svgRef } = usePresenter(
        (zoom4?.zoomLevel4 as ZoomLevel4ParentType)?.nodes ?? [],
        (zoom4?.zoomLevel4 as ZoomLevel4ParentType)?.total ?? 0,
        id,
        dimensions
    )

    const total =
        zoom4?.zoomLevel4?.total && zoom4?.zoomLevel4?.total >= 28 ? Math.ceil(zoom4?.zoomLevel4?.total / 28) : 1

    return (
        <Box overflow="hidden" height={svgHeight} width={svgWidth}>
            <svg width={svgWidth} height={svgHeight} ref={svgRef} viewBox={`0 0 ${1000} ${1000}`}>
                <Box
                    as={'foreignObject'}
                    width={1000}
                    height={500}
                    y={dimensions.height / 2 - 500 / 2}
                    overflow={'visible'}
                >
                    <Grid
                        templateColumns="repeat(6, 1fr)"
                        autoColumns={'100%'}
                        autoRows={'150px'}
                        gap={4}
                        width={'100%'}
                        height={'800px'}
                    >
                        <GridItem
                            w="100%"
                            h="100px"
                            colSpan={2}
                            display={'flex'}
                            justifyContent={'center'}
                            alignSelf={'center'}
                            p={1}
                            gridColumn={'3/5'}
                            gridRow={3}
                        >
                            <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                                <Text textStyle={'cloudText'}>
                                    {zoom4?.zoomLevel4.total}{' '}
                                    {tCommon(getGalaxyTypeByTranslationsKey(queryParams.slug))}
                                </Text>
                                <Text textStyle={'cloudText'} mb={4}>
                                    {router.query.collection}
                                </Text>
                                <Flex alignItems={'center'} gap={1}>
                                    {parseInt(currentPage as string) !== 1 ? (
                                        <Box as={'button'} pr="2" aria-label="left" onClick={paginateBack}>
                                            <PaginationLeft />
                                        </Box>
                                    ) : (
                                        <Box width={'30px'} />
                                    )}

                                    <Text textStyle={'cloudText'}>{`${currentPage}/${total}`}</Text>

                                    {parseInt(currentPage as string) !== total ? (
                                        <Box as="button" pl="2" aria-label="right" onClick={paginateNext}>
                                            <PaginationRight />
                                        </Box>
                                    ) : (
                                        <Box width={'30px'} />
                                    )}
                                </Flex>
                            </Flex>
                        </GridItem>
                        {(items || []).map((item, index) => {
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
                                    cursor="pointer"
                                >
                                    <svg width={140} height={90} style={{ overflow: 'visible' }}>
                                        <Box
                                            as={'foreignObject'}
                                            width={140}
                                            height={90}
                                            overflow={'visible'}
                                            className={`foreign-${id}`}
                                            opacity={0}
                                        >
                                            {item.title && (
                                                <Flex
                                                    flexDirection={'column'}
                                                    alignItems={'center'}
                                                    bgGradient="radial(50% 50% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)"
                                                    height={'90px'}
                                                    width={'140px'}
                                                >
                                                    {(item as ZoomLevel4Type)?.pidWorkURI && (
                                                        <Img src={(item as ZoomLevel4Type)?.pidWorkURI ?? 'broken'} width={'48px'} height={'35px'} />
                                                    )}

                                                    <Text
                                                        pt={(item as ZoomLevel4Type)?.pidWorkURI ? 1 : 5}
                                                        align={'center'}
                                                        overflowWrap={'normal'}
                                                        textStyle={'galaxyH4'}
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
        </Box>
    )
}

function randomShift() {
    return Math.floor(randomNumberBetweenPoints(-20, 20))
}
