import { useRef } from 'react'
import { ObjectRelationsQuery } from 'src/generated/graphql'
import { usePositionClouds } from './hooks/usePositionClouds'

export function usePresenter(relations: ObjectRelationsQuery['relations']) {
    const svgRef = useRef<SVGSVGElement | null>(null)
    const { relationsPositionData } = usePositionClouds(relations)

    return { svgRef, relationsPositionData }
}
