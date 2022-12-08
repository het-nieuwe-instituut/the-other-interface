import { getZoom5RelationsRecordTask } from '@/features/pages/tasks/getZoom5RelationsRecordTask'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useRef, useState } from 'react'
import { EntityNames, ObjectRelationsQuery } from 'src/generated/graphql'
import { useD3HeroAnimateElement } from '../../hooks/useD3ClickAnimation'
import { useD3CloudAnimationIn } from '../../hooks/useD3CloudAnimationIn'
import { usePositionClouds } from '../../hooks/usePositionClouds'
import { SVG_DIMENSIONS } from '../../RecordClouds'

type Item = NonNullable<NonNullable<ObjectRelationsQuery['relations']>[0]['randomRelations']>[0]
export function usePresenter() {
    const router = useRouter()
    const {record} = router.query
    const svgRef = useRef<SVGSVGElement | null>(null)
    const [relations, setRelations] = useState<ObjectRelationsQuery['relations'] | undefined>()

    const { relationsPositionData } = usePositionClouds(relations)
    const [ relationLoading, setRelationLoading] = useState<boolean>(true)
    const disabledClick = router.pathname.includes('/story/[slug]')

    const fetchRelations = useCallback(async () => {
        setRelationLoading(true)
        const data =  await getZoom5RelationsRecordTask(record as string)
        setRelationLoading(false)
        setRelations(data?.zoom5relations?.relations as ObjectRelationsQuery['relations'] )  
    }, [record])


    useEffect(() => {
        fetchRelations()
    }, [fetchRelations])


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

            const newRoute = `/landingpage/${router.query.slug}/${router.query.filter}/${router.query.collection}/${
                d.id
            }-${d.type.toLowerCase()}`

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

    return { svgRef, ...zoomEvents, relationLoading, relationsPositionData }
}
