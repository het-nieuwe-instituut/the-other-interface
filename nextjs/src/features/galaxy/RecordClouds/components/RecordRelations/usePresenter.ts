import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { EntityNames, ObjectRelationsQuery, ZoomLevel5RelationsType } from 'src/generated/graphql'
import { useD3HeroAnimateElement } from '../../hooks/useD3ClickAnimation'
import { useD3CloudAnimationIn } from '../../hooks/useD3CloudAnimationIn'
import { usePositionClouds } from '../../hooks/usePositionClouds'
import { SVG_DIMENSIONS } from '../../RecordClouds'

type Item = NonNullable<NonNullable<ObjectRelationsQuery['relations']>[0]['randomRelations']>[0]
export function usePresenter(relations: Array<ZoomLevel5RelationsType>, parentRef:  React.RefObject<SVGSVGElement>) {
    const router = useRouter()
    const { relationsPositionData } = usePositionClouds(relations)

    const navigateTo = useCallback(
        async (d: d3.SimulationNodeDatum & Item) => {
            if (d.type === EntityNames.Stories) {
                if (!d.slug) {
                    return
                }

                await router.push(`/story/${d.id}-${d.slug}`)
                return
            }

            await router.push(`/landingpage/${d.type.toLowerCase()}/${
                d.id
            }-${d.type}`)
        },

        [router]
    )
    
    const zoomEvents = useD3HeroAnimateElement<Item>(
        false,
        parentRef,
        relationsPositionData,
        { width: SVG_DIMENSIONS.width, height: SVG_DIMENSIONS.height },
        `.foreign-child`,
        navigateTo
    )

    useD3CloudAnimationIn(parentRef, zoomEvents.zoomed)

    return { parentRef, ...zoomEvents, relationsPositionData }
}
