/* eslint-disable @typescript-eslint/no-explicit-any */
import { SupportedLandingPages } from '@/features/galaxy/PaginatedFilterClouds/PaginatedFilterCloudsContainer'
import { getGalaxyTypeByTranslationsKey } from '@/features/galaxy/utils/translations'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import PaginationLeft from '@/icons/arrows/pagination-left.svg'
import PaginationRight from '@/icons/arrows/pagination-right.svg'
import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { memo, useId } from 'react'
import { LandingPageFilterCollectionQueryParams } from 'src/pages/landingpage/[slug]/[filter]/[collection]'
import { CollectionCloudItem } from './types'
import { usePresenter } from './usePresenter'

export interface PaginatedCollectionProps {
    dimensions: {
        height: number
        width: number
    }
    type: SupportedLandingPages
    paginatedCollectionData: CollectionCloudItem[]
    total: number
}

export const PaginatedCollection: React.FunctionComponent<PaginatedCollectionProps> = props => {
    const router = useRouter()
    const queryParams = router.query as unknown as LandingPageFilterCollectionQueryParams
    const { t: tCommon } = useTypeSafeTranslation('common')

    const id = useId().replaceAll(':', '')
    const {
        paginateBack,
        paginateNext,
        currentPage,
        svgRef,
        dimensions: { height, width },
        total,
        paginatedCollectionData,
    } = usePresenter({ ...props, selector: id })

    return (
        <Box overflow="hidden" height={height} width={width}>
            <svg width={width} height={height} ref={svgRef} viewBox={`0 0 ${1000} ${1000}`}>
                <Box as={'foreignObject'} width={1000} height={500} y={height / 2 - 500 / 2} overflow={'visible'}>
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
                                                    {/* TODO: uncomment when image urls are fixed */}
                                                    {/* {item.firstImage && (
                                                        <Img src={item.firstImage} width={'48px'} height={'35px'} />
                                                    )} */}

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
