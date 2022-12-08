import { Circle } from '@/features/galaxy/components/Circle'
import { SupportedLandingPages } from '@/features/galaxy/FilterClouds/FilterCloudsContainer'
import { getGalaxyTypeByTranslationsKey } from '@/features/galaxy/utils/translations'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { Box, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { memo, useId } from 'react'
import { LandingPageQueryParams } from 'src/pages/landingpage/[slug]'
import { Dimensions, ZoomStates } from '../../types/galaxy'
import { FilterCloudItem } from './types'
import { usePresenter } from './usePresenter'

export type FilterCloudsProps = {
    dimensions: Dimensions
    filterCloudData: FilterCloudItem[]
    type: SupportedLandingPages
}

const FilterClouds: React.FunctionComponent<FilterCloudsProps> = props => {
    const router = useRouter()
    const queryParams = router.query as unknown as LandingPageQueryParams
    const id = useId().replaceAll(':', '')
    const {
        svgRef,
        clonedFilterData,
        zoomLevel,
        events: { handleZoomToZoom3 },
        dimensions: { height, width },
        type,
    } = usePresenter({ ...props, selector: id })
    const { t } = useTypeSafeTranslation('common')

    return (
        <Box overflow="hidden" height={height} width={width}>
            <svg width={width} height={height} ref={svgRef} viewBox={`0 0 ${width} ${height}`}>
                {clonedFilterData?.map((item, index, array) => {
                    return (
                        <Circle
                            key={`${index}-${array.length}`}
                            className={id}
                            defaultBackground={`levels.z2.backgrounds.${type}Filters.${item.id}`}
                            hoverBackground={`levels.z2.backgrounds.${type}Filters.${item.id}`}
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
                                onClick={() => handleZoomToZoom3(item)}
                            >
                                {ZoomStates.Zoom2ToZoom3 !== zoomLevel && (
                                    <Box>
                                        <Text width="12.5rem" textStyle={'cloudText'}>
                                            {t(getGalaxyTypeByTranslationsKey(queryParams.slug))}
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
            </svg>
        </Box>
    )
}

export const MemoizedFilterClouds = memo(FilterClouds)
export default MemoizedFilterClouds
