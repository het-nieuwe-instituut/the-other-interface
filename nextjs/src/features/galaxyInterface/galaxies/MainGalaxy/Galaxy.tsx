import { useLooseTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { Box, Flex, Text } from '@chakra-ui/react'
import React, { forwardRef, useId } from 'react'
import { Circle } from '../../../galaxy/components/Circle'
import { GalaxyShadowBackground } from '../../../galaxy/components/GalaxyShadowBackground'
import { Dimensions } from '../../../galaxy/types/galaxy'
import { ZoomStates } from '../../types/galaxy'
import { mapArchiveComponent } from './mappers/mapArchiveComponent'
import { CloudItem, StoriesItem } from './types'

import { usePresenter } from './usePresenter'

export interface MainGalaxyProps {
    dimensions: Dimensions
    cloudData: CloudItem[]
    storiesData: StoriesItem[]
    archiveComponent: ReturnType<typeof mapArchiveComponent>
}

export interface InstancesPerClass {
    instance: string
    title: string
    parent: string
}

export const GALAXY_BASE = 800
const MainGalaxyProps: React.FC<MainGalaxyProps> = props => {
    const { t } = useLooseTypeSafeTranslation('homepage')
    const id = useId().replaceAll(':', '')
    const {
        svgRef,
        setZoomLevel,
        zoomTo,
        stories,
        storiesSystemRef,
        cloudData,
        storiesData,
        dimensions,
        conditions,
        archiveComponent,
    } = usePresenter({
        ...props,
        id,
        selector: id,
    })
    const height = dimensions.height ?? 0
    const width = dimensions.width ?? 0

    return (
        <Box
            height={height}
            boxSizing="border-box"
            position={'fixed'}
            top={0}
            left={0}
            zIndex={0}
            overflow="hidden"
            alignItems="center"
            justifyContent="center"
        >
            {conditions.isZoom0 && (
                <Flex
                    height="100%"
                    width="100%"
                    position="absolute"
                    alignItems={'center'}
                    justifyContent={'center'}
                    zIndex={1}
                >
                    <button onClick={() => undefined}>
                        <Text width="12.5rem">{t('nationalCollectionForDutchArchitectureAndUrbanPlanning')}</Text>
                    </button>
                </Flex>
            )}

            <Flex width={'100%'} height={height} justifyContent="center" alignItems={'center'}>
                <svg
                    overflow="visible"
                    height={height}
                    width={width}
                    ref={svgRef}
                    viewBox={`0 0 ${GALAXY_BASE} ${GALAXY_BASE}`}
                >
                    <>
                        {/* {stories?.length && (
                            <StoriesSystemPosition dimensions={dimensions} ref={storiesSystemRef}>
                                <StoriesSystem disableLinkAndHover={conditions.isZoom1Stories} data={storiesData} />
                            </StoriesSystemPosition>
                        )} */}

                        <GalaxyShadowBackground dimensions={dimensions} />

                        <g className="circles">
                            {cloudData?.map((item, index, array) => {
                                return (
                                    <Circle
                                        defaultBackground="levels.z0.galaxyCloud"
                                        hoverBackground={`levels.z1.${item.class}.hover1`}
                                        key={`${index}-${array.length}`}
                                        className={id}
                                        id={item.id}
                                        pointerEvents={conditions.isZoom1Stories ? 'none' : undefined}
                                    >
                                        {conditions.isZoom1 && (
                                            <Box
                                                onClick={() =>
                                                    zoomTo(
                                                        -item.xFromCenter,
                                                        item.yFromCenter,
                                                        `/landingpage/${item.class}`
                                                    )
                                                }
                                                as="button"
                                                width="100%"
                                                height="100%"
                                                borderRadius="100%"
                                                zIndex={1}
                                                display="flex"
                                                alignItems="center"
                                                justifyContent="center"
                                            >
                                                <Box>
                                                    {item.name === 'Archieven' ? (
                                                        <>
                                                            <Text width="12.5rem" mb={1} textStyle={'cloudText'}>
                                                                {t('archives', { count: item.numberOfInstances })}
                                                            </Text>
                                                            {/* TODO */}
                                                            {console.log(archiveComponent)}
                                                            {!!archiveComponent?.count && (
                                                                <Text width="12.5rem" textStyle={'cloudText'}>
                                                                    {t('archiveItems', {
                                                                        count: archiveComponent.count,
                                                                    })}
                                                                </Text>
                                                            )}
                                                        </>
                                                    ) : (
                                                        item.name !== 'stories' && (
                                                            <>
                                                                <Text width="12.5rem" mb={1} textStyle={'cloudText'}>
                                                                    {t(item.id.toLowerCase()) || item.name}
                                                                </Text>
                                                                <Text width="12.5rem" textStyle={'cloudText'}>
                                                                    {item.numberOfInstances}
                                                                </Text>
                                                            </>
                                                        )
                                                    )}
                                                </Box>
                                            </Box>
                                        )}
                                    </Circle>
                                )
                            })}
                        </g>

                        {cloudData.find(i => i.name === 'stories') && conditions.isZoom1 && (
                            <foreignObject x={GALAXY_BASE / 2 + 75} y={GALAXY_BASE / 2 - 60} width={200} height={100}>
                                <button onClick={() => setZoomLevel(ZoomStates.Zoom1ToZoom1Stories)}>
                                    <Text width="12.5rem">
                                        {cloudData.find(i => i.name === 'stories')?.numberOfInstances}
                                    </Text>
                                    <Text width="12.5rem">{t('stories')}</Text>
                                </button>
                            </foreignObject>
                        )}
                    </>
                </svg>
            </Flex>
        </Box>
    )
}
export default MainGalaxyProps

export const STORIES_SYSTEM_MAX_WIDTH = 537.85
const StoriesSystemPosition = forwardRef<
    SVGForeignObjectElement,
    {
        ref?: React.MutableRefObject<SVGForeignObjectElement | null>
        dimensions: Dimensions
        children: React.ReactNode
    }
>((props, ref) => {
    const { dimensions, children } = props
    const { x, y } = getStoriesSystemDimensions(dimensions)

    return (
        <foreignObject
            ref={ref}
            xmlns="http://www.w3.org/1999/xhtml"
            x={x}
            y={y}
            width={STORIES_SYSTEM_MAX_WIDTH}
            height={STORIES_SYSTEM_MAX_WIDTH}
        >
            {children}
        </foreignObject>
    )
})
StoriesSystemPosition.displayName = 'StoriesSystemPosition'

export function getStoriesSystemDimensions(dimensions: Dimensions) {
    const height = dimensions.height ?? 0

    return {
        x: height / 2 - STORIES_SYSTEM_MAX_WIDTH / 12,
        y: height / 2 - STORIES_SYSTEM_MAX_WIDTH / 2,
    }
}
