import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { Box, Flex, Text } from '@chakra-ui/react'
import { times, uniqueId } from 'lodash'
import React, { forwardRef, useEffect, useId, useMemo, useState } from 'react'
import { Dimensions, ZoomLevel } from '../../types/galaxy'
import { StoriesSystem } from '../../zoom0/StoriesSystem/StoriesSystem'
import { Circle } from '../Circle'
import { GalaxyShadowBackground } from '../GalaxyShadowBackground'
import { storiesStubs } from '../stubs'
import { ObjectPerType } from './hooks/useD3Simulation'
import { usePresenter } from './usePresenter'

interface Props {
    data: ObjectPerType[]
    dimensions: Dimensions
}

export interface InstancesPerClass {
    instance: string
    title: string
    parent: string
}

// TODO: should implement real data, remove useQuery and fetchInstancesPerClass
async function fetchInstancesPerClass() {
    const stub = () => new Promise<typeof storiesStubs>(resolve => resolve(storiesStubs))
    const instancesPerClass = await stub()
    const parents = times(instancesPerClass.length / 10, i => `test${i}`)

    return instancesPerClass
        .map(item => ({
            ...item,
            parent: parents[Math.floor((Math.random() * instancesPerClass.length) / 10) + 1] ?? parents[0],
            id: uniqueId(),
        }))
        .slice(0, 1000)
}

function useQuery<T, Q extends () => ReturnType<Q>>(keys: T, query: Q) {
    const [isLoading, setIsloading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [data, setData] = useState<Awaited<ReturnType<Q>> | undefined>(undefined)

    useEffect(() => {
        async function handle() {
            try {
                setIsError(false)
                setIsloading(true)
                const result = await query()
                setIsloading(false)
                setData(result as Awaited<ReturnType<Q>> | undefined)
            } catch {
                setIsError(true)
            }
        }

        handle()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        isLoading,
        isError,
        data,
    }
}

export const GALAXY_BASE = 800
const Galaxy: React.FC<Props> = ({ data = [], dimensions }) => {
    const { isLoading, data: stories } = useQuery(['instances-per-class'], () => fetchInstancesPerClass())

    // TODO: remove when connected to the gateway
    const objectsPerTypeWithIds = useMemo(
        () => data.map(item => ({ ...item, name: item.class.substring(item.class.lastIndexOf('/') + 1) })),
        [data]
    )
    const { t } = useTypeSafeTranslation('homepage')

    const id = useId().replaceAll(':', '')
    const { svgRef, setZoomLevel, zoomTo, zoomLevel, storiesSystemRef } = usePresenter(
        dimensions,
        objectsPerTypeWithIds,
        id
    )
    const height = dimensions.height ?? 0
    const width = dimensions.width ?? 0

    return (
        <Box
            height={height}
            boxSizing="border-box"
            position={'relative'}
            overflow="hidden"
            alignItems="center"
            justifyContent="center"
        >
            {zoomLevel === ZoomLevel.Zoom0 && (
                <Flex
                    height="100%"
                    width="100%"
                    position="absolute"
                    alignItems={'center'}
                    justifyContent={'center'}
                    zIndex={1}
                >
                    <button onClick={() => setZoomLevel(ZoomLevel.Zoom1)}>
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
                        {!isLoading && stories?.length && (
                            <StoriesSystemPosition dimensions={dimensions} ref={storiesSystemRef}>
                                <StoriesSystem data={stories ?? []} />
                            </StoriesSystemPosition>
                        )}

                        <GalaxyShadowBackground dimensions={dimensions} />

                        <g className="circles">
                            {objectsPerTypeWithIds.map((item, index, array) => {
                                return (
                                    <Circle
                                        defaultBackground="levels.z0.galaxyCloud"
                                        hoverBackground={`levels.z1.${item.class}.hover1`}
                                        key={`${index}-${array.length}`}
                                        className={id}
                                        id={item.name}
                                        pointerEvents={zoomLevel === ZoomLevel.Zoom1Stories ? 'none' : undefined}
                                    >
                                        {zoomLevel === ZoomLevel.Zoom1 && (
                                            <button
                                                onClick={() => zoomTo(-item.xFromCenter, item.yFromCenter)}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    borderRadius: '100%',
                                                    zIndex: 100,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <Box>
                                                    <Text width="12.5rem">{item.name}</Text>
                                                    <Text width="12.5rem">{item.numberOfInstances}</Text>
                                                </Box>
                                            </button>
                                        )}
                                    </Circle>
                                )
                            })}
                        </g>

                        {!isLoading && stories?.length && zoomLevel === ZoomLevel.Zoom1 && (
                            <foreignObject x={GALAXY_BASE / 2 + 75} y={GALAXY_BASE / 2 - 60} width={200} height={100}>
                                <button onClick={() => setZoomLevel(ZoomLevel.Zoom1Stories)}>
                                    <Text width="12.5rem">{stories.length}</Text>
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
export default Galaxy

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
