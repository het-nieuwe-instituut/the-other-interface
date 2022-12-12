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
    const disabledClick = router.pathname.includes('/story/[slug]')

    const navigateTo = useCallback(
        async (d: d3.SimulationNodeDatum & Item) => {
            if (d.type === EntityNames.Stories) {
                if (!d.slug) {
                    return
                }
                const newRoute = `/story/${d.slug}`

                await router.push(newRoute + '?galaxy=true')
                return
            }

            const newRoute = `/landingpage/${d.type.toLowerCase()}/${router.query.filter}/${router.query.collection}/${
                d.id
            }-${d.type.toLowerCase()}`

            await router.push(newRoute + '?galaxy=true')
        },

        [router]
    )
    
    const zoomEvents = useD3HeroAnimateElement<Item>(
        disabledClick,
        parentRef,
        relationsPositionData,
        { width: SVG_DIMENSIONS.width, height: SVG_DIMENSIONS.height },
        `.foreign-child`,
        navigateTo
    )

    useD3CloudAnimationIn(parentRef, zoomEvents.zoomed)

    return { parentRef, ...zoomEvents, relationsPositionData }
}
