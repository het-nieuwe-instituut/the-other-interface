import { useRef } from 'react'
import { ObjectRelationsQuery } from 'src/generated/graphql'
import { useD3ZoomEvents } from '../../hooks/useD3ZoomEvents'
import { ZoomStates } from '../../types/galaxy'
import { useD3HeroAnimateElement } from './hooks/useD3ClickAnimation'
import { useD3CloudAnimationIn } from './hooks/useD3CloudAnimationIn'
import { usePositionClouds } from './hooks/usePositionClouds'
import { RecordCloudProps, SVG_DIMENSIONS } from './RecordClouds'

type Item = NonNullable<NonNullable<ObjectRelationsQuery['relations']>[0]['randomRelations']>[0]

type Props = RecordCloudProps

export function usePresenter(props: Props) {
    const { relations, dimensions } = props
    const svgRef = useRef<SVGSVGElement | null>(null)
    const { relationsPositionData } = usePositionClouds(relations)
    useD3HeroAnimateElement<Item>(
        true,
        svgRef,
        relationsPositionData,
        { width: SVG_DIMENSIONS.width, height: SVG_DIMENSIONS.height },
        `.foreign-child`
    )
    const zoomEvents = useD3ZoomEvents({ svgRef, dimensions })
    useD3CloudAnimationIn(svgRef, zoomEvents.zoomLevel === ZoomStates.Zoom5ToZoom4)

    return { svgRef, relationsPositionData, ...zoomEvents, ...props }
}
