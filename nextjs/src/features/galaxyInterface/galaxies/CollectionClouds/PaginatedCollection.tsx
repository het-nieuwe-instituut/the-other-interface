/* eslint-disable @typescript-eslint/no-explicit-any */
import { SupportedLandingPages } from '@/features/galaxy/PaginatedFilterClouds/PaginatedFilterCloudsContainer'
import { getGalaxyTypeByTranslationsKey } from '@/features/galaxy/utils/translations'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import PaginationLeft from '@/icons/arrows/pagination-left.svg'
import PaginationRight from '@/icons/arrows/pagination-right.svg'
import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { memo, useId } from 'react'
import { LandingPageFilterCollectionQueryParams } from 'src/pages/landingpage/[slug]/[filter]/[collection]'
import { Cloud } from '../../components/Cloud'
import { CollectionCloudItem } from './types'
import { usePresenter } from './usePresenter'

export interface PaginatedCollectionProps {
    dimensions: {
        height: number
        width: number
    }
    type: SupportedLandingPages
    filter: string
    collection: string
    paginatedCollectionData: CollectionCloudItem[]
    total: number
    page: number
}

export const PaginatedCollection: React.FunctionComponent<PaginatedCollectionProps> = props => {
    const router = useRouter()
    const queryParams = router.query as unknown as LandingPageFilterCollectionQueryParams
    const { t: tCommon } = useTypeSafeTranslation('common')
    
    const hideImage = (image: HTMLImageElement) => {
        image.style.display = 'none'
    }

    const id = useId().replaceAll(':', '')
    const {
        paginateBack,
        paginateNext,
        currentPage,
        svgRef,
        dimensions: { height, width },
        total,
        paginatedCollectionData,
        type,
        events: { zoomToZoom5 },
    } = usePresenter({ ...props, selector: id })
    const startY = height / 2 - 500 / 2
    return (
        <Box overflow="hidden" height={height} width={width}>
            <svg
                width={width}
                height={height}
                ref={svgRef}
                viewBox={`0 0 ${1000} ${1000}`}
                style={{ overflow: 'visible' }}
            >
                <Cloud
                    x={-250}
                    y={-250}
                    defaultBackground={`levels.z1.${type}.hover1`}
                    hoverBackground={`levels.z1.${type}.hover1`}
                    pointerEvents={'none'}
                    height={1500}
                    width={1500}
                />
                <Box as={'foreignObject'} width={1000} height={500} y={startY} overflow={'visible'}>
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
                                    {total} {tCommon(getGalaxyTypeByTranslationsKey(queryParams.slug))}
                                </Text>
                                <Text textStyle={'cloudText'} mb={4}>
                                    {router.query.collection}
                                </Text>
                                <Flex alignItems={'center'} gap={1}>
                                    {currentPage !== 1 ? (
                                        <Box as={'button'} pr="2" aria-label="left" onClick={paginateBack}>
                                            <PaginationLeft />
                                        </Box>
                                    ) : (
                                        <Box width={'30px'} />
                                    )}

                                    <Text textStyle={'cloudText'}>{`${currentPage}/${total}`}</Text>

                                    {currentPage !== total ? (
                                        <Box as="button" pl="2" aria-label="right" onClick={paginateNext}>
                                            <PaginationRight />
                                        </Box>
                                    ) : (
                                        <Box width={'30px'} />
                                    )}
                                </Flex>
                            </Flex>
                        </GridItem>
                        {(paginatedCollectionData || []).map((item, index) => {
                            return (
                                <GridItem
                                    w="100%"
                                    key={`${item.title}-${index}`}
                                    display={'flex'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    position={'relative'}
                                    bottom={`${item.marginBottom}px`}
                                    left={`${item.marginLeft}px`}
                                    cursor="pointer"
                                >
                                    <svg width={140} height={90} style={{ overflow: 'visible' }}>
                                        <Box
                                            as={'foreignObject'}
                                            width={140}
                                            height={90}
                                            overflow={'visible'}
                                            className={`foreign-${id}`}
                                            onClick={(e: unknown) => zoomToZoom5(e as MouseEvent, item)}
                                        >
                                            {item.title && (
                                                <Flex
                                                    flexDirection={'column'}
                                                    alignItems={'center'}
                                                    bgGradient="radial(50% 50% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)"
                                                    height={'90px'}
                                                    width={'140px'}
                                                >
                                                    
                                                    {item.firstImage && (
                                                        <Image src={item.firstImage} alt={''} width={'48px'} height={'35px'} ignoreFallback onError={(e) => hideImage(e?.target as HTMLImageElement)} />
                                                    )}
                                                    <Text
                                                        // TODO: uncomment when image urls are fixed
                                                        // pt={item.firstImage ? 1 : 5}
                                                        pt={5}
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

const MemoizedPaginatedCollection = memo(PaginatedCollection)
export default MemoizedPaginatedCollection
