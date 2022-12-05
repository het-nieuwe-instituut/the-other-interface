import { Circle } from '@/features/galaxy/components/Circle'
import { SupportedLandingPages } from '@/features/galaxy/PaginatedFilterClouds/PaginatedFilterCloudsContainer'
import { getGalaxyTypeByTranslationsKey } from '@/features/galaxy/utils/translations'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { useStore } from '@/features/shared/hooks/useStore'
import PaginationLeft from '@/icons/arrows/pagination-left.svg'
import PaginationRight from '@/icons/arrows/pagination-right.svg'
import { Box, Flex, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { memo, useId } from 'react'
import { LandingPageFilterQueryParams } from 'src/pages/landingpage/[slug]/[filter]'
import { galaxyInterfaceActions } from '../../stores/galaxyInterface.store'
import { Dimensions, ZoomStates } from '../../types/galaxy'
import { PaginatedCloudItem } from './types'
import { getId, usePresenter } from './usePresenter'

export interface PaginatedFilterCloudsProps {
    paginatedCloudItems: PaginatedCloudItem[]
    total: number
    dimensions: Dimensions
    type: SupportedLandingPages
    filter: string
    page: number
}

const PaginatedFilterClouds: React.FunctionComponent<PaginatedFilterCloudsProps> = props => {
    const router = useRouter()
    const queryParams = router.query as unknown as LandingPageFilterQueryParams
    const id = useId().replaceAll(':', '')
    const store = useStore()
    const {
        svgRef,
        dimensions,
        backgrounds,
        paginateBack,
        paginateNext,
        total,
        totalPages,
        currentPage,
        paginatedCloudItems,
        conditionals,
        type,
        filter,
    } = usePresenter({ ...props, selector: id })
    const { width, height } = dimensions
    const { t: tCommon } = useTypeSafeTranslation('common')
    const { t: tLandingpage } = useTypeSafeTranslation('landingpage')

    return (
        <Box overflow="hidden" height={height} width={width}>
            <svg
                width={width}
                height={height}
                ref={svgRef}
                viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
                style={{ overflow: 'visible' }}
            >
                {paginatedCloudItems.map((item, index, array) => {
                    const backgroundItem = backgrounds.find(background => background.id === getId(item))

                    return (
                        <Circle
                            key={`${index}-${array.length}`}
                            className={id}
                            defaultBackground={backgroundItem?.background}
                            hoverBackground={backgroundItem?.background}
                        >
                            <Box
                                as="button"
                                width="100%"
                                height="100%"
                                borderRadius="100%"
                                zIndex="100"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                onClick={(e: unknown) => {
                                    const event = e as MouseEvent
                                    const width = dimensions.width ?? 0
                                    const height = dimensions.height ?? 0

                                    const x = (event.clientX ?? 0) - width / 2
                                    const y = (event.clientY ?? 0) - height / 2

                                    store.dispatch(
                                        galaxyInterfaceActions.setActiveZoom({
                                            activeZoom: ZoomStates.Zoom3ToZoom4,
                                            activeZoomData: {
                                                to: {
                                                    translateX: -x,
                                                    translateY: -y,
                                                },
                                            },
                                            params: {
                                                slug: type,
                                                filter: filter,
                                                collection: item.name,
                                            },
                                        })
                                    )
                                }}
                            >
                                {conditionals.shouldDisplayText && (
                                    <Box>
                                        <Text width="12.5rem" textStyle={'cloudText'}>
                                            {tCommon(getGalaxyTypeByTranslationsKey(queryParams.slug))}
                                        </Text>
                                        <Text width="12.5rem" textStyle={'cloudText'}>
                                            {item.name}
                                        </Text>
                                    </Box>
                                )}
                            </Box>
                        </Circle>
                    )
                })}
                <Circle className={'collision'}>
                    <Flex
                        width="100%"
                        height="100%"
                        borderRadius="100%"
                        zIndex="100"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                            <Text textStyle={'cloudText'} mb={4}>
                                {total} {tLandingpage(router.query.slug as SupportedLandingPages)}
                            </Text>
                            <Flex alignItems={'center'} gap={1}>
                                <Box as={'button'} pr="2" aria-label="left" onClick={paginateBack}>
                                    <PaginationLeft />
                                </Box>
                                <Text textStyle={'cloudText'}>{`${currentPage}/${totalPages}`}</Text>
                                <Box as="button" pl="2" aria-label="right" onClick={paginateNext}>
                                    <PaginationRight />
                                </Box>
                            </Flex>
                        </Flex>
                    </Flex>
                </Circle>
            </svg>
        </Box>
    )
}

export const MemoizedPaginatedFilterClouds = memo(PaginatedFilterClouds)
export default MemoizedPaginatedFilterClouds
