import { useRouter } from 'next/router'
import { useCallback, useRef } from 'react'
import { EntityNames, ObjectRelationsQuery } from 'src/generated/graphql'
import { useD3HeroAnimateElement } from './hooks/useD3ClickAnimation'
import { useD3CloudAnimationIn } from './hooks/useD3CloudAnimationIn'
import { usePositionClouds } from './hooks/usePositionClouds'
import { SVG_DIMENSIONS } from './RecordClouds'

type Item = NonNullable<NonNullable<ObjectRelationsQuery['relations']>[0]['randomRelations']>[0]
export function usePresenter(relations: ObjectRelationsQuery['relations']) {
    const router = useRouter()
    const svgRef = useRef<SVGSVGElement | null>(null)
    const { relationsPositionData } = usePositionClouds(relations)
    const disabledClick = router.pathname.includes('/story/[slug]')

    const navigateTo = useCallback(
        async (d: d3.SimulationNodeDatum & Item) => {
            if (d.type === EntityNames.Stories) {
                if (!d.slug) {
                    return
                }
                const newRoute = `/story/${d.slug}`

                // client.cache.evict({ id: 'ROOT_QUERY', fieldName: 'zoom5detail' })
                // client.cache.evict({ id: 'ROOT_QUERY', fieldName: 'zoom5relations' })
                await router.push(newRoute + '?galaxy=true')
                return
            }

            const newRoute = `/landingpage/${router.query.slug}/${router.query.filter}/${router.query.collection}/${
                d.id
            }-${d.type.toLowerCase()}`

            // client.cache.evict({ id: 'ROOT_QUERY', fieldName: 'zoom5detail' })
            // client.cache.evict({ id: 'ROOT_QUERY', fieldName: 'zoom5relations' })

            await router.push(newRoute + '?galaxy=true')
        },

        [router]
    )
    const zoomEvents = useD3HeroAnimateElement<Item>(
        disabledClick,
        svgRef,
        relationsPositionData,
        { width: SVG_DIMENSIONS.width, height: SVG_DIMENSIONS.height },
        `.foreign-child`,
        navigateTo
    )

    useD3CloudAnimationIn(svgRef, zoomEvents.zoomed)

    return { svgRef, relationsPositionData, ...zoomEvents }
}
