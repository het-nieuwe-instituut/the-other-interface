import { Circle } from '@/features/galaxy/components/Circle'
import { SupportedLandingPages } from '@/features/galaxy/FilterClouds/FilterCloudsContainer'
import { getGalaxyTypeByTranslationsKey } from '@/features/galaxy/utils/translations'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { useStore } from '@/features/shared/hooks/useStore'
import { Box, Button, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { memo, useId } from 'react'
import { LandingPageQueryParams } from 'src/pages/landingpage/[slug]'
import { galaxyInterfaceActions } from '../../stores/galaxyInterface.store'
import { Dimensions, ZoomStates } from '../../types/galaxy'
import { zoomByD3Data } from '../../utils/navigation'
import { FilterCloudItem } from './types'
import { usePresenter } from './usePresenter'

type Props = {
    dimensions: Dimensions
    filterCloudData: FilterCloudItem[]
    type: SupportedLandingPages
}

const FilterClouds: React.FunctionComponent<Props> = props => {
    const store = useStore()
    const { dimensions, type } = props
    const { width, height } = dimensions
    const svgWidth = width ?? 0
    const svgHeight = height ?? 0
    const router = useRouter()
    const queryParams = router.query as unknown as LandingPageQueryParams
    const id = useId().replaceAll(':', '')
    const { svgRef, clonedFilterData, zoomLevel } = usePresenter(dimensions, id, props.filterCloudData)
    const { t } = useTypeSafeTranslation('common')

    return (
        <Box overflow="hidden" height={svgHeight} width={svgWidth}>
            <Button
                onClick={() =>
                    store.dispatch(
                        galaxyInterfaceActions.setActiveZoom({
                            activeZoom: ZoomStates.Zoom2ToZoom1,
                        })
                    )
                }
            >
                go back
            </Button>
            <svg
                width={svgWidth}
                height={svgHeight}
                ref={svgRef}
                viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
            >
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
                                onClick={() => zoomByD3Data({ dimensions, store, d3x: item.x, d3y: item.y })}
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
