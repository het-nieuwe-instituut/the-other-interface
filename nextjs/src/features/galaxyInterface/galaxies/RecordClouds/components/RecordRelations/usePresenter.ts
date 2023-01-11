import { getRelationAnimationState } from '@/features/galaxyInterface/hooks/utils'
import { galaxyInterfaceActions } from '@/features/galaxyInterface/stores/galaxyInterface.store'
import { ZoomStates } from '@/features/galaxyInterface/types/galaxy'
import { State } from '@/features/shared/configs/store'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EntityNames, ObjectRelationsQuery, ZoomLevel5RelationsType } from 'src/generated/graphql'
import { useD3RelationsAnimation } from '../../hooks/usD3RelationsAnimation'
import { useD3HeroAnimateElement } from '../../hooks/useD3ClickAnimation'
import { usePositionClouds } from '../../hooks/usePositionClouds'
import { SVG_DIMENSIONS } from '../../RecordClouds'

type Item = NonNullable<NonNullable<ObjectRelationsQuery['relations']>[0]['randomRelations']>[0]
export function usePresenter(relations: Array<ZoomLevel5RelationsType>, parentRef: React.RefObject<SVGSVGElement>) {
    const activeZoom = useSelector((state: State) => state.galaxyInterface.activeZoom)
    const { relationsPositionData } = usePositionClouds(relations)
    const dispatch = useDispatch()
    const params = useSelector((state: State) => state.galaxyInterface.params)

    const afterAnimate = useCallback(
        async (d: d3.SimulationNodeDatum & Item) => {
            console.log(d, d.type === EntityNames.Stories)

            if (d.type === EntityNames.Stories) {
                dispatch(
                    galaxyInterfaceActions.setActiveZoom({
                        activeZoom: ZoomStates.Zoom5ToRelationStill,
                        params: {
                            ...params,
                            slug: d.slug ?? '',
                            record: `${d.id}-${d.slug}`,
                        },
                    })
                )
                return
            }
            dispatch(
                galaxyInterfaceActions.setActiveZoom({
                    activeZoom: ZoomStates.Zoom5ToRelationStill,
                    params: {
                        ...params,
                        slug: d.type.toLowerCase(),
                        record: `${d.id}-${d.type}`,
                    },
                })
            )
        },
        [dispatch, params]
    )
    const beforeAnimate = useCallback(async () => {
        dispatch(
            galaxyInterfaceActions.setActiveZoom({
                activeZoom: ZoomStates.Zoom5ToRelation,
                params: params,
            })
        )
    }, [dispatch, params])

    const zoomEvents = useD3HeroAnimateElement<Item>(
        false,
        parentRef,
        relationsPositionData,
        { width: SVG_DIMENSIONS.width, height: SVG_DIMENSIONS.height },
        `.foreign-child`,
        afterAnimate,
        beforeAnimate
    )

    useD3RelationsAnimation(parentRef, getRelationAnimationState(activeZoom))

    return { parentRef, activeZoom, ...zoomEvents, relationsPositionData }
}
