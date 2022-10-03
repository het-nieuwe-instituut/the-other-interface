import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { Box, Flex, Text } from '@chakra-ui/react'
import { times, uniqueId } from 'lodash'
import React, { forwardRef, useEffect, useId, useMemo, useState } from 'react'
import { StoriesSystem } from '../../zoom0/StoriesSystem/StoriesSystem'
import { Circle } from '../Circle'
import { storiesStubs } from '../stubs'
import { Dimensions, ObjectPerType, usePresenter, ZoomLevel } from './usePresenter'

interface Props {
    data: ObjectPerType[]
    dimensions: {
        height: number
        width: number
    }
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
    const objectsPerTypeWithIds = useMemo(
        () => data.map(item => ({ ...item, name: item.class.substring(item.class.lastIndexOf('/') + 1) })),
        [data]
    )
    const { t } = useTypeSafeTranslation('homepage')

    const id = useId().replaceAll(':', '')
    const { svgRef, setZoomLevel, zoomTo, zoomLevel, storiesSystemRef } = usePresenter(dimensions, objectsPerTypeWithIds, id)

    return (
        <Box
            height={dimensions.height}
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

            <Flex width={'100%'} height={dimensions.height} justifyContent="center" alignItems={'center'}>
                <svg
                    overflow="visible"
                    style={{ maxWidth: GALAXY_BASE }}
                    height={dimensions.height}
                    width={dimensions.width}
                    ref={svgRef}
                    viewBox={`0 0 ${GALAXY_BASE} ${GALAXY_BASE}`}
                >
                    <>
                        <style>
                            {`
                                .text { font: italic 13px sans-serif }
                            `}
                        </style>

            

                        {!isLoading && stories?.length && (
                            <StoriesSystemPosition dimensions={dimensions} ref={storiesSystemRef}>
                                <StoriesSystem data={stories ?? []} />
                            </StoriesSystemPosition>
                        )}

                        <ShadowCircles dimensions={dimensions} />

                        <g className="circles">
                            {objectsPerTypeWithIds.map((item, index, array) => {
                                return (
                                    <Circle
                                        key={`${index}-${array.length}`}
                                        className={id}
                                        id={item.name}
                                        pointerEvents={zoomLevel === ZoomLevel.Zoom1Stories ? 'none' : undefined}
                                    >
                                        {zoomLevel === ZoomLevel.Zoom1 && (             
                                            <Flex flex="1" alignItems="center" justifyContent="center">
                                                <button onClick={() => zoomTo(-item.xFromCenter, item.yFromCenter)}>
                                                    <Text width="12.5rem">{item.name}</Text>
                                                    <Text width="12.5rem">{item.numberOfInstances}</Text>
                                                </button>
                                            </Flex>
                                        )}
                                    </Circle>
                                )
                            })}
                        </g>

                        {!isLoading && stories?.length && zoomLevel === ZoomLevel.Zoom1 && (
            
                                <foreignObject
                                    x={GALAXY_BASE / 2 + 75}
                                    y={GALAXY_BASE / 2 - 60}
                                    width={200}
                                    height={100}
                                >
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

const SHADOW_CIRCLE_SIZE_MULTIPLIER = 3.3
const SHADOW_CIRCLE_SIZE = 1169.17
const ShadowCircles: React.FC<{ dimensions: Dimensions }> = ({ dimensions }) => {
    const height = dimensions.height ?? 0

    return (
        <>
            <ShadowCircle
                x={-(SHADOW_CIRCLE_SIZE * SHADOW_CIRCLE_SIZE_MULTIPLIER)}
                y={-(SHADOW_CIRCLE_SIZE * SHADOW_CIRCLE_SIZE_MULTIPLIER) + height / 2}
                width={SHADOW_CIRCLE_SIZE * SHADOW_CIRCLE_SIZE_MULTIPLIER}
                height={SHADOW_CIRCLE_SIZE * SHADOW_CIRCLE_SIZE_MULTIPLIER}
            />
            <ShadowCircle
                x={-(SHADOW_CIRCLE_SIZE * SHADOW_CIRCLE_SIZE_MULTIPLIER)}
                y={height / 2}
                width={SHADOW_CIRCLE_SIZE * SHADOW_CIRCLE_SIZE_MULTIPLIER}
                height={SHADOW_CIRCLE_SIZE * SHADOW_CIRCLE_SIZE_MULTIPLIER}
            />
            <ShadowCircle
                x={0}
                y={-(SHADOW_CIRCLE_SIZE * SHADOW_CIRCLE_SIZE_MULTIPLIER) + height / 2}
                width={SHADOW_CIRCLE_SIZE * SHADOW_CIRCLE_SIZE_MULTIPLIER}
                height={SHADOW_CIRCLE_SIZE * SHADOW_CIRCLE_SIZE_MULTIPLIER}
            />
            <ShadowCircle
                x={0}
                y={height / 2}
                width={SHADOW_CIRCLE_SIZE * SHADOW_CIRCLE_SIZE_MULTIPLIER}
                height={SHADOW_CIRCLE_SIZE * SHADOW_CIRCLE_SIZE_MULTIPLIER}
            />
            <ShadowCircle
                x={SHADOW_CIRCLE_SIZE * 2}
                y={-((SHADOW_CIRCLE_SIZE * (SHADOW_CIRCLE_SIZE_MULTIPLIER * 2)) / 2 - height / 2)}
                width={SHADOW_CIRCLE_SIZE * (SHADOW_CIRCLE_SIZE_MULTIPLIER * 2)}
                height={SHADOW_CIRCLE_SIZE * (SHADOW_CIRCLE_SIZE_MULTIPLIER * 2)}
            />
            <ShadowCircle
                x={-(SHADOW_CIRCLE_SIZE * 8)}
                y={-((SHADOW_CIRCLE_SIZE * (SHADOW_CIRCLE_SIZE_MULTIPLIER * 2)) / 2 - height / 2)}
                width={SHADOW_CIRCLE_SIZE * (SHADOW_CIRCLE_SIZE_MULTIPLIER * 2)}
                height={SHADOW_CIRCLE_SIZE * (SHADOW_CIRCLE_SIZE_MULTIPLIER * 2)}
            />
        </>
    )
}

interface ShadowCircleProps {
    x: number
    y: number
    height: number
    width: number
}
const ShadowCircle: React.FC<ShadowCircleProps> = props => {
    return (
        <foreignObject
            xmlns="http://www.w3.org/1999/xhtml"
            x={props.x}
            y={props.y}
            width={props.width}
            height={props.height}
            pointerEvents="none"
        >
            <Flex
                width={'100%'}
                height="100%"
                background="radial-gradient(50% 50% at 50% 50%, rgba(124, 124, 124, 0.8) 0%, rgba(80, 80, 80, 0.5125) 35.94%, rgba(62, 62, 62, 0) 100%)"
            ></Flex>
        </foreignObject>
    )
}
