import { useRef } from 'react'
import { ObjectRelationsQuery } from 'src/generated/graphql'
import { usePositionClouds } from './hooks/usePositionClouds'
import { useD3CloudAnimationIn } from './hooks/useD3CloudAnimationIn'

export function usePresenter(relations: ObjectRelationsQuery['relations']) {
    const svgRef = useRef<SVGSVGElement | null>(null)
    const { relationsPositionData } = usePositionClouds(relations)
    useD3CloudAnimationIn(svgRef)

    return { svgRef, relationsPositionData }
}
